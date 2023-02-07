import { useWindowScroll } from '@mantine/hooks';

export const useScroll = (
  ref1: React.RefObject<HTMLDivElement>,
  ref2: React.RefObject<HTMLDivElement>
) => {
  let lastScrollTop = 0;
  const [scroll, scrollTo] = useWindowScroll();

  if (scroll.y > lastScrollTop) {
    lastScrollTop = scroll.y;
    scrollTo({ y: ref2?.current?.offsetTop });
    return 'down';
  }
  lastScrollTop = scroll.y;
  scrollTo({ y: ref1?.current?.offsetTop });
  return 'up';
};
