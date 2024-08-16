import { Box } from "@chakra-ui/react"
import { Thesis } from "./thesis";
import { AnimatePresence } from "framer-motion";
import { ThesisDescription } from "./thesis-description";
import { useState } from "react";


const items = [
  {
    id: 0,
    title: 'points--no-more-refactoring',
    text: 'points--no-more-refactoring--description',
  },
  {
    id: 1,
    title: 'points--supports-all-code',
    text: 'points--supports-all-code--description'
  },
  {
    id: 2,
    title: 'points--flexible-system',
    text: 'points--flexible-system--description'
  },
  {
    id: 3,
    title: 'points--launch-anywhere',
    text: 'points--launch-anywhere--description'
  },
  {
    id: 4,
    title: 'points--all-stages-on-single-platform',
    text: 'points--all-stages-on-single-platform--description'
  },
  {
    id: 5,
    title: 'points--backend',
    text: 'points--backend--description'
  },
  {
    id: 6,
    title: 'points--data-management',
    text: 'points--data-management--description'
  },
  {
    id: 7,
    title: 'points--business-logic',
    text: 'points--business-logic--description_title',
    points: [
      {
        id: 1,
        text: 'points--business-logic--description--point_1',
      },
      {
        id: 2,
        text: 'points--business-logic--description--point_2',
      },
      {
        id: 3,
        text: 'points--business-logic--description--point_3',
      },
    ]
  },
];
export const ThesisBlock = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (<Box 
      w='100%' h='100%'
      display='grid'
      gridTemplateColumns={{sm: '1fr', md: '0.5fr 1fr'}}
      gridTemplateRows={{sm: 'minmax(5vmax, 0.5fr) 0.1fr', md: '1fr'}}
      // rowGap={4}
      alignItems='center'
      justifyItems='center'
    >
      <Box display='flex' flexDirection='column' width='100%'>
        {items.map(i => (
          <AnimatePresence mode='wait' key={i.id}>
            <Thesis title={i.title} onActive={() => handleClick(i.id)} activeState={activeItem === i.id} />
          </AnimatePresence>
        ))}
      </Box>
      <Box display='flex' flexDirection='column' width='100%' pos='relative'>
        {items.map(i => (
          <AnimatePresence mode='wait' key={i.id}>
            {activeItem === i.id && <ThesisDescription text={i.text} activeState={activeItem === i.id} />}
          </AnimatePresence>
        ))}
      </Box>
    </Box>
  )
}