import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

// Import debug utilities (attaches to window)
import "@/utils/categoryDebug";

// Category types
export type CategoryId = "xr" | "websites" | "mobile-apps";

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel: string;
  description: string;
}

export const CATEGORIES: Record<CategoryId, Category> = {
  xr: {
    id: "xr",
    label: "XR (VR / AR / MR)",
    shortLabel: "XR",
    description: "Virtual Reality, Augmented Reality en Mixed Reality oplossingen",
  },
  websites: {
    id: "websites",
    label: "Websites",
    shortLabel: "Web",
    description: "Websites en webapplicaties",
  },
  "mobile-apps": {
    id: "mobile-apps",
    label: "Mobiele Apps",
    shortLabel: "Apps",
    description: "Native en cross-platform mobiele applicaties",
  },
};

const STORAGE_KEY = "digitaleDuif_selectedCategory";
const FIRST_VISIT_KEY = "digitaleDuif_hasVisited";

const safeStorage = {
  getItem(key: string): string | null {
    if (globalThis.window === undefined) return null;
    try {
      return globalThis.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    if (globalThis.window === undefined) return;
    try {
      globalThis.localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures (e.g. Safari private mode / blocked storage)
    }
  },
};

interface CategoryContextType {
  selectedCategory: CategoryId | null;
  setCategory: (category: CategoryId) => void;
  isFirstVisit: boolean;
  markAsVisited: () => void;
  showCategoryModal: boolean;
  setShowCategoryModal: (show: boolean) => void;
  categories: typeof CATEGORIES;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(() => {
    if (globalThis.window === undefined) return null;
    const stored = safeStorage.getItem(STORAGE_KEY);
    return stored && (stored === "xr" || stored === "websites" || stored === "mobile-apps")
      ? (stored as CategoryId)
      : null;
  });

  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(() => {
    if (globalThis.window === undefined) return true;
    return !safeStorage.getItem(FIRST_VISIT_KEY);
  });

  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(() => {
    // Show modal immediately if first visit and no category selected
    if (globalThis.window === undefined) return false;
    const hasVisited = safeStorage.getItem(FIRST_VISIT_KEY);
    const hasCategory = safeStorage.getItem(STORAGE_KEY);
    return !hasVisited && !hasCategory;
  });

  // Listen for debug event to show modal
  useEffect(() => {
    const handleDebugShowModal = () => {
      setShowCategoryModal(true);
    };
    globalThis.window?.addEventListener("categoryDebug:showModal", handleDebugShowModal);
    return () => {
      globalThis.window?.removeEventListener("categoryDebug:showModal", handleDebugShowModal);
    };
  }, []);

  const setCategory = useCallback((category: CategoryId) => {
    setSelectedCategory(category);
    safeStorage.setItem(STORAGE_KEY, category);
    setShowCategoryModal(false);
  }, []);

  const markAsVisited = useCallback(() => {
    setIsFirstVisit(false);
    safeStorage.setItem(FIRST_VISIT_KEY, "true");
  }, []);

  const contextValue = useMemo(
    () => ({
      selectedCategory,
      setCategory,
      isFirstVisit,
      markAsVisited,
      showCategoryModal,
      setShowCategoryModal,
      categories: CATEGORIES,
    }),
    [selectedCategory, setCategory, isFirstVisit, markAsVisited, showCategoryModal]
  );

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

// Hook to get category-specific content with fallback
export const useCategoryContent = <T,>(
  contentMap: Record<CategoryId, T>,
  fallback?: T
): T | undefined => {
  const { selectedCategory } = useCategory();
  
  if (!selectedCategory) {
    return fallback;
  }
  
  return contentMap[selectedCategory] ?? fallback;
};
