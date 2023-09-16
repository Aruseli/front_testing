import { Box, useColorMode } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

export const DeepFrameMouseTracking = React.memo<any>(({
  blockWidth = 300,
  blockHeight = 300,
  onTapButton,
  children,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  onTapButton?: () => any;
  children: any;
  [key:string]: any;
}) => {
  const [current, setCurrent] = useState(1);
  const ref = useRef<any>();
  const viewRef = useRef<any>();
    
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const springX = useSpring(x, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const springY = useSpring(y, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
    
  const rotateX = useTransform(springY, [0, 400], [25, -25]);
  const rotateY = useTransform(springX, [0, 400], [-25, 25]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    springX.set(200);
    springY.set(200);
  }

  const { colorMode, toggleColorMode } = useColorMode();
  
  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1] },
    hoverState: {
      boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 2px  #00000026'  },
    tapState: { boxShadow: '0 0px 4px 0 #0000001a' },
  };

  const inViewport = useDebounceCallback(() => {
    setCurrent(0);
  }, 2000);
  
  const isInView = useInView(viewRef);

  return (<motion.div
      ref={ref}
      style={{
        width: 450,
        height: 450,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 450,
        overflow: 'hidden',
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onViewportLeave={inViewport}
    >
      <motion.div ref={viewRef}
        style={{
          width: 300,
          height: 300,
          rotateX: rotateX,
          rotateY: rotateY,
          position: 'relative',
          borderRadius: '0.3rem',
          overflow: 'hidden',
        }}
        variants={isInView && variants}
        animate="start"
        whileHover="hoverState"
        whileTap="tapState"
        transition={{
          // type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
        }}
      >
        <Box bg='flagBackground' w='100%' h='100%'>
          {children}
        </Box>
      </motion.div>
    </motion.div>
  )
})