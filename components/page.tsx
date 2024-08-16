import { Box, Button, Center, IconButton, Text } from '@chakra-ui/react';
import { useQueryStore } from '@deep-foundation/store/query';
import { Switch } from './switch-mode';
import { DeepFlag } from './flag/flag';
import { DeepFrameShift } from './flag/frame-shift';
import { DeepFrameMouseTracking } from './flag/frame-mouse-tracking';
import { DeepFrameMouseShift } from './flag/frame-mouse-shift';
import { CursorCircle, CursorCoord } from './flag/cursor';
import { Article } from './article';
import { Thesis } from './thesis';
import { ThesisDescription } from './thesis-description';
import { Podcast } from './podcast/podcast';
import { Member } from './crew/member';
import { Banner, HabrArticle } from './chronicle/habr-article';
import { TimWrite } from './chronicle/tim-write';
import { Channeling } from './chronicle/channeling';
import { Chart } from './words/chart';
import {  RawTable, TableWithFilter } from './words/table-with-filter';
import { Table } from './words/filter-table';
import { VFXImg } from 'react-vfx';
import { Typewriter } from './words-animation/typing-text';
import { RoundButtonAnimation } from '../components/buttons/button-round';
import { FaLanguage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Suspense, useCallback } from 'react';
import { FlyingWordsRu } from './words-animation/flying-words-ru';
import { FlyingWordsEn } from './words-animation/flying-words-en';
import { Theses } from './theses/theses-block';
import { ThesisBlock } from './theses/block';

export function Page() {
  const [page, setPage] = useQueryStore('page', '/');
  const { i18n } = useTranslation();
  const language = i18n.language;
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);
  return (<Box
      w='100%'
      h='100vh'
      position='relative'
      display='flex'
      // gridTemplateColumns='repeat(auto-fit, minmax(300px, 25vw))'
      flexWrap='wrap'
      gap='2rem'
      boxSizing='border-box'
      p='1.5rem'
      alignItems='center'
      justifyContent='center'
      justifyItems='center'
    >
      <Switch />
    {/* <PageContent /> */}
      <DeepFrameMouseTracking>
        <DeepFlag
          title='Deep Foundation'
          subtitle='A new way to build'
          description='Blurring the line between your desktop and your mind-space'
        />
      </DeepFrameMouseTracking>
      <DeepFrameMouseShift>
        <DeepFlag
          title='Deep Foundation'
          subtitle='A new way to build'
          description='Blurring the line between your desktop and your mind-space'
        />
      </DeepFrameMouseShift>
      <CursorCoord />
      <Article>123</Article>
      <Box
        sx={{
          '&>*:nth-of-type(1)': {
            mb: '2rem'
          }
        }}
      >
        <Thesis />
        <Box display='flex' flexFlow='column'>
          <ThesisDescription />
        </Box>
      </Box>
      <Box width='36rem'>
        <Podcast />
      </Box>
      <Box width='30rem'>
        <Member />
      </Box>
      <Box width='50rem'>
        <HabrArticle />
        <Banner />
      </Box>
      <Box width='30rem'>
        <TimWrite />
      </Box>
      <Box width='30rem'>
        <Channeling />
      </Box>
      <Box width='30rem'>
        <Button onClick={() => window.open('/documentation')}>open another page</Button>
      </Box>
      <Box width='30rem' display='flex' flexDirection='row'>
        <Box p='1rem'>
          <VFXImg
            src="logo_blue.svg"
            alt="React Logo"
            shader="rainbow"
          />
        </Box>
        <Box p='1rem'>
          <VFXImg
            src="logo_blue.svg"
            alt="Deep Logo"
            shader="rgbShift"
            // @ts-ignore
            overflow='100'
          />
        </Box>
        <Box p='1rem'>
          <VFXImg
            src="logo_blue.svg"
            alt="Deep Logo"
            shader="glitch"
          />
        </Box>
        <Box p='1rem'>
          <VFXImg
            src="logo_blue.svg"
            alt="Deep Logo"
            shader="duotone"
            uniforms={{
              color1: [0, 0, 1, 1],
              color2: [0, 1, 0, 1],
              speed: 0.2
            }}
          />
        </Box>
      </Box>
      <Box width='30rem' position='relative' border='dotted 1px #4299e1' p='2rem'>
        <Box as="label" pos="absolute" top='0.3em' right='0.3em'>
          <RoundButtonAnimation>
            <IconButton 
              variant='outline' 
              isRound 
              colorScheme='purple' 
              aria-label='russian language button' 
              icon={<FaLanguage />} 
              _focus={{boxShadow: 'none'}}
              _hover={{
                transform: 'scale(1.1)'
              }}
              onClick={() => {
                changeLanguage(language === 'en' ? 'ru' : 'en');
              }}
            />
          </RoundButtonAnimation>
        </Box>
        <Suspense fallback={<div>Loading...</div>}>
          <Typewriter key={language} text="guild--main-tasks-first" delay={200} />
        </Suspense>
      </Box>
      {/* <Box width='1fr'>
        <Chart />
      </Box> */}
      {/* <Box width='100%'>
        <TableWithFilter />
      </Box>
      <Box width='100%'>
        <RawTable />
      </Box>
      <Box width='1fr'>
        <Table />
      </Box>
      <Text color='cyDark'>123</Text>
      <Box width='21rem' height='21rem'>
        <CursorCircle />
      </Box> */}
      <Box width='21rem' height='21rem'>
        <Center sx={{
            '@media(max-width: 325px)': {
              w: '100%'
            }
          }}
        >
        {language == 'en' ? <FlyingWordsEn /> : <FlyingWordsRu />}
        </Center>
      </Box>
      <Box width='100vw' height='max-content'>
        <ThesisBlock />
      </Box>
      {/* <Box width='100vw' height='100%'>
        <Theses />
      </Box> */}
      {/* <Footer setPage={setPage} page={page} /> */}
    </Box>
  );
}