import { Box, Text } from '@chakra-ui/react';
import { useQueryStore } from '@deep-foundation/store/query';
import { Switch } from './switch-mode';
import { DeepFlag } from './flag/flag';
import { DeepFrame } from './flag/frame';
import { DeepFrameNew } from './flag/frame-with-store';

export function Page() {
  const [page, setPage] = useQueryStore('page', '/');

  return (<Box w='100vw' h='100vh' position='relative' display='grid' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' gap='2rem'>
      <Switch />
    {/* <PageContent /> */}
      <DeepFrameNew>
      <DeepFlag
        title='Deep Foundation'
        subtitle='A new way to build'
        description='Deep Foundation'
        
        />
      </DeepFrameNew>
      <Text color='cyDark'>123</Text>
      {/* <Footer setPage={setPage} page={page} /> */}
    </Box>
  );
}