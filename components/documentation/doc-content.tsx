import { memo, useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { IMenuItem } from './doc-menu-item';
import { Variants, motion, useAnimation, useInView } from "framer-motion";


const animationVariants: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.8 } }
};

export const DocumentationContent = memo(function DocumentationContent({title, body, children}:IMenuItem) {
  const controls = useAnimation();
  const ref = useRef<any>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (<Box as='article' ref={ref}>
      <Text textStyle='h3' as='header'>{title}</Text>
      {body && <Text fontSize='sm' as={motion.div}
          animate={controls}
          variants={animationVariants}
          style={{ transformOrigin: 'top center' }}
        >
          {body}
        </Text>
      }
      {children && children.map(c => (<>
        <Text textStyle='h4' as='header'>{c.title}</Text>
        {body && <Text fontSize='sm' as={motion.div}
          animate={controls}
          variants={animationVariants}
          style={{ transformOrigin: 'top center' }}
        >
          {c.body}
        </Text>}
      </>))}
    </Box>
  )
})