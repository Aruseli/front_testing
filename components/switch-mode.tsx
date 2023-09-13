import { Box, Button, useColorMode } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
// @ts-ignore
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const variants = {
  rise: {
    opacity: 1,
    y: '-1.15em', 
    x: '-0.22em',
  },
  down: {
    opacity: 0, 
    y: 0, 
    rotate: -30, 
    scale: 0.2,
  }
}

export const Switch = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const lightControls = useAnimation();
  const darkControls = useAnimation();

 useEffect(() => {
    if (colorMode === 'dark') {
      lightControls.start({ opacity: 0, y: 0, rotate: -30, scale: 0.1 });
      darkControls.start({ opacity: 1, y: '-1.15em', x: '-0.26em', scale: 1, rotate: 0 });
    } else {
      lightControls.start({ opacity: 1, y: '-1.15em', x: '-0.26em', rotate: 0, scale: 1 });
      darkControls.start({ opacity: 0, y: 0, rotate: -30, scale: 0.1 });
    }
  }, [colorMode, lightControls, darkControls]);

  const handleToggleColorMode = () => {
    toggleColorMode();
  }

  return (
    <Box as="label" pos="fixed" top='1rem' right='1rem'>
      <Button
        aria-label="Toggle Dark Mode"
        onClick={handleToggleColorMode}
        borderRadius="full"
        variant="ghost"
        borderColor='switchModeBorder'
        borderWidth='thin'
        pos='relative'
        bg='colorModeButton'
        _hover={{ bg: 'colorModeButton' }}
      >
        <Box pos="relative" zIndex="1">
          <MotionBox
            viewBox="0 0 12 12"
            aria-hidden="true"
            aria-label="light mode"
            animate={lightControls}
            transition={{ duration: 0.9 }}
            pos="absolute"
            top="0.45em"
            left="-0.225em"
            width="0.75em"
            height="0.75em"
          >
            <MoonIcon color='blue.200' />
          </MotionBox>
          <MotionBox
            viewBox="0 0 12 12"
            aria-hidden="true"
            aria-label="dark mode"
            animate={darkControls}
            transition={{ duration: 0.9 }}
            pos="absolute"
            top="0.45em"
            left="-0.225em"
            width="0.75em"
            height="0.75em"
          >
            <SunIcon color='blue.500' />
          </MotionBox>
        </Box>
      </Button>
    </Box>
  );
};