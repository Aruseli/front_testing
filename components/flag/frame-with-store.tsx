import { Box } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';


export function DeepFrameNew({
  blockWidth = 300,
  blockHeight = 300,
  onTapButton,
  link,
  children,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  onTapButton?: () => any;
  link?: any;
  children: any;
  [key:string]: any;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>();
  const viewRef = useRef<any>();

  const areaWidth = blockWidth * 1.25;
  const areaHeight = blockHeight * 1.25;
  const x = useMotionValue(blockWidth / 2);
  const y = useMotionValue(blockHeight / 2);

  const rotateX = useTransform(y, [0, areaWidth], [15, -15]);
  const rotateY = useTransform(x, [0, areaHeight], [-15, 15]);
  console.log('rotateX', rotateX);
  console.log('rotateY', rotateY);
  console.log('x', x);
  console.log('y', y);  
  
  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], borderRadius: "1.375rem" },
    // hoverState: { borderRadius: current == 0 ? "9.375rem" : '1.375rem' },
    // tapState: { scale: "1.1", borderRadius: '1.375rem'  },
  };

  const inViewport = useDebounceCallback(() => {
    setCurrent(0);
  }, 2000);

  const isInView = useInView(viewRef);
    
  
  return (<Box as={motion.div}
      ref={ref}
      sx={{
        width: areaWidth,
        height: areaHeight,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 450,
        overflow: 'hidden',
        bg: 'white',
        position: 'relative'
      }}
    onClick={() => console.log('click')}
      onMouseMove={handleMouseMove}
      // onMouseLeave={() => handleMouseLeave()}
      // onViewportLeave={inViewport}
    >
      <Box as={motion.div} ref={viewRef}
        sx={{
          width: blockWidth,
          height: blockHeight,
          position: 'relative',
          borderRadius: '1.375rem',
          overflow: 'hidden',
          // rotateX: rotateX,
          // rotateY: rotateY,
        }}
        // rotateX={rotateX}
        // rotateY={rotateY}
        variants={variants}
        // variants={isInView && variants}
        animate="start"
        whileHover="hoverState"
        whileTap="tapState"
        onTap={() => setCurrent(1)}
        // @ts-ignore
        transition={{
          type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
        }}
      >
        {children}
      </Box>
    </Box>)
}