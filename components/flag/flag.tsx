import { Box, Img, Text, useColorMode } from '@chakra-ui/react';
import { 
  AnimatePresence, 
  motion, 
  useAnimation, 
  useInView, 
  useIsPresent} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const variantTitleSide = {  
  show: {
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      type: 'spring',
      delay: 0.35,
      display: {
        delay: 0.3
      }
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    display: 'none',
    transition: {
      type: 'spring',
      display: {
        delay: 0.2
      }
    }
  }
}

const variantDescSide = { 
  show: {
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      type: 'spring',
      delay: 0.35,
      display: {
        delay: 0.3
      }
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    display: 'none',
    transition: {
      type: 'spring',
      display: {
        delay: 0.2
      }
    }
  }
}

export function DeepFlag({
  blockWidth = 19,
  blockHeight = 19,
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
  const [revert, setRevert] = useState(true);
  const viewRef = useRef<any>();

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

  const {colorMode} = useColorMode();

  return (<Box
      // as={motion.div} 
      // ref={viewRef}
      sx={{
        // width: `${blockWidth}rem`,
        // height: `${blockHeight}rem`,
        width: 300,
        height: 300,
        position: 'relative',
        borderRadius: '1.375rem',
        overflow: 'hidden',
        bg: 'transparent',
        p: '3rem 4rem',
      }}
    >
      <AnimatePresence>
        <Box 
          width='100%'
          height='100%'
          as={motion.div}
          animate={animation2}
          exit='hide'
          initial='hide'
          flexFlow='column'
          variants={variantDescSide}
          onTap={() => {
            setRevert(!revert);
          }}
          sx={{
            alignItems: 'center',
            justifyContent: 'center', 
          }}
        >
          <Text align='center' textStyle='Regular20' mb='1.5rem'>{description}</Text>
          {colorMode === 'light' ? <Img src='/logo_gold.svg' />
          : <Img src='/logo_blue.svg' />}
        </Box>
      </AnimatePresence>
      <AnimatePresence>
        <Box 
          width='100%'
          height='100%'
          as={motion.div}
          exit='hide'
          initial='show'
          animate={animation1}
          variants={variantTitleSide}
          onTap={() => setRevert(!revert)}
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            '&>*:nth-of-type(2)': {
              mb: '1rem',
            }
          }}
      >
          <Text align='center' textStyle='Medium20'>{title}</Text>
          <Text align='center' textStyle='Regular20'>{subtitle}</Text>
          {/* image here */}
          <Box 
            backgroundImage={'url(/images/flag.svg)'} 
            sx={{
              width: `${blockWidth / 2.5}rem`,
              height: `${blockHeight / 2.5}rem`
            }} 
            bgSize='cover'
            bgRepeat='no-repeat'
            bgPosition='center'
            bgColor='red'
          />
        </Box>
      </AnimatePresence>
    </Box>
  )
}
