import { Box, Text } from '@chakra-ui/react';
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

export function Page() {
  const [page, setPage] = useQueryStore('page', '/');

  return (<Box
      w='100vw'
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
      <Text color='cyDark'>123</Text>
      <Box width='21rem' height='21rem'>
        <CursorCircle />
      </Box>
      {/* <Footer setPage={setPage} page={page} /> */}
    </Box>
  );
}