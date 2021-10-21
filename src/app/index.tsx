import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    const img = new Image();
    img.onload = function () {
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 3; y++) {
          ctx.drawImage(img, 16, 16, 32, 32, x * 32, y * 32, 32, 32);
        }
      }
    };
    img.src = '/favicon.ico';
  }, []);

  return (
    <div>
      <canvas width={800} height={800} ref={cRef} className={styles.myCanvas}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
