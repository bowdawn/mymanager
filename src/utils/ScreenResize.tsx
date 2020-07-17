import React, { useState, useLayoutEffect, FC, FunctionComponent } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const ScreenResize: FC<any> = (props: any) => {
  const [width, height] = useWindowSize();

  return (
    <div
      style={{
        width:
          width > parseInt(maxScreenWidth) ? parseInt(maxScreenWidth) : width,
        height: height,
      }}
    >
      {props.children}
    </div>
  );
};

export default ScreenResize;
