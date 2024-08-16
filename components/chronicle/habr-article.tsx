import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { BoxShadow } from '../flag/box-shadow';

export function HabrArticle({
  title = 'Фактор рефакторинга',
  description = 'Код зависим от данных и моделей, а значит от абстракций, используемых в них, поэтому рефакторинг неминуем сегодня. Почему? Обычно под рефакторингом подразумевают реорганизацию кода из соображений необходимости использовать данные по-новому. Мы поговорим о самом частом и нелюбимом типе рефакторинга - лавинообразный рефакторинг, возникающем при изменениях в моделях данных, структурах таблиц и бизнес-логике.',
  date = '25.08.2021',
}:{
  title?: string;
  description?: string;
  date?: string;
}) {
  return (<Box display='flex' flexFlow='column'>
      <Text textStyle='Regular16' color='chronicleTextSubtitleGoldBlue' alignSelf='flex-end'>{date}</Text>
      <Box
        display='flex'
        flexFlow='column'
        borderRadius='0.3rem'
        bg='chronicleBgGoldBlue'
        width='100%'
        minW='18.75rem'
        p='1rem'
      >
        <Text textStyle='Regular20' color='chronicleTextTitleGoldBlue'>{title}</Text>
        <Text textStyle='Regular16' color='chronicleTextGraphiteWhite'>{description}</Text>
      </Box>
    </Box>
  )
}

export function Banner({src = '/chronical/react_desktop.webp'}:{src?: string}) {
  return (<BoxShadow>
      <Box>
        <Img src={src} />
      </Box>
    </BoxShadow>
  )
}