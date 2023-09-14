import { Box, useColorMode } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
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
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>();
  const viewRef = useRef<any>();
  
  const areaWidth = blockWidth * 1.25; //23.75 = 142.5
  const areaHeight = blockHeight * 1.25;
  const startX = blockWidth / 2;
  const startY = blockHeight / 2;
  
  const x = useSpring(startX, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const y = useSpring(startY, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  
  const rotateX = useTransform(y, [0, areaWidth], [15, -15])
  const rotateY = useTransform(x, [0, areaHeight], [-15, 15])
  
  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  
  function handleMouseLeave() {
    x.set(startY);
    y.set(startY);
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
        width: blockWidth * 1.5,
        height: blockHeight * 1.5,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: blockWidth * 1.5,
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => handleMouseLeave()}
      onViewportLeave={inViewport}
    >
      <motion.div ref={viewRef}
        style={{
          width: blockWidth,
          height: blockHeight,
          rotateX: rotateX,
          rotateY: rotateY,
          position: 'relative',
          borderRadius: '1.375rem',
          overflow: 'hidden',
        }}
        variants={isInView && variants}
        animate="start"
        whileHover="hoverState"
        whileTap="tapState"
        onTap={() => setCurrent(1)}
        transition={{
          type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
        }}
      >
        <Box bg='flagBackground' w='100%' h='100%'>
          {children}
        </Box>
      </motion.div>
    </motion.div>
  )
})