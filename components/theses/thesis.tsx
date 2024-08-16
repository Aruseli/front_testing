import { Box, Text, useColorMode } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';


const variants = {
  active: colorMode => ({ 
    opacity: 1, scale: 1.05, originX: 1, color: colorMode == 'light' ? '#000' : "#fff",
    transition: { duration: 1.8, ease: [0.04, 0.62, 0.23, 0.98] }
  }),
  inactive: { 
    opacity: 0.7, scale: 1, originX: 1, color: "#2F3365",
    transition: { duration: 1.8, ease: [0.04, 0.62, 0.23, 0.98] }
  },
}
type Props = {
  title: string,
  onActive: () => void,
  activeState: boolean,
}
export const Thesis = memo(({title, onActive, activeState}:Props)=> {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const control = useAnimation();
  useEffect(() => {
    if (activeState) {
      control.start('active');
    } else {
      control.start('inactive');
    }
  }, [activeState]);

  return (
    <Box onClick={onActive}>
      <Text 
        as={motion.div}
        initial="inactive"
        animate={control}
        custom={colorMode}
        exit="inactive"
        variants={variants}
        textStyle='h5'>{t(title)}</Text>
    </Box>
  ) 
})