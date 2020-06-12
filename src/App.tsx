import React, { FC, useState, useLayoutEffect } from 'react';
import { Button, Row, Col } from 'antd';
import 'src/App.less';
import Header from 'src/components/header';

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

const App: FC = () => {
  const [width, height] = useWindowSize();
  const maxWidth = 500;
  const maxHeight = 900;

  return (
    <div
      className='App'
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          border: 'solid 1px lightgreen',
          borderRadius: 10,
          width: width > maxWidth ? maxWidth : width,
          height: height > maxHeight ? maxHeight : height,
        }}
      >
        <Header></Header>
      </div>
    </div>
  );
};

export default App;
