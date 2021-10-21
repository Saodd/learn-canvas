import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    ctx.strokeRect(10,50,500,50)
    ctx.font = '50px serif';
    ctx.textBaseline='bottom'
    ctx.fillText('Hello world 啊', 10, 100);

    const text = ctx.measureText('foo');
    console.log(text.width);
  }, []);

  return (
    <div>
      <canvas width={800} height={800} ref={cRef} className={styles.myCanvas}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
