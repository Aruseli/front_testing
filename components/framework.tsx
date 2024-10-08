import { Button, Text, useMediaQuery as useMediaQueryChakra } from '@chakra-ui/react';
export * from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import React from 'react';

export const useMediaQuery = function useMediaQuery(arg) {
  const [actualValue, isBrowser] = useMediaQueryChakra(arg);
  const [value, setValue] = useState(false);
  useEffect(() => setValue(actualValue), [actualValue, isBrowser]);
  return [value, isBrowser];
}

export const Typography = React.memo(({children}:{children: any}) => {
  return (<Text>
      {children}
    </Text>
  )
})