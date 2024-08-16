import { Box, Text, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";

const variants = {
  active: colorMode => ({ 
    opacity: [0, 1], scale: 1, x: 0, color: colorMode == 'light' ? '#000' : "#fff",
    transition: { duration: 1.8, ease: [0.04, 0.62, 0.23, 0.98] }
  }),
  inactive: { 
    opacity: [1, 0.1], scale: 0.1, x: '100%', color: "#2F3365",
    transition: { duration: 1.8, ease: [0.04, 0.62, 0.23, 0.98] }
  },
}
type Props = {
  text: string,
  activeState: boolean,
}
export const ThesisDescription = ({text, activeState}:Props) => {
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
      <Text 
        textStyle='body1'
        as={motion.div}
        initial="inactive"
        animate={control}
        exit="inactive"
        variants={variants}
        custom={colorMode}
        sx={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}
      >{t(text)}</Text>

  )
}