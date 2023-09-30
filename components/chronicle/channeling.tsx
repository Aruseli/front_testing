import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { BoxShadow } from '../flag/box-shadow';
import { Telega } from '../icons/telega';
import { Note } from '../icons/note';
import { Arrow } from '../icons/arrow';


export function Channeling({
  title = 'Феникс',
  date = '01.12.2022',
  ...props
}:{
  title?: string;
  date?: string;
  [key:string]: any;
}) {
  const {colorMode} = useColorMode();

  return (<Box display='flex' flexFlow='column' height='max-content'>
      <BoxShadow 
        blockHeight='max-content' 
        styles={{ marginBottom: '1rem' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row',
            borderRadius: '0.3rem',
            background: colorMode === 'dark' ? 'linear-gradient(169deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(120deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
            p: '0.5rem 1rem',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            width: 'max-content',
          }}
          onClick={() => console.log('click_channel')}
        >
          <Text textStyle='Medium14' color='chronicleTextGraphiteWhite' mr='1rem'>проповеди глубины</Text>
          <Telega fill={colorMode === 'light' ? '#4F4F4F' : '#ebf8ff'} />
        </Box>
      </BoxShadow>
      <BoxShadow>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'space-between',
            borderRadius: '0.3rem',
            background: colorMode === 'dark' ? 'linear-gradient(169deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(120deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
            p: '0.5rem 1rem',
            alignItems: 'center',
          }}
          onClick={() => console.log('click')}
        >
          <Box 
            display='flex' 
            flexFlow='row' 
            alignItems='center'
            sx={{
              '&>*:nth-of-type(1)': {
                mr: '1rem',
              }
            }}
          >
            <Note stroke={colorMode === 'light' ? '#4F4F4F' : '#ebf8ff'} />
            <Box display='flex' flexFlow='column'>
              <Text textStyle='Medium14' color='chronicleTextGraphiteWhite' mr='1rem'>{title}</Text>
              <Text textStyle='Regular14' color='chronicleTextGraphiteWhite' mr='1rem'>{date}</Text>
            </Box>
          </Box>
          <Arrow fill={colorMode === 'light' ? '#4F4F4F' : '#ebf8ff'} width={48} height={14} />
        </Box>
      </BoxShadow>
    </Box>
  )
}