
import { remove } from "@amcharts/amcharts5/.internal/core/util/Array";
import { InputGroup, InputLeftElement, Input, InputRightElement } from "@chakra-ui/react";
import { AnimatePresence, Box, motion, useAnimation } from "framer-motion";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import React, { useEffect } from "react";


const remotes = [
  { id: 1, value: 'http://localhost:4000/graphql' },
  { id: 2, value: 'http://localhost:4000/graphql' },
  { id: 3, value: 'http://localhost:4000/graphql' },
]

export function AnimeShow() {
  const [gqlPath, setGqlPath] = React.useState('');
  const [gqlSsl, setGqlSsl] = React.useState(false);
  const [portal, setPortal] = React.useState(true);

  const save = (id, value) => {
    remotes.find(rr => rr.id === id).value = value;
  }

  const checkUrlStatus = async (url) => {
    try {
      const response = await fetch(url.href);
      return { result: response.status, error: false };
    } catch (error) {
      return { result: error, error: true };
    }
  }

  return (<AnimatePresence>
      {remotes.map(rr => (
        <InputAnimation
          key={rr.id}
          addRemoteRout={!!remotes}
          valueRemoteRoute={rr.value}
          onChangeValueRemoteRoute={(e) => save(rr.id, e.target.value)}
          onDeleteValue={ => }
        />)
      )}
    </AnimatePresence>
  )
}

const inputArea = {
  open: {
    height: '4rem',
    transition: { duration: 0.5 }
  }, 
  close: {
    height: '0rem',
    transition: { delay: 0.5 }
  },
  initial: {
    height: '0rem',
    overflow: 'hidden',
    originY: 1
  }
};

const inputAnimation = {
  add: {
    opacity: 1,
    scaleY: 1,
    originY: 0,
    transition: { 
      duration: 0.5,
      delay: 0.2
    }
  },
  hide: {
    opacity: 0,
    scaleY: 0,
    originY: 1,
    transition: { 
      duration: 0.3,
      display: { delay: 0.7 }
    }
  }
};

const InputAnimation = React.memo<any>(({
  bgContainer = '#141214',
  addRemoteRout = false,
  valueRemoteRoute = '',
  onChangeValueRemoteRoute,
  setValueRemote,
  onDeleteValue,
  onStartRemoteRoute,
  key,
  gqlPath,
  gqlSsl,
}:{
  bgContainer?: string;
  addRemoteRout?: boolean;
  valueRemoteRoute?: string;
  onChangeValueRemoteRoute
  setValueRemote?: () => any;
  onDeleteValue: () => any;
  onStartRemoteRoute?: () => any;
  key?: any;
  gqlPath?: string;
  gqlSsl?: boolean;
}) => {
  const control = useAnimation();
  const controlInput = useAnimation();

  useEffect(() => {
    if (!!addRemoteRout) { 
      control.start('open');
      controlInput.start("add");
    } else {
      controlInput.start("hide");
      control.start('close');
    }
  }, [addRemoteRout]);

  let isActive = false;
  let isBroken = false;
  const [currentGqlPath, currentGqlSsl] = parseUrl(valueRemoteRoute);
  isActive = currentGqlPath === gqlPath && currentGqlSsl === gqlSsl;
  isBroken = !currentGqlPath;

  return (<Box 
      as={motion.div}
      animate={control}
      initial='initial'
      exit='close'
      layout
      variants={inputArea}
      bg={bgContainer}
      w='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
      pl={4}
      pr={4}
      // p={4}
      key={key}
    >
      <Input
        defaultValue={tittle}
        onChange={(e) => {
            setTitle(e?.target?.value);
        }}
        placeholder="Название источника"
        size="md"
        type="text"
        borderColor="black" 
        fontSize='sm'
        mb='0.5rem'
        ref={initRef}
      />
      <Input
        defaultValue={address}
        onChange={(e) => {
            setAddress(e?.target?.value);
        }}
        placeholder="address"
        size="md"
        type="text"
        borderColor="black" 
        fontSize='sm'
        mb='0.5rem'
      />
    </Box>
  )
});