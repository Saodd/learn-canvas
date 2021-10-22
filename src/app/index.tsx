import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const canvas0 = ref.current.children[0] as HTMLCanvasElement;
    const ctx0 = canvas0.getContext('2d');
    ctx0.fillStyle = 'red';
    ctx0.fillRect(10, 10, 100, 100);

    const canvas1 = ref.current.children[1] as HTMLCanvasElement;
    const ctx1 = canvas1.getContext('2d');
    ctx1.fillStyle = 'green';
    ctx1.fillRect(50, 50, 100, 100);

    const canvas2 = ref.current.children[2] as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d');
    ctx2.drawImage(canvas0, 0, 0);
    ctx2.globalCompositeOperation = 'screen'; // 调整这里，观察效果
    ctx2.drawImage(canvas1, 0, 0);
  }, []);

  return (
    <div className={styles.body} ref={ref}>
      <canvas width={200} height={200}>
        请使用最新的浏览器
      </canvas>
      <canvas width={200} height={200}>
        请使用最新的浏览器
      </canvas>
      <canvas width={200} height={200}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
