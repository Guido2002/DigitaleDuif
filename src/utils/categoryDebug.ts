/**
 * Debug utilities for category personalization
 * 
 * Usage in browser console:
 *   window.categoryDebug.reset()      - Reset to first visit state
 *   window.categoryDebug.setCategory('xr') - Set specific category
 *   window.categoryDebug.showModal()  - Force show the modal
 *   window.categoryDebug.getState()   - Get current state
 */

const STORAGE_KEY = "digitaleDuif_selectedCategory";
const FIRST_VISIT_KEY = "digitaleDuif_hasVisited";

export const categoryDebug = {
  // Reset everything - simulates first visit
  reset: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(FIRST_VISIT_KEY);
    console.log("✅ Category state reset. Refresh the page to see the modal.");
    window.location.reload();
  },

  // Clear and don't reload
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(FIRST_VISIT_KEY);
    console.log("✅ Category state cleared. Call window.categoryDebug.showModal() or refresh.");
  },

  // Set a specific category
  setCategory: (category: "xr" | "websites" | "mobile-apps") => {
    localStorage.setItem(STORAGE_KEY, category);
    localStorage.setItem(FIRST_VISIT_KEY, "true");
    console.log(`✅ Category set to: ${category}. Refresh to see changes.`);
  },

  // Get current state
  getState: () => {
    const category = localStorage.getItem(STORAGE_KEY);
    const hasVisited = localStorage.getItem(FIRST_VISIT_KEY);
    const state = {
      selectedCategory: category,
      hasVisited: hasVisited === "true",
      isFirstVisit: hasVisited !== "true",
    };
    console.table(state);
    return state;
  },

  // Force show modal (requires React context - will dispatch custom event)
  showModal: () => {
    window.dispatchEvent(new CustomEvent("categoryDebug:showModal"));
    console.log("✅ Modal show event dispatched.");
  },

  // Help
  help: () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║           Category Debug Utilities                         ║
╠════════════════════════════════════════════════════════════╣
║  window.categoryDebug.reset()                              ║
║    → Reset to first visit & reload page                    ║
║                                                            ║
║  window.categoryDebug.clear()                              ║
║    → Clear state without reload                            ║
║                                                            ║
║  window.categoryDebug.setCategory('xr')                    ║
║    → Set category ('xr', 'websites', 'mobile-apps')        ║
║                                                            ║
║  window.categoryDebug.getState()                           ║
║    → Show current localStorage state                       ║
║                                                            ║
║  window.categoryDebug.showModal()                          ║
║    → Force show the category selection modal               ║
╚════════════════════════════════════════════════════════════╝
    `);
  },
};

// Attach to window in development
if (typeof window !== "undefined") {
  (window as unknown as { categoryDebug: typeof categoryDebug }).categoryDebug = categoryDebug;
  
  // Log availability on load
  if (import.meta.env.DEV) {
    console.log("🐦 Category debug tools loaded. Type window.categoryDebug.help() for options.");
  }
}

export default categoryDebug;
