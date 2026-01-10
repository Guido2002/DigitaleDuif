import * as React from "react";

const TABLET_MAX_WIDTH = 1024; // Tailwind 'lg' breakpoint

export function useIsTabletOrMobile() {
  const [isTabletOrMobile, setIsTabletOrMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = globalThis.matchMedia(`(max-width: ${TABLET_MAX_WIDTH - 1}px)`);
    const onChange = () => {
      setIsTabletOrMobile(globalThis.innerWidth < TABLET_MAX_WIDTH);
    };

    mql.addEventListener("change", onChange);
    setIsTabletOrMobile(globalThis.innerWidth < TABLET_MAX_WIDTH);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTabletOrMobile;
}
