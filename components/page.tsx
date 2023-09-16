import { Box, Text } from '@chakra-ui/react';
import { useQueryStore } from '@deep-foundation/store/query';
import { Switch } from './switch-mode';
import { DeepFlag } from './flag/flag';
import { DeepFrameShift } from './flag/frame-shift';
import { DeepFrameMouseTracking } from './flag/frame-mouse-tracking';

export function Page() {
  const [page, setPage] = useQueryStore('page', '/');

  return (<Box
      w='100vw'
      h='100vh'
      position='relative'
      display='grid'
      gridTemplateColumns='repeat(auto-fit, minmax(300px, 450px))'
      gap='2rem'
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
      <DeepFrameShift>
        <DeepFlag
          title='Deep Foundation'
          subtitle='A new way to build'
          description='Blurring the line between your desktop and your mind-space'
        />
      </DeepFrameShift>
      <Text color='cyDark'>123</Text>
      {/* <Footer setPage={setPage} page={page} /> */}
    </Box>
  );
}