import { Box, Button, useColorMode } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
// @ts-ignore
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

export const Switch = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const lightControls = useAnimation();
  const darkControls = useAnimation();
  const bgControls = useAnimation();

 useEffect(() => {
    if (colorMode === 'dark') {
      lightControls.start({ opacity: 0, y: '1em', rotate: -30, scale: 0.1 });
      darkControls.start({ opacity: 1, y: '0', scale: 1, rotate: 0 });
      bgControls.start({opacity: [0, 1], backgroundColor: '#b9dcfa'});
    } else {
      lightControls.start({ opacity: 1, y: '0', rotate: 0, scale: 1 });
      darkControls.start({ opacity: 0, y: '1em', rotate: -30, scale: 0.1 });
      bgControls.start({opacity: [0, 1], backgroundColor: '#003F91'});
    }
  }, [colorMode, lightControls, darkControls, bgControls]);

  const handleToggleColorMode = () => {
    toggleColorMode();
  }

  return (
    <Box w="2.25rem"h="2.25rem"
      borderRadius='full'
      pos="relative"
    >
      <MotionBox 
        borderRadius='full'
        w="100%"
        h="100%"
        animate={bgControls}
        transition={{ duration: 0.9 }}
        pos="absolute"
        top={0}
      />
      <Button
        aria-label="Toggle Dark Mode"
        onClick={handleToggleColorMode}
        borderRadius="full"
        variant="ghost"
        borderColor='switchModeBorder'
        borderWidth='thin'
        pos='relative'
        width='100%'
        minWidth={0}
        height='100%'
        bg='colorModeButton'
        _hover={{ bg: 'colorModeButton' }}
      >
        <MotionBox
          aria-hidden="true"
          aria-label="light mode"
          animate={lightControls}
          transition={{ duration: 0.9 }}
          pos="absolute"
          x='25%'
          width='1rem'
          height='1rem'
        >
          <MoonIcon color='blue.200' />
        </MotionBox>
        <MotionBox
          aria-hidden="true"
          aria-label="dark mode"
          animate={darkControls}
          transition={{ duration: 0.9 }}
          pos="absolute"
          x='25%'
          width='1rem'
          height='1rem'
        >
          <SunIcon color='blue.500' />
        </MotionBox>
      </Button>
    </Box>
  );
};