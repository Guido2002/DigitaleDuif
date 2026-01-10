import React from "react";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";
import { Glasses, Globe, Smartphone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const categoryIcons: Record<CategoryId, React.ElementType> = {
  xr: Glasses,
  websites: Globe,
  "mobile-apps": Smartphone,
};

const categoryColors: Record<CategoryId, string> = {
  xr: "text-purple-400",
  websites: "text-blue-400",
  "mobile-apps": "text-green-400",
};

interface CategorySwitcherProps {
  variant?: "default" | "compact" | "segmented";
  className?: string;
}

const CategorySwitcher: React.FC<CategorySwitcherProps> = ({
  variant = "default",
  className,
}) => {
  const { selectedCategory, setCategory, categories } = useCategory();

  const currentCategory = selectedCategory ? categories[selectedCategory] : null;
  const CurrentIcon = selectedCategory ? categoryIcons[selectedCategory] : null;

  // Segmented control variant
  if (variant === "segmented") {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-lg bg-muted p-1",
          className
        )}
        role="tablist"
        aria-label="Categorie selectie"
      >
        {(Object.keys(CATEGORIES) as CategoryId[]).map((categoryId) => {
          const category = CATEGORIES[categoryId];
          const Icon = categoryIcons[categoryId];
          const isActive = selectedCategory === categoryId;

          return (
            <button
              key={categoryId}
              onClick={() => setCategory(categoryId)}
              role="tab"
              aria-selected={isActive}
              className={cn(
                "relative flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="category-tab-indicator"
                  className="absolute inset-0 bg-background rounded-md shadow-sm"
                  transition={{ type: "spring", duration: 0.3 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className={cn("w-4 h-4", isActive && categoryColors[categoryId])} />
                <span className="hidden sm:inline">{category.shortLabel}</span>
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // Compact variant (icon only with dropdown)
  if (variant === "compact") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative h-9 w-9",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              className
            )}
            aria-label={`Huidige categorie: ${currentCategory?.label || "Selecteer categorie"}`}
          >
            {CurrentIcon ? (
              <CurrentIcon className={cn("w-5 h-5", selectedCategory && categoryColors[selectedCategory])} />
            ) : (
              <Globe className="w-5 h-5" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {(Object.keys(CATEGORIES) as CategoryId[]).map((categoryId) => {
            const category = CATEGORIES[categoryId];
            const Icon = categoryIcons[categoryId];
            const isActive = selectedCategory === categoryId;

            return (
              <DropdownMenuItem
                key={categoryId}
                onClick={() => setCategory(categoryId)}
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  isActive && "bg-accent"
                )}
              >
                <Icon className={cn("w-4 h-4", categoryColors[categoryId])} />
                <span>{category.label}</span>
                {isActive && (
                  <span className="ml-auto text-xs text-primary">✓</span>
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Default variant (button with dropdown)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "flex items-center gap-2 min-w-[140px]",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            className
          )}
          aria-label={`Huidige categorie: ${currentCategory?.label || "Selecteer categorie"}`}
        >
          <AnimatePresence mode="wait">
            {CurrentIcon && (
              <motion.span
                key={selectedCategory}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <CurrentIcon className={cn("w-4 h-4", selectedCategory && categoryColors[selectedCategory])} />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="flex-1 text-left truncate">
            {currentCategory?.shortLabel || "Categorie"}
          </span>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {(Object.keys(CATEGORIES) as CategoryId[]).map((categoryId) => {
          const category = CATEGORIES[categoryId];
          const Icon = categoryIcons[categoryId];
          const isActive = selectedCategory === categoryId;

          return (
            <DropdownMenuItem
              key={categoryId}
              onClick={() => setCategory(categoryId)}
              className={cn(
                "flex items-center gap-3 cursor-pointer py-2.5",
                isActive && "bg-accent"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  isActive ? "bg-primary/20" : "bg-muted"
                )}
              >
                <Icon className={cn("w-4 h-4", categoryColors[categoryId])} />
              </div>
              <div className="flex-1">
                <div className="font-medium">{category.label}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {category.description}
                </div>
              </div>
              {isActive && (
                <span className="text-primary text-sm">✓</span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategorySwitcher;
