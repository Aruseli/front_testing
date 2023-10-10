import { Box, Text, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ThesisDescription } from "./thesis-description";


const descriptionVariants = {
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  hide: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  initial: {
    scale: 0,
    opacity: 0,
    x: '3rem',
  },
};

export function Thesis({
  title = 'Supports all languages and stacks',
  ...props
}:{
  title?: string;
  [key:string]: any;
}) {
  const { colorMode } = useColorMode();
  const [open, setOpen] = useState(false);

  return (<>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          h: 'max-content',
          w: '17rem',
          maxWidth: '18.75rem',
          p: '0.05rem',
          borderRadius: '0.3rem',
          background: colorMode === 'dark' ? 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : '#EEA63A',
          boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb',
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Box
          sx={{
            bg: 'flagBackground',
            borderRadius: '0.3rem',
            p: '0.5rem 1.5rem',
          }}
        >
          <Text as='h2' textStyle='Regular20' align='center'>{title}</Text>
        </Box>
      </Box>
      <AnimatePresence>
        ? <Box as={motion.div} exit='hide' animate={open ? 'show' : 'hide'} variants={descriptionVariants} initial='initial'>
            <ThesisDescription /> 
          </Box>
      </AnimatePresence>
    </>
  );
}
