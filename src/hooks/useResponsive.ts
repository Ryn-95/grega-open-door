import { useState, useEffect } from 'react';

// Breakpoints personnalisés
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  mobile: 480,
  tablet: 768,
  desktop: 1024,
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;

interface UseResponsiveReturn {
  // États de base
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  
  // Tailles d'écran spécifiques
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  
  // Dimensions actuelles
  windowWidth: number;
  windowHeight: number;
  
  // Fonctions utilitaires
  isAbove: (breakpoint: BreakpointKey) => boolean;
  isBelow: (breakpoint: BreakpointKey) => boolean;
  isBetween: (min: BreakpointKey, max: BreakpointKey) => boolean;
}

export const useResponsive = (): UseResponsiveReturn => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Utiliser ResizeObserver si disponible pour de meilleures performances
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      
      resizeObserver.observe(document.body);
      
      return () => {
        resizeObserver.disconnect();
      };
    } else {
      // Fallback pour les navigateurs plus anciens
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const { width, height } = windowSize;

  // Fonctions utilitaires
  const isAbove = (breakpoint: BreakpointKey): boolean => {
    return width >= BREAKPOINTS[breakpoint];
  };

  const isBelow = (breakpoint: BreakpointKey): boolean => {
    return width < BREAKPOINTS[breakpoint];
  };

  const isBetween = (min: BreakpointKey, max: BreakpointKey): boolean => {
    return width >= BREAKPOINTS[min] && width < BREAKPOINTS[max];
  };

  return {
    // États de base
    isMobile: width < BREAKPOINTS.md,
    isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    isDesktop: width >= BREAKPOINTS.lg,
    
    // Tailles d'écran spécifiques
    isXs: width < BREAKPOINTS.sm,
    isSm: width >= BREAKPOINTS.sm && width < BREAKPOINTS.md,
    isMd: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    isLg: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
    isXl: width >= BREAKPOINTS.xl && width < BREAKPOINTS['2xl'],
    is2Xl: width >= BREAKPOINTS['2xl'],
    
    // Dimensions actuelles
    windowWidth: width,
    windowHeight: height,
    
    // Fonctions utilitaires
    isAbove,
    isBelow,
    isBetween,
  };
};

// Hook spécialisé pour les interactions tactiles
export const useTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window as any).DocumentTouch && document instanceof (window as any).DocumentTouch
      );
    };

    checkTouchDevice();
  }, []);

  return isTouchDevice;
};

// Hook pour détecter l'orientation de l'écran
export const useOrientation = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleOrientationChange = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    
    // Écouter les événements d'orientation spécifiques si disponibles
    if (screen && screen.orientation) {
      screen.orientation.addEventListener('change', handleOrientationChange);
    }

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      if (screen && screen.orientation) {
        screen.orientation.removeEventListener('change', handleOrientationChange);
      }
    };
  }, []);

  return orientation;
};

// Hook pour détecter si on est dans une PWA
export const usePWA = () => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkPWA = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isFullscreen = window.matchMedia('(display-mode: fullscreen)').matches;
      const isMinimalUI = window.matchMedia('(display-mode: minimal-ui)').matches;
      
      setIsPWA(isStandalone || isFullscreen || isMinimalUI);
    };

    checkPWA();
  }, []);

  return isPWA;
};

export default useResponsive; 