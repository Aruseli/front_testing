import { Box, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


export function Flag() {

  if (revert === true && isPresent) {
    const enterAnimation = async () => {
      await animateDesc(scopeDesc.current, { 
        opacity: 1, 
        scale: 1,
        transition: {
          transition,
        }
      });
      await animate(scope.current, { 
        opacity: 0, 
        scale: 0.3,
        transition: {
          transition,
        }
      })
    }
    enterAnimation();
  } else {
    const exitAnimation = async () => {
      await animateDesc(scopeDesc.current, { 
        opacity: 0, 
        scale: 0.3,
        transition: {
          transition,
        }
      });
      await animate(scope.current, { 
        opacity: 1, 
        scale: 1,
        transition: {
          transition,
        }
      })
    }
    exitAnimation();  
  }
  
  return (<Box as={motion.div}
      ref={ref}
      sx={{
        width: 450,
        height: 450,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 450,
        overflow: 'hidden',
        bg: 'white',
        position: 'relative'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => handleMouseLeave()}
      // onViewportLeave={inViewport}
    >
      <Box 
        backgroundImage='url(localhost:3007/api/file?linkId=1768)' 
        w=blockWidth 
        h=blockHeight 
        position='absolute' 
        top={0} left={0} 
      />
      <Box as={motion.div} 
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
        variants={isInView && variants}
        animate="start"
        // whileHover="hoverState"
        // whileTap="tapState"
        onTap={() => setCurrent(1)}
      >
        <AnimatePresence>
          {revert === true
          ?  <Box 
              as={motion.div}
              ref={scopeDesc}
              onTap={() => setRevert(!revert)}
            >
              <Text align='center' textStyle='body'>{description}</Text>
            </Box>
        
          :  <Box 
              as={motion.div}
              ref={scope} 
              onTap={() => setRevert(!revert)}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Text align='center' textStyle='quoteTitle'>{title}</Text>
              <Text align='center' textStyle='quoteSubtitle'>{subtitle}</Text>
            </Box>
          }
        </AnimatePresence> 
      </Box>
    </Box>)
}