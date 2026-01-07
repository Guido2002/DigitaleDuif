import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Accessibility, 
  X, 
  Type, 
  Contrast, 
  Pause,
  RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AccessibilitySettings {
  fontSize: "normal" | "large" | "x-large";
  highContrast: boolean;
  reduceMotion: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: "normal",
  highContrast: false,
  reduceMotion: false,
};

const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("accessibility-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.classList.remove("text-size-normal", "text-size-large", "text-size-xlarge");
    if (newSettings.fontSize === "large") {
      root.classList.add("text-size-large");
    } else if (newSettings.fontSize === "x-large") {
      root.classList.add("text-size-xlarge");
    }
    
    // High contrast
    root.classList.toggle("high-contrast", newSettings.highContrast);
    
    // Reduce motion
    root.classList.toggle("reduce-motion", newSettings.reduceMotion);
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem("accessibility-settings", JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem("accessibility-settings");
  };

  const cycleFontSize = () => {
    const sizes: AccessibilitySettings["fontSize"][] = ["normal", "large", "x-large"];
    const currentIndex = sizes.indexOf(settings.fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    updateSetting("fontSize", sizes[nextIndex]);
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="icon"
        className="fixed bottom-6 left-6 z-40 h-12 w-12 rounded-full shadow-lg bg-card border-border hover:bg-accent hover:scale-105 transition-all duration-150 flex"
        aria-label="Toegankelijkheidsinstellingen openen"
      >
        <Accessibility className="h-5 w-5" />
      </Button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-6 bottom-24 z-50 w-72 bg-card border border-border rounded-2xl shadow-2xl p-5"
              role="dialog"
              aria-label="Toegankelijkheidsinstellingen"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Toegankelijkheid</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                  aria-label="Sluiten"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* Font Size */}
                <button
                  onClick={cycleFontSize}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-150",
                    settings.fontSize === "normal"
                      ? "border-border hover:border-primary/50 hover:bg-muted"
                      : "border-primary bg-primary/10 text-primary"
                  )}
                >
                  <Type className="h-5 w-5" />
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Tekstgrootte</p>
                    <p className="text-xs text-muted-foreground">
                      {settings.fontSize === "normal" && "Normaal"}
                      {settings.fontSize === "large" && "Groot"}
                      {settings.fontSize === "x-large" && "Extra groot"}
                    </p>
                  </div>
                </button>

                {/* High Contrast */}
                <button
                  onClick={() => updateSetting("highContrast", !settings.highContrast)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-150",
                    settings.highContrast
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted"
                  )}
                >
                  <Contrast className="h-5 w-5" />
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Hoog contrast</p>
                    <p className="text-xs text-muted-foreground">
                      {settings.highContrast ? "Aan" : "Uit"}
                    </p>
                  </div>
                </button>

                {/* Reduce Motion */}
                <button
                  onClick={() => updateSetting("reduceMotion", !settings.reduceMotion)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-150",
                    settings.reduceMotion
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted"
                  )}
                >
                  <Pause className="h-5 w-5" />
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">Minder animaties</p>
                    <p className="text-xs text-muted-foreground">
                      {settings.reduceMotion ? "Aan" : "Uit"}
                    </p>
                  </div>
                </button>
              </div>

              {/* Reset */}
              <button
                onClick={resetSettings}
                className="w-full mt-4 flex items-center justify-center gap-2 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Instellingen resetten
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityPanel;
