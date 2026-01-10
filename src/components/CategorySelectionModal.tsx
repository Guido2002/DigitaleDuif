import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";
import { Bird, ArrowUpRight } from "lucide-react";

// ============================================
// SHARED TYPES & CONSTANTS
// ============================================

type DeviceType = "mobile" | "tablet" | "desktop";

type TimeoutHandle = ReturnType<typeof setTimeout>;

const scheduleStageTrue = <Stage extends Record<string, boolean>>(
  setStage: React.Dispatch<React.SetStateAction<Stage>>,
  key: keyof Stage,
  delayMs: number
): TimeoutHandle =>
  setTimeout(
    () => setStage((prev) => ({ ...prev, [key]: true } as Stage)),
    delayMs
  );

const scheduleStageSequence = <Stage extends Record<string, boolean>>(
  sequence: Record<keyof Stage, number>,
  setStage: React.Dispatch<React.SetStateAction<Stage>>
): TimeoutHandle[] =>
  (Object.entries(sequence) as Array<[keyof Stage, number]>).map(
    ([key, delayMs]) => scheduleStageTrue(setStage, key, delayMs)
  );

const categoryImages: Record<CategoryId, string> = {
  xr: "/media/site/xr.jpeg",
  websites: "/media/site/webapp.jpeg",
  "mobile-apps": "/media/site/ux1.jpeg",
};

const CATEGORY_DISPLAY_LABEL: Record<CategoryId, string> = {
  xr: "XR",
  websites: "Web",
  "mobile-apps": "Mobile",
};

// ============================================
// DEVICE DETECTION HOOK
// ============================================

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 640) setDeviceType("mobile");
      else if (width < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return deviceType;
};

// ============================================
// SHARED COMPONENTS
// ============================================

const DoodleScribble = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 30"
    className={cn("w-28", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15 T 115 15" />
  </svg>
);

const DoodleArrowCurved = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 80 50"
    className={cn("w-20 h-12", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 40 Q 40 40, 50 25 Q 60 10, 75 10" />
    <path d="M65 5 L 75 10 L 65 18" />
  </svg>
);

// Card content components (shared across all devices)
interface CardContentProps {
  categoryId: CategoryId;
  isHovered: boolean;
}

const XrCardContent: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <>
    <div className="absolute inset-0">
      <img
        src={categoryImages.xr}
        alt={CATEGORIES.xr.label}
        className={cn(
          "w-full h-full object-cover transition-transform duration-500",
          isHovered ? "scale-110" : "scale-100"
        )}
        loading="lazy"
        width="400"
        height="300"
      />
    </div>
    <div
      className={cn(
        "absolute inset-0 transition-all duration-300",
        isHovered
          ? "bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
          : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      )}
    />
    <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
      <div className="flex justify-between items-start">
        <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-semibold">
          Populair ★
        </span>
        <div
          className={cn(
            "w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center transition-transform duration-300",
            isHovered ? "rotate-45 scale-110" : ""
          )}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="text-center">
        <h3
          className={cn(
            "text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 transition-transform duration-300 text-center",
            isHovered ? "translate-x-1" : ""
          )}
        >
          {CATEGORY_DISPLAY_LABEL.xr}
        </h3>
        <p className="text-white/80 text-sm lg:text-base max-w-[280px] mx-auto leading-relaxed text-center">
          {CATEGORIES.xr.description}
        </p>
      </div>
    </div>
  </>
);

const StandardCardContent: React.FC<CardContentProps> = ({
  categoryId,
  isHovered,
}) => (
  <>
    <div className="absolute inset-0">
      <img
        src={categoryImages[categoryId]}
        alt={CATEGORIES[categoryId].label}
        className={cn(
          "w-full h-full object-cover transition-transform duration-500",
          isHovered ? "scale-110" : "scale-100"
        )}
        loading="lazy"
        width="400"
        height="300"
      />
    </div>
    <div
      className={cn(
        "absolute inset-0 transition-all duration-300",
        isHovered
          ? "bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"
          : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      )}
    />
    <div className="absolute inset-0 flex flex-col justify-between p-6">
      <div
        className={cn(
          "w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center self-end transition-transform duration-300",
          isHovered ? "rotate-45 scale-110" : ""
        )}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
      <div>
        <h3
          className={cn(
            "text-2xl lg:text-3xl font-black text-white mb-1 transition-transform duration-300",
            isHovered ? "translate-x-1" : ""
          )}
        >
          {CATEGORY_DISPLAY_LABEL[categoryId]}
        </h3>
        <p className="text-white/70 text-xs lg:text-sm line-clamp-2">
          {CATEGORIES[categoryId].description}
        </p>
      </div>
    </div>
  </>
);

// ============================================
// MOBILE VERSION
// ============================================

const MOBILE_ANIMATION_SEQUENCE = {
  logo: 100,
  badge: 250,
  titleWord1: 350,
  titleWord2: 450,
  titleWord3: 550,
  subtitle: 700,
  cards: 900,
} satisfies Record<keyof MobileAnimationStage, number>;

interface MobileCardProps {
  onClick: () => void;
  isVisible: boolean;
  delay: number;
  children: React.ReactNode;
}

const MobileCard: React.FC<MobileCardProps> = ({
  onClick,
  isVisible,
  delay,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : {}}
    transition={{ duration: 0.3, delay }}
    className="min-h-[180px]"
  >
    <button
      onClick={onClick}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/30 touch-manipulation"
    >
      {children}
    </button>
  </motion.div>
);

interface MobileAnimationStage {
  [key: string]: boolean;
  logo: boolean;
  badge: boolean;
  titleWord1: boolean;
  titleWord2: boolean;
  titleWord3: boolean;
  subtitle: boolean;
  cards: boolean;
}

interface MobileLayoutProps {
  onSelect: (id: CategoryId) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ onSelect }) => {
  const [animationStage, setAnimationStage] = useState<MobileAnimationStage>({
    logo: false,
    badge: false,
    titleWord1: false,
    titleWord2: false,
    titleWord3: false,
    subtitle: false,
    cards: false,
  });

  useEffect(() => {
    const timers = scheduleStageSequence(MOBILE_ANIMATION_SEQUENCE, setAnimationStage);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <div className="p-4 pb-2">
        <motion.div
          className="flex items-center"
          initial={{ y: -30, opacity: 0 }}
          animate={animationStage.logo ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <Bird className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-bold text-foreground">
            DigitaleDuif
          </span>
        </motion.div>
      </div>

      {/* Title Section */}
      <div className="px-4 py-4">
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={animationStage.badge ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Kies je richting</span>
          </span>
        </motion.div>

        <h1
          id="category-modal-title"
          className="text-4xl font-black text-foreground leading-[0.85] tracking-tight"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={
              animationStage.titleWord1 ? { opacity: 1, x: 0 } : {}
            }
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            WAAR
          </motion.span>
          <br />
          <motion.span
            className="relative inline-block text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              animationStage.titleWord2 ? { opacity: 1, scale: 1 } : {}
            }
            transition={{ type: "spring", stiffness: 100, damping: 14 }}
          >
            WIL JE
            <motion.span
              className="absolute -bottom-1 left-0 w-full text-primary/60"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                animationStage.titleWord2 ? { scaleX: 1, opacity: 1 } : {}
              }
              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            >
              <DoodleScribble />
            </motion.span>
          </motion.span>
          <br />
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: 30 }}
            animate={
              animationStage.titleWord3 ? { opacity: 1, x: 0 } : {}
            }
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            AAN BOUWEN<span className="text-primary">?</span>
          </motion.span>
        </h1>

        <motion.p
          className="mt-3 text-muted-foreground text-sm max-w-md leading-relaxed"
          initial={{ opacity: 0 }}
          animate={animationStage.subtitle ? { opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          Selecteer je focus en ontdek wat ik voor jou kan betekenen.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex-1 px-4 pb-6">
        <div className="grid grid-cols-1 gap-3">
          <MobileCard
            onClick={() => onSelect("xr")}
            isVisible={animationStage.cards}
            delay={0}
          >
            <XrCardContent isHovered={false} />
          </MobileCard>

          <MobileCard
            onClick={() => onSelect("websites")}
            isVisible={animationStage.cards}
            delay={0.08}
          >
            <StandardCardContent categoryId="websites" isHovered={false} />
          </MobileCard>

          <MobileCard
            onClick={() => onSelect("mobile-apps")}
            isVisible={animationStage.cards}
            delay={0.16}
          >
            <StandardCardContent categoryId="mobile-apps" isHovered={false} />
          </MobileCard>
        </div>
      </div>
    </div>
  );
};

// ============================================
// TABLET VERSION
// ============================================

const TABLET_ANIMATION_SEQUENCE = {
  logo: 150,
  badge: 350,
  titleWord1: 500,
  titleWord2: 650,
  titleWord3: 800,
  subtitle: 1000,
  cards: 1200,
} satisfies Record<keyof TabletAnimationStage, number>;

interface TabletCardProps {
  onClick: () => void;
  isVisible: boolean;
  delay: number;
  isLarge?: boolean;
  children: React.ReactNode;
}

const TabletCard: React.FC<TabletCardProps> = ({
  onClick,
  isVisible,
  delay,
  isLarge,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
    transition={{ type: "spring", stiffness: 80, damping: 16, delay }}
    className={cn(
      isLarge ? "row-span-2 min-h-[320px] md:min-h-[380px]" : "min-h-[150px] md:min-h-[180px]"
    )}
  >
    <button
      onClick={onClick}
      className="relative w-full h-full rounded-[2rem] overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/30 touch-manipulation"
    >
      {children}
    </button>
  </motion.div>
);

interface TabletAnimationStage {
  [key: string]: boolean;
  logo: boolean;
  badge: boolean;
  titleWord1: boolean;
  titleWord2: boolean;
  titleWord3: boolean;
  subtitle: boolean;
  cards: boolean;
}

interface TabletLayoutProps {
  onSelect: (id: CategoryId) => void;
}

const TabletLayout: React.FC<TabletLayoutProps> = ({ onSelect }) => {
  const [animationStage, setAnimationStage] = useState<TabletAnimationStage>({
    logo: false,
    badge: false,
    titleWord1: false,
    titleWord2: false,
    titleWord3: false,
    subtitle: false,
    cards: false,
  });

  useEffect(() => {
    const timers = scheduleStageSequence(TABLET_ANIMATION_SEQUENCE, setAnimationStage);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <div className="p-8 pb-6 flex flex-col items-center text-center">
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ x: -50, opacity: 0, scale: 0.8 }}
          animate={
            animationStage.logo ? { x: 0, opacity: 1, scale: 1 } : {}
          }
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <Bird className="h-7 w-7 text-primary mr-2.5" />
          <span className="text-lg font-bold text-foreground">
            DigitaleDuif
          </span>
        </motion.div>

        <motion.div
          className="mb-5"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={
            animationStage.badge ? { scale: 1, opacity: 1, y: 0 } : {}
          }
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Kies je richting</span>
          </span>
        </motion.div>

        <h1
          id="category-modal-title"
          className="text-6xl md:text-7xl font-black text-foreground leading-[0.85] tracking-tight"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={
              animationStage.titleWord1
                ? { opacity: 1, y: 0, scale: 1 }
                : {}
            }
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            WAAR
          </motion.span>
          <br />
          <motion.span
            className="relative inline-block text-primary"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={
              animationStage.titleWord2
                ? { opacity: 1, x: 0, rotate: 0 }
                : {}
            }
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
          >
            WIL JE
            <motion.span
              className="absolute -bottom-1 left-0 w-full text-primary/60"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                animationStage.titleWord2
                  ? { scaleX: 1, opacity: 1 }
                  : {}
              }
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            >
              <DoodleScribble />
            </motion.span>
          </motion.span>
          <br />
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, scale: 1.3 }}
            animate={
              animationStage.titleWord3 ? { opacity: 1, scale: 1 } : {}
            }
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            AAN BOUWEN<span className="text-primary">?</span>
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 text-muted-foreground text-lg max-w-md mx-auto leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={animationStage.subtitle ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          Selecteer je focus en ontdek wat ik voor jou kan betekenen.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex-1 p-6 pb-10 max-w-[600px] md:max-w-[680px] mx-auto w-full">
        <div className="grid grid-cols-2 grid-rows-[1fr_1fr] gap-4 md:gap-5 auto-rows-fr h-full">
          <TabletCard
            onClick={() => onSelect("xr")}
            isVisible={animationStage.cards}
            delay={0}
            isLarge
          >
            <XrCardContent isHovered={false} />
          </TabletCard>

          <TabletCard
            onClick={() => onSelect("websites")}
            isVisible={animationStage.cards}
            delay={0.12}
          >
            <StandardCardContent categoryId="websites" isHovered={false} />
          </TabletCard>

          <TabletCard
            onClick={() => onSelect("mobile-apps")}
            isVisible={animationStage.cards}
            delay={0.24}
          >
            <StandardCardContent categoryId="mobile-apps" isHovered={false} />
          </TabletCard>
        </div>
      </div>
    </div>
  );
};

// ============================================
// DESKTOP VERSION
// ============================================

const DESKTOP_ANIMATION_SEQUENCE = {
  logo: 200,
  badge: 500,
  titleWord1: 700,
  titleWord2: 900,
  titleWord3: 1100,
  subtitle: 1400,
  arrow: 1700,
  footer: 1900,
  cards: 2200,
} satisfies Record<keyof DesktopAnimationStage, number>;

interface DesktopCardProps {
  categoryId: CategoryId;
  isHovered: boolean;
  onHover: (id: CategoryId | null) => void;
  onClick: () => void;
  isVisible: boolean;
  delay: number;
  isLarge?: boolean;
  children: React.ReactNode;
}

const DesktopCard: React.FC<DesktopCardProps> = ({
  categoryId,
  isHovered,
  onHover,
  onClick,
  isVisible,
  delay,
  isLarge,
  children,
}) => (
  <motion.div
    initial={{ scale: 0.3, z: -800, opacity: 0, rotateX: 25, rotateY: -15 }}
    animate={
      isVisible
        ? {
            scale: isHovered ? 1 : 0.95,
            z: 0,
            opacity: 1,
            rotateX: isHovered ? 0 : 10,
            rotateY: isHovered ? 0 : 4,
          }
        : {}
    }
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 14,
      delay,
      opacity: { duration: 0.4, delay },
    }}
    className={isLarge ? "row-span-2" : ""}
    style={{ transformStyle: "preserve-3d" }}
  >
    <button
      onMouseEnter={() => onHover(categoryId)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className="relative w-full h-full rounded-[2rem] overflow-hidden cursor-pointer group focus:outline-none focus:ring-4 focus:ring-primary/30"
    >
      {children}
    </button>
  </motion.div>
);

interface DesktopAnimationStage {
  [key: string]: boolean;
  logo: boolean;
  badge: boolean;
  titleWord1: boolean;
  titleWord2: boolean;
  titleWord3: boolean;
  subtitle: boolean;
  arrow: boolean;
  footer: boolean;
  cards: boolean;
}

interface DesktopLayoutProps {
  onSelect: (id: CategoryId) => void;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ onSelect }) => {
  const [hoveredCard, setHoveredCard] = useState<CategoryId | null>(null);
  const [animationStage, setAnimationStage] = useState<DesktopAnimationStage>({
    logo: false,
    badge: false,
    titleWord1: false,
    titleWord2: false,
    titleWord3: false,
    subtitle: false,
    arrow: false,
    footer: false,
    cards: false,
  });

  useEffect(() => {
    const timers = scheduleStageSequence(DESKTOP_ANIMATION_SEQUENCE, setAnimationStage);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-screen flex flex-row">
      {/* Left Panel */}
      <div className="w-[48%] xl:w-[45%] p-12 xl:p-16 flex flex-col justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ x: -100, y: -50, opacity: 0, scale: 0.5, rotate: -20 }}
          animate={
            animationStage.logo
              ? { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }
              : {}
          }
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <motion.div
            animate={
              animationStage.logo ? { rotate: [0, -10, 10, -5, 0] } : {}
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Bird className="h-7 w-7 text-primary" />
          </motion.div>
          <span className="ml-2.5 text-lg font-bold text-foreground tracking-tight">
            DigitaleDuif
          </span>
        </motion.div>

        {/* Main content */}
        <div>
          <motion.div
            className="mb-6"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={
              animationStage.badge ? { scale: 1, opacity: 1, y: 0 } : {}
            }
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={
                  animationStage.badge ? { scale: [1, 1.3, 1] } : {}
                }
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span>Kies je richting</span>
            </span>
          </motion.div>

          <h1
            id="category-modal-title"
            className="text-8xl font-black text-foreground leading-[0.85] tracking-tight"
          >
            <motion.span
              className="inline-block"
              initial={{ y: -100, opacity: 0, rotateX: 90 }}
              animate={
                animationStage.titleWord1
                  ? { y: 0, opacity: 1, rotateX: 0 }
                  : {}
              }
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
            >
              WAAR
            </motion.span>
            <br />
            <motion.span
              className="relative inline-block text-primary"
              initial={{ x: -200, opacity: 0, scale: 0.5 }}
              animate={
                animationStage.titleWord2
                  ? { x: 0, opacity: 1, scale: 1 }
                  : {}
              }
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
            >
              WIL JE
              <motion.span
                className="absolute -bottom-1 left-0 w-full text-primary/60"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  animationStage.titleWord2
                    ? { scaleX: 1, opacity: 1 }
                    : {}
                }
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              >
                <DoodleScribble />
              </motion.span>
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ y: 100, opacity: 0, scale: 1.5 }}
              animate={
                animationStage.titleWord3
                  ? { y: 0, opacity: 1, scale: 1 }
                  : {}
              }
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              AAN BOUWEN<span className="text-primary">?</span>
            </motion.span>
          </h1>

          <motion.p
            className="mt-8 text-muted-foreground text-xl max-w-md leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            animate={
              animationStage.subtitle ? { y: 0, opacity: 1 } : {}
            }
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            Selecteer je focus en ontdek wat ik voor jou kan betekenen.
          </motion.p>

          <motion.div
            className="mt-8 text-primary/60"
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={
              animationStage.arrow
                ? { opacity: 1, scale: 1, rotate: 30 }
                : {}
            }
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            <DoodleArrowCurved className="w-24 h-14" />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          className="text-muted-foreground/60 text-sm"
          initial={{ x: -50, opacity: 0 }}
          animate={animationStage.footer ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          ← Je kunt altijd wisselen
        </motion.p>
      </div>

      {/* Right Panel - Cards */}
      <motion.div
        className="w-[52%] xl:w-[55%] p-8 xl:p-10 flex items-center"
        initial={{ opacity: 0 }}
        animate={animationStage.cards ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-full h-[600px] xl:h-[700px] grid grid-cols-2 grid-rows-2 gap-6"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center center",
          }}
        >
          <DesktopCard
            categoryId="xr"
            isHovered={hoveredCard === "xr"}
            onHover={setHoveredCard}
            onClick={() => onSelect("xr")}
            isVisible={animationStage.cards}
            delay={0}
            isLarge
          >
            <XrCardContent isHovered={hoveredCard === "xr"} />
          </DesktopCard>

          <DesktopCard
            categoryId="websites"
            isHovered={hoveredCard === "websites"}
            onHover={setHoveredCard}
            onClick={() => onSelect("websites")}
            isVisible={animationStage.cards}
            delay={0.15}
          >
            <StandardCardContent
              categoryId="websites"
              isHovered={hoveredCard === "websites"}
            />
          </DesktopCard>

          <DesktopCard
            categoryId="mobile-apps"
            isHovered={hoveredCard === "mobile-apps"}
            onHover={setHoveredCard}
            onClick={() => onSelect("mobile-apps")}
            isVisible={animationStage.cards}
            delay={0.3}
          >
            <StandardCardContent
              categoryId="mobile-apps"
              isHovered={hoveredCard === "mobile-apps"}
            />
          </DesktopCard>
        </div>
      </motion.div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

interface CategorySelectionModalProps {
  onClose?: () => void;
}

const CategorySelectionModal: React.FC<CategorySelectionModalProps> = ({
  onClose,
}) => {
  const { showCategoryModal, setCategory, markAsVisited } = useCategory();
  const deviceType = useDeviceType();

  useEffect(() => {
    if (!showCategoryModal) return;

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [showCategoryModal]);

  const handleSelectCategory = (categoryId: CategoryId) => {
    setCategory(categoryId);
    markAsVisited();
    onClose?.();
  };

  // Render device-specific layout
  const renderLayout = () => {
    switch (deviceType) {
      case "mobile":
        return <MobileLayout onSelect={handleSelectCategory} />;
      case "tablet":
        return <TabletLayout onSelect={handleSelectCategory} />;
      default:
        return <DesktopLayout onSelect={handleSelectCategory} />;
    }
  };

  return (
    <AnimatePresence>
      {showCategoryModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "fixed inset-0 z-[100] bg-background",
            "h-[100dvh] overflow-y-auto overscroll-contain",
            "lg:overflow-hidden",
            "[-webkit-overflow-scrolling:touch]"
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
        >
          {renderLayout()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategorySelectionModal;
