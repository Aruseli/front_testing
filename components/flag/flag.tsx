import { Box, Text } from '@chakra-ui/react';
import { 
  AnimatePresence, 
  motion, 
  // useAnimate, 
  useAnimation, 
  useInView, 
  useIsPresent} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const variantTitleSide = {  
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring'
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    transition: {
      type: 'spring'
    }
  }
}

const variantDescSide = { 
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring'
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    transition: {
      type: 'spring'
    }
  }
}

export function DeepFlag({
  blockWidth = 300,
  blockHeight = 300,
  onTapButton,
  subtitle,
  title,
  description,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  onTapButton?: () => any;
  subtitle: string;
  title: string;
  description: string;
  [key:string]: any;
  }) {
  const [revert, setRevert] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>();
  const viewRef = useRef<any>();
  const controls = useAnimation();

  const isPresent = useIsPresent();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (revert === true) {
      animation1.start('show');
      animation2.start('hide');
    } else {
      animation1.start('hide');
      animation2.start('show');
    }
  }, [revert, animation1, animation2]);

  const isInView = useInView(viewRef);
  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], borderRadius: "1.375rem" },
    // hoverState: { borderRadius: current == 0 ? "9.375rem" : '1.375rem' },
    // tapState: { scale: "1.1", borderRadius: '1.375rem'  },
  };
  // if (revert === true && isPresent) {
  //   const enterAnimation = async () => {
  //     await animateDesc(scopeDesc.current, { 
  //       opacity: 1, 
  //       scale: 1,
  //       transition: {
  //         type: 'spring'
  //       }
  //     });
  //     await animate(scope.current, { 
  //       opacity: 0, 
  //       scale: 0.3,
  //       transition: {
  //         type: 'spring'
  //       }
  //     })
  //   }
  //   enterAnimation();
  // } else {
  //   const exitAnimation = async () => {
  //     await animateDesc(scopeDesc.current, { 
  //       opacity: 0, 
  //       scale: 0.3,
  //       transition: {
  //         type: 'spring'
  //       }
  //     });
  //     await animate(scope.current, { 
  //       opacity: 1, 
  //       scale: 1,
  //       transition: {
  //         type: 'spring'
  //       }
  //     })
  //   }
  //   exitAnimation();  
  // }

  return (<Box>
    <Box 
      backgroundImage='url(/images/flag.svg)' 
      w={blockWidth} 
      h={blockHeight} 
      position='absolute' 
      top={0} left={0} 
    />
    <Box
      // as={motion.div} 
        // ref={viewRef}
        sx={{
          width: blockWidth,
          height: blockHeight,
          position: 'relative',
          borderRadius: '1.375rem',
          overflow: 'hidden',
          bg: 'backgroundModal',
          p: '3rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 25%)'
        }}
        // variants={isInView && variants}
        // animate="start"
        // whileHover="hoverState"
        // whileTap="tapState"
        // onTap={() => setCurrent(1)}
      >
        <AnimatePresence>
          <Box 
            as={motion.div}
          // ref={scopeDesc}
            animate={animation2}
            variants={variantDescSide}
            onTap={() => {
              setRevert(!revert);
              console.log('revert_anime2', revert);
            }}
          >
            <Text align='center' textStyle='body'>{description}</Text>
          </Box>
        </AnimatePresence>
        <AnimatePresence>
          <Box 
            as={motion.div}
            // ref={scope} 
            animate={animation1}
            variants={variantTitleSide}
            onTap={() => {
              setRevert(!revert);
              console.log('revert_anime1', revert);
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Text align='center' textStyle='quoteTitle'>{title}</Text>
            <Text align='center' textStyle='quoteSubtitle'>{subtitle}</Text>
          </Box>
        </AnimatePresence>
      </Box>
    </Box>
  )
}
  // return (<Box as={motion.div}
  //       ref={ref}
  //       sx={{
  //         width: 450,
  //         height: 450,
  //         display: "flex",
  //         placeItems: "center",
  //         placeContent: "center",
  //         perspective: 450,
  //         overflow: 'hidden',
  //       }}
  //       onMouseMove={handleMouseMove}
  //       onMouseLeave={() => handleMouseLeave()}
  //       onViewportLeave={inViewport}
  //     >
  //       <Box as={motion.div} ref={viewRef}
  //         sx={{
  //           width: blockWidth,
  //           height: blockHeight,
  //           position: 'relative',
  //           borderRadius: '1.375rem',
  //           overflow: 'hidden',
  //         }}
  //         rotateX={rotateX}
  //         rotateY={rotateY}
  //         variants={isInView && variants}
  //         animate="start"
  //         whileHover="hoverState"
  //         whileTap="tapState"
  //         onTap={() => setCurrent(1)}
  //         // @ts-ignore
  //         transition={{
  //           type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
  //         }}
  //       >
        
  //       abc
  //     </Box>
  //   </Box>

  // <AnimatePresence>
  //         {revert === true
  //         ?  <Box 
  //             as={motion.div}
  //           // ref={scopeDesc}
  //             animate={animation2}
  //             variants={variantDescSide}
  //             onTap={() => setRevert(!revert)}
  //           >
  //             <Text align='center' textStyle='body'>{description}</Text>
  //           </Box>
        
  //         :  <Box 
  //             as={motion.div}
  //             // ref={scope} 
  //             animate={animation1}
  //             variants={variantTitleSide}
  //             onTap={() => setRevert(!revert)}
  //             sx={{
  //               display: 'flex',
  //               flexDirection: 'column'
  //             }}
  //           >
  //             <Text align='center' textStyle='quoteTitle'>{title}</Text>
  //             <Text align='center' textStyle='quoteSubtitle'>{subtitle}</Text>
  //           </Box>
  //         }
  //       </AnimatePresence>