import { Box, Text, useColorMode } from "@chakra-ui/react";

export function Thesis({
  title = 'Supports all languages and stacks',
  ...props
}:{
  title?: string;
  [key:string]: any;
}) {
  const { colorMode } = useColorMode();

  return (<Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          h: '100%',
          w: '100%',
          p: '0.3rem',
          background: 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)',
          boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 2px  #00000026',
        }}
      >
        <Box
          sx={{
            bg: 'flagBackground',
          }}
        >
          <Text textStyle='Regular20'>{title}</Text>
        </Box>

      </Box>
    </Box>
  );
}
