import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styles from './index.scss';

const URL_BASE = 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images/';
const PICS: string[][] = [
  ['gallery_1.jpg', 'gallery_2.jpg', 'gallery_3.jpg', 'gallery_4.jpg'],
  ['gallery_5.jpg', 'gallery_6.jpg', 'gallery_7.jpg', 'gallery_8.jpg'],
];

export function App(): JSX.Element {
  const [frame, setFrame] = useState<HTMLImageElement>(null);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setFrame(img);
    };
    img.src = URL_BASE + 'canvas_picture_frame.png';
  }, []);
  const draw = useCallback(
    (e: React.SyntheticEvent) => {
      const img = e.target as HTMLImageElement;
      if (img.getAttribute('id') === 'frame') return;
      const canvas = document.createElement('canvas');
      // 将canvas设置为画框图片的尺寸
      canvas.setAttribute('width', '132px');
      canvas.setAttribute('height', '150px');
      // 将canvas元素插入覆盖图片元素
      img.parentNode.insertBefore(canvas, img);

      // 绘制图片和画框
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 15, 20);
      ctx.drawImage(frame, 0, 0);
    },
    [frame],
  );

  return (
    <div className={styles.body}>
      {!!frame && (
        <table>
          {PICS.map((group, index) => (
            <tr key={index}>
              {group.map((pic) => (
                <td key={pic}>
                  <img src={URL_BASE+pic} onLoad={draw}/>
                </td>
              ))}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
