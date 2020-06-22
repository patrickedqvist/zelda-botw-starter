import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  animateParams: {
    rotate: string;
    x: [number, number, number];
    y: [number, number, number];
  };
  className: string;
}

const Triangle: React.FC<Props> = ({ animateParams, className }) => (
  <motion.div
    initial={false}
    animate={animateParams}
    transition={{
      loop: Infinity,
      ease: 'easeInOut',
      duration: 1.3,
    }}
    className={className}
  />
);

export const TrianglesBox: React.FC = () => {
  const MAX = 5;
  const MIN = MAX * -1
  return (
    <>
      <Triangle
        animateParams={{ rotate: '-45deg', x: [0, MIN, 0], y: [0, MIN, 0] }}
        className='zelda-botw-triangle-up absolute left-0 top-0 -mx-1'
      />
      <Triangle
        animateParams={{ rotate: '45deg', x: [0, MAX, 0], y: [0, MIN, 0] }}
        className='zelda-botw-triangle-up absolute right-0 top-0 -mx-1'
      />
      <Triangle
        animateParams={{ rotate: '45deg', x: [0, MIN, 0], y: [0, MAX, 0] }}
        className='zelda-botw-triangle-down absolute left-0 bottom-0 -mx-1'
      />
      <Triangle
        animateParams={{ rotate: '-45deg', x: [0, MAX, 0], y: [0, MAX, 0] }}
        className='zelda-botw-triangle-down absolute right-0 bottom-0 -mx-1 z-10'
      />
    </>
  );
};
