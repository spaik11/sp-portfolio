import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' });
  const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' });
  const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' });

  const isTabletFloor = useMediaQuery({ query: '(max-width: 540px)' });
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' });

  const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' });
  const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' });

  return {
    isMobileSmall,
    isMobileMid,
    isMobileFloor,
    isTabletFloor,
    isTabletMid,
    isTabletCeil,
    isLaptopFloor,
    isLaptopCeil,
  };
};
