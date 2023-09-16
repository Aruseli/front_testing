import { Box } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, RefObject, useEffect, useState } from 'react';


// export function useFollowPointer(ref: RefObject<HTMLElement>, refZone: any) {
//   const [point, setPoint] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     if (!ref.current) return;

//     const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
//       const element = ref.current!;

//       const x = (clientX - element.offsetLeft - element.offsetWidth) / 10;
//       const y = (clientY - element.offsetTop - element.offsetHeight ) / 10;
//       setPoint({ x, y });
//     };

//     const zone = refZone.current!;
//     zone.addEventListener("pointermove", handlePointerMove);
//     return () => zone.removeEventListener("pointermove", setPoint({ x: 0, y: 0 }));
//   }, []);

//   return point;
// }

export function DeepFrameShift({
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
  const ref = useRef(null);
  // const refZone = useRef(null);
  // const { x, y } = useFollowPointer(ref, refZone);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  console.log('mousePosition', mousePosition.x, mousePosition.y);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    // <Box as={motion.div}
    //   // ref={refZone}
    //   sx={{
    //     width: 450,
    //     height: 450,
    //     display: "flex",
    //     placeItems: "center",
    //     placeContent: "center",
    //     overflow: 'hidden',
    //     position: 'relative'
    //   }}
    // >
      <Box as={motion.div}
        ref={ref}
        sx={{
          width: 300,
          height: 300,
          position: 'relative',
          borderRadius: '1.375rem',
          overflow: 'hidden',
          boxShadow: '0 0px 4px 0 #0000001a',
          bg: 'flagBackground',
        }}
        variants={variants}
        animate="default"
        // @ts-ignore
        transition={{
          x: {
            duration: 0.3,
            ease: 'linear',
            repeat: 0,
            type: 'spring',
            stiffness: 80,
          },
          y: {
            duration: 0.3,
            ease: 'linear',
            repeat: 0,
            type: 'spring',
            stiffness: 80,
          },
        }}
        // animate={{ x, y }}
        // transition={{
          // type: "spring",
          // damping: 3,
          // stiffness: 50,
        //   restDelta: 0.001,
        //   type: "spring", mass: 0.5, bounce: 0.25, stiffness: 100, damping: 9
        // }}
      >
        {children}
      </Box>
    // </Box >
  )
}