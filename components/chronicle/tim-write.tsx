import { Box, Img, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { BoxShadow } from '../flag/box-shadow';
import { IconProvider } from '../icons/icons';
import { CgArrowLongRightC } from 'react-icons/cg';
import { Arrow } from '../icons/arrow';

export function TimWrite({
  articalNumber = 1,
  date = '30.11.2021',
  description = 'Код зависим от данных и моделей, а значит от абстракций, используемых в них, поэтому рефакторинг неминуем сегодня. Почему? Обычно под рефакторингом подразумевают реорганизацию кода из соображений необходимости использовать данные по-новому. Мы поговорим о самом частом и нелюбимом типе рефакторинга - лавинообразный рефакторинг, возникающем при изменениях в моделях данных, структурах таблиц и бизнес-логике.',

}:{
  articalNumber?: number;
  date?: string;
  description?: string;
}) {

  const {colorMode} = useColorMode();

  return (<Box
      display='flex'
      flexFlow='column'
      borderRadius='0.3rem'
      bg='chronicleBgGraphiteWhite'
      width='100%'
      minW='18.75rem'
      maxW='max-content'
      p='1rem'
    >
      <Text textStyle='Medium16' color='chronicleTextTitleGoldBlue'>Глава {articalNumber}</Text>
      <Text textStyle='Medium14' color='chronicleTextSubtitleGoldBlue'>{date}</Text>
      <Text 
        textStyle='Regular16' 
        color='chronicleTextWhiteGraphite'
        width='100%'
        maxHeight='15rem'
        noOfLines={[3,5]}
      >Код зависим от данных и моделей, а значит от абстракций, используемых в них, поэтому рефакторинг неминуем сегодня. Почему? Обычно под рефакторингом подразумевают реорганизацию кода из соображений необходимости использовать данные по-новому. Мы поговорим о самом частом и нелюбимом типе рефакторинга - лавинообразный рефакторинг, возникающем при изменениях в моделях данных, структурах таблиц и бизнес-логике.</Text>
      {/* <IconProvider name='arrow-right' color={colorMode === 'light' ? '#ebf8ff' : '#4F4F4F'} icon={<CgArrowLongRightC />} size='3rem' /> */}
      <Arrow fill={colorMode === 'light' ? '#ebf8ff' : '#4F4F4F'} width={48} height={12} style={{alignSelf: 'flex-end'}} />
    </Box>
  )
}