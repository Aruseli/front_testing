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

export function Page() {
  const [page, setPage] = useQueryStore('page', '/');

  return (<Box
      w='100vw'
      h='100vh'
      position='relative'
      display='grid'
      gridTemplateColumns='repeat(auto-fit, minmax(300px, 450px))'
      gap='2rem'
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
      <CursorCircle />
      <CursorCoord />
      <Article>123</Article>
      <Thesis />
      <Text color='cyDark'>123</Text>
      {/* <Footer setPage={setPage} page={page} /> */}
    </Box>
  );
}