import { Box } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, RefObject, useEffect, useState } from 'react';


export function useFollowPointer(ref: RefObject<HTMLElement>, refZone: any) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = (clientX - element.offsetLeft - element.offsetWidth) / 10;
      const y = (clientY - element.offsetTop - element.offsetHeight ) / 10;
      setPoint({ x, y });
      console.log('element.offsetLeft', element.offsetLeft);
      console.log('element.offsetWidth', element.offsetWidth);
      console.log('clientX', clientX);
      console.log('x', x);
    };
    const zone = refZone.current!;
    zone.addEventListener("pointermove", handlePointerMove);
    return () => zone.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

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
  const refZone = useRef(null);
  const { x, y } = useFollowPointer(ref, refZone);
  // useEffect(() => {
  //   const zone = refZone.current!;
  //   zone.addEventListener("pointerover", (event) => {
  //     console.log("Pointer moved in");
  //   });
  //   zone.addEventListener("pointerout", (event) => {
  //     console.log("Pointer moved out");
  //   });
  // }, []);

  return (<Box as={motion.div}
      ref={refZone}
      sx={{
        width: blockWidth * 1.5,
        height: blockHeight * 1.5,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: blockWidth * 1.5,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box as={motion.div}
        ref={ref}
        sx={{
          width: blockWidth,
          height: blockHeight,
          position: 'relative',
          borderRadius: '1.375rem',
          overflow: 'hidden',
          boxShadow: '0 0px 4px 0 #0000001a',
          bg: 'flagBackground',
        }}
        animate={{ x, y }}
        // @ts-ignore
        transition={{
          // type: "spring",
          // damping: 3,
          // stiffness: 50,
          restDelta: 0.001,
          type: "spring", mass: 0.5, bounce: 0.25, stiffness: 100, damping: 9
        }}
      >
        {children}
      </Box>
    </Box>)
}