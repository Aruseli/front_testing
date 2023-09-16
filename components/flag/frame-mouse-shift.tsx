import { Box, Img, useColorMode } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';


const transition = {
  type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
};

export const DeepFrameMouseShift = React.memo<any>(({
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
  const ref = useRef<any>();
  const viewRef = useRef<any>();
    
  const x = useMotionValue(150);
  const y = useMotionValue(150);
  const springX = useSpring(x, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const springY = useSpring(y, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
    
  const shiftX = useTransform(springY, [0, 300], [45, -45]);
  const shiftY = useTransform(springX, [0, 300], [-45, 45]);

  function handleMouse(event) {
    // const rect = event.currentTarget.getBoundingClientRect();
    const rect = viewRef.current?.getBoundingClientRect();
    console.log('rect', rect)
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    console.log('x', x)
    console.log('y', y)
    console.log('event.clientX', event.clientX) //mouse position x
    console.log('event.clientY', event.clientY) //mouse position y
  }

  function handleMouseLeave() {
    shiftX.set(150);
    shiftY.set(150);
    console.log('shiftX', shiftX)
    console.log('shiftY', shiftY)
    console.log('mouse leave')
  }

  const { colorMode } = useColorMode();
  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], transition },
    hoverState: {
      boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 2px  #00000026', transition },
    tapState: { boxShadow: '0 0px 4px 0 #0000001a', transition },
  };

  return (<motion.div
      // ref={ref}
      style={{
        width: 450,
        height: 450,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        overflow: 'hidden',
      }}
      // onMouseMove={handleMouse}
      // onMouseLeave={handleMouseLeave}
      >
      <Box
        sx={{
          width: 300,
          height: 300,
          position: 'relative',
          borderRadius: '0.3rem',
        }}
      >
        <Img src='/gradient.webp' w='300px' h='300px' sx={{position: 'absolute'}} /> 
        <motion.div ref={viewRef}
          style={{
            width: 300,
            height: 300,
            x: shiftX,
            y: shiftY,
            position: 'absolute',
            borderRadius: '0.3rem',
            overflow: 'hidden',
          }}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          variants={variants}
          animate="start"
          whileHover="hoverState"
          whileTap="tapState"
        >
          <Box bg='flagBackground' w='100%' h='100%'>
            {children}
          </Box>
        </motion.div>
      
      </Box>
    </motion.div>
  )
})