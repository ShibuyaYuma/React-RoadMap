/*
Framer Motion: アニメーションライブラリ. 簡単にインタラクティブで複雑なアニメーションを作成できる

インストール: npm install framer-motion
*/

import { motion } from 'framer-motion';

const Animation1: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} // 初期状態
            animate={{ opacity: 1 }}  // アニメーション後
            transition={{ duration: 2 }} // アニメーションの時間
        >
            <h1>Hello, World!</h1>
        </motion.div>
    );
}

const Animation2: React.FC = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}  // 初期状態（位置と透明度）
            animate={{ x: 0, opacity: 1 }}    // アニメーション後
            transition={{ duration: 1 }}       // アニメーションの時間
        >
            <h1>Move and Fade In!</h1>
        </motion.div>
    );
}

const Animation3: React.FC = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}  // ホバー時にサイズが 1.2 倍になる
            whileTap={{ scale: 0.8 }}    // クリック時にサイズが 0.8 倍になる
        >
            Hover or Tap Me!
        </motion.button>
    );
}

const Animation4: React.FC = () => {
    return (
        <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}  // バネのような動き
        >
            <h1>Spring Animation</h1>
        </motion.div>
      );
}

const FramerMotion: React.FC = () => {
    return(
        <div>
            <Animation1 />
            <Animation2 />
            <Animation3 />
            <Animation4 />
        </div>
    )    
};

export default FramerMotion;
