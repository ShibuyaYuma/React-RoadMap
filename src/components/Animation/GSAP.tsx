/*
GSAP: ウェブアニメーション や インタラクティブなUI の作成に適しており、高性能でスムーズなアニメーションを実現

インストール: npm install gsap
*/

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Gsap: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 200, duration: 1, ease: "power2.out" });
    }
  }, []);

  return <div ref={boxRef} style={{ width: 100, height: 100, background: "red" }}>Box</div>;
};

export default Gsap;
