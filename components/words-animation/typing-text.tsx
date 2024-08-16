import { Box, usePrefersReducedMotion } from '@chakra-ui/react';
import { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer";
import { blink } from './keyframes';


type TypeWrite = {
  text: string;
  delay: number;
};

export const Typewriter = memo(function Typewriter({ text, delay }: TypeWrite) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const {colorMode} = useColorMode();
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const prefersReducedMotion = usePrefersReducedMotion();
  const cursorAnimation = prefersReducedMotion
? undefined
: `${blink} 0.2s step-end infinite`;

  useEffect(() => {
    setCurrentText(''); // Сброс текста при изменении языка
    setCurrentIndex(0); // Сброс индекса при изменении языка
  }, [language]);

  useEffect(() => {
    if (inView && currentIndex < t(text).length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + t(text)[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, inView, language, t]);

  return (<span ref={ref}>
      {currentText}
      {currentIndex < t(text).length && <Box animation={cursorAnimation} sx={{
        display: 'inline-block',
        width: '1px',
        height: '1rem',
        backgroundColor: 'text',
        transform: 'translateY(3px)'
      }} />}
    </span>
  )
});