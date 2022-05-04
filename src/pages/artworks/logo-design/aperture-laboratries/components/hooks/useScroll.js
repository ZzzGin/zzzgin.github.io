import React from "react";
import _ from "lodash";

export const useScroll = (throttle = 1) => {

  const getScrollPosition = () =>
      window.scrollY || document.documentElement.scrollTop;

  const getScrollTop = () =>
      (document.scrollingElement || document.documentElement).scrollTop;

  const getScrollBottom = () =>
      Math.abs(
          window.innerHeight + getScrollPosition() - document.body.scrollHeight
      );

  const getScrollPercentage = () => {
      const scrollPosition = getScrollPosition();
      const scrollHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      const scrollTop = scrollPosition / scrollHeight || 0;

      return scrollTop * 100;
  };

  const scrollThrottle = React.useRef(throttle);
  const [scroll, setScroll] = React.useState({
    hasScrolled: false,
    top: 0,
    bottom: 0,
    percentage: 0
  });

  React.useEffect(() => {
    scrollThrottle.current = throttle;
  }, [throttle]);

  React.useEffect(() => {
    const updateScroll = () => {
      setScroll({
        hasScrolled: true,
        top: getScrollTop(),
        bottom: getScrollBottom(),
        percentage: getScrollPercentage()
      });
    };
    const scrollListener = _.throttle(updateScroll, scrollThrottle.current);

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return scroll;
}