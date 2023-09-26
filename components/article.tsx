import { Box, HStack, IconButton, Img, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ChatIcon, IconProvider, ViewIcon } from './icons/icons';
import { TbEyePlus } from 'react-icons/tb';
import { PiChatsThin, PiEyeThin } from 'react-icons/pi';
import { BoxShadow } from './flag/box-shadow';


export const Article = React.memo<any>(({
  title = 'Фактор рефакторинга',
  views = 4800,
  comments = 36,
  children,
  ...props
}:{
  title?: string;
  views?: number;
  comments?: number;
  children: any;
  [key:string]: any;
}) => {

  const {colorMode} = useColorMode();

  return (<BoxShadow blockWidth='max-content' blockHeight='max-content'>
      <Box
        as='article'
        sx={{
          maxWidth: '15rem',
          padding: '0.05rem',
          position: 'relative',
          borderRadius: '0.3rem',
          background: colorMode === 'dark' ? 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(120deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
        }}
        {...props}
      >
        <Box
          sx={{
            background: 'flagBackground',
            color: 'text',
            padding: '1.3rem 1.2rem',
            borderRadius: '0.3rem',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
          }}
        >
          <Text textStyle='Medium20' align='center' mb='1rem'>{title}</Text>
          <Box display='flex' flexFlow='row' mb='2rem'>
            <HStack spacing='0.3rem' mr='1rem'>
              <IconProvider icon={<PiEyeThin />} color={colorMode === 'light' ? '#060608' : '#fff'} />
              <Text textStyle='Medium16'>{views}</Text>
            </HStack>
            <HStack spacing='0.3rem'>
              <IconProvider icon={<PiChatsThin />} color={colorMode === 'light' ? '#060608' : '#fff'} />
              <Text textStyle='Medium16'>{comments}</Text>
            </HStack>
          </Box>
          <Box borderRadius='0.3rem' overflow='hidden' border='thin solid #dcf6ff' sx={{flex: '1 1 auto'}}>
            <Img src='/article1.webp' alt='' />
          </Box>
        </Box>
      </Box>
    </BoxShadow>
  );
});