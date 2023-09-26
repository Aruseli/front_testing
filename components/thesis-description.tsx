import { Box, Text, useColorMode } from "@chakra-ui/react";
import { BoxShadow } from "./flag/box-shadow";

export function ThesisDescription({
  description = 'Deep.Links orchestrates executable code in docker and soon in lxc containers. A simple adapter published as a docker image allows you to create an environment for your language and technological stack. Additionally, the executable code is simply written into the associative memory within the associative packages, which are properly connected to the links that describe the rules for code execution and isolation',
  ...props
}:{
  description?: string;
  [key:string]: any;
}) {
  const { colorMode } = useColorMode();

  return (<BoxShadow
      blockWidth='max-content'
      blockHeight='max-content'
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          h: 'max-content',
          w: 'calc(18.75rem + 10vmax)',
          p: '0.05rem',
          borderRadius: '0.3rem',
          background: colorMode === 'dark' ? 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(227deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
        }}
      >
        <Box
          sx={{
            bg: 'flagBackground',
            borderRadius: '0.3rem',
            p: '1.5rem',
          }}
        >
          <Text 
            textStyle='Regular20' 
            align='center'
            sx={{
              background: colorMode === 'dark' ? 'linear-gradient(200deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : '#EEA63A',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >{description}</Text>
        </Box>
      </Box>
    </BoxShadow>
  );
}
