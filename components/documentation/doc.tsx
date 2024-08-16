import { motion } from 'framer-motion';
import { memo, useCallback, useState } from 'react';
import { Circle, Hide, Img, useMediaQuery } from '../framework';
import { Text, Box } from '@chakra-ui/react';
import { DocumentationContent } from './doc-content';
import { DocumentationMenu } from './doc-menu';
import { DocumentationMenuItem, Menu } from './doc-menu-item';


const placeholderMenu: Menu = [
  {
    id: 123,
    title: 'Abc',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
    children: [
      {
        id: 234,
        title: 'Qwe',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
      },
      {
        id: 274,
        title: 'Qwe',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
        children: [
          {
            id: 734,
            title: 'Pere',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
          },
        ]
      },
    ],
  },
  {
    id: 1223,
    title: 'Abc',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',children: [
      {
        id: 754,
        title: 'Pere',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
      },
    ]
  },
];
export const Documentation = memo(function Documentation() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const [min820] = useMediaQuery('(min-width: 820px)');
  const handleMenuClick = useCallback((id) => {
    setOpenMenuId(prevId => (prevId === id ? null : id));
  }, []);

  return (<Box 
      display='grid' 
      gridTemplateColumns={{sm: '1fr', md: 'minmax(4rem, 20rem) 1px 1fr'}} gridTemplateRows={{sm: '0.2fr 1fr', md: '1fr'}}
    >
      <Box 
        as='nav' 
        w='100%' 
        display='flex' 
        flexDirection={min820 ? 'column' : 'row-reverse'}
      >
        <Box 
          display='flex' 
          flexDirection='row' 
          alignItems='center' 
          p={4} 
          boxSize='border-box'
        >
          <Circle size='3rem'>
            <Img src='./logo_blue.svg' alt='logo' />
          </Circle>
          <Text textStyle='h2'>Deep.Case</Text>
        </Box>
        <Box w='100%' h='1px' bg='blackAlpha.200' />
        <DocumentationMenu menuList={
          <Box as={motion.div} 
            sx={{
              padding: '1rem',
              width: '100%',
            }}
            animate={{y: min820 ? 10 : 64}}
          >
            {placeholderMenu.map((p, i) => (
              <DocumentationMenuItem 
                key={p.id}
                id={p.id}
                expanded={openMenuId === p.id}
                onOpen={() => {
                  console.log('__id', p.id)
                  handleMenuClick(p.id)}
                }
                title={p.title}
                children={p.children} 
               
              />
            ))}
          </Box>}
          breakpoint='(min-width: 820px)' 
        />
      </Box>
      <Hide breakpoint='(max-width: 820px)'>
        <Box h='100vh' w='1px' bg='blackAlpha.200' />
      </Hide>
      <Box boxSize='border-box' p={8}>
        {placeholderMenu.map(p => (<DocumentationContent key={p.id} {...p} />
        ))}
      </Box>
    </Box>
  )
})
