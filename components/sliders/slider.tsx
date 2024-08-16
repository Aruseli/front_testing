import { useState } from 'react';
import { Box } from  '@chakra-ui/react';

import { Swipeable } from 'react-swipeable'

import {ChildrenResponsive} from '../package/children-responsive';

// const useStyle = makeStyles(theme => ({
//   animation: {
//     transition: 'all 1s ease',
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//     // boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1)'
//   },
//   redLineStyle: {
//     backgroundColor: '#f37e78',
//     width: 32,
//     height: 3,
//     margin: 16
//   },
//   greyLineStyle: {
//     backgroundColor: '#f3ebeb',
//     width: 32,
//     height: 3,
//     margin: 16
//   },
// }))



export const Slider = ({ items = [] }) => {
  const [selectedId, setSelectedId] = useState(2);
  const selectedIndex = items.findIndex(item => item.id == selectedId);

  return(
    <>
      <Box sx={{ overflow: 'hidden', height: 200 }}>
        <Box sx={{position: 'relative', height: '100%', marginLeft: 48, marginRight: 48}}>
          {items.map((item, i) => (
            <Box key={item.id} 
            // className={classes.animation}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: `${(i-selectedIndex)*100}%`,
                transform: selectedIndex == i ? 'scale(0.95)' : 'scale(0.87)',
              }}
            >
              <Swipeable onSwiped={({deltaX}) => {
                const index = selectedIndex + (deltaX > 0 ? 1 : -1);
                const id = items[(index < 0 ? 0 : (index > items.lenght - 1 ? items.lenght - 1 : index))].id;
                setSelectedId(id)
              }}>
                <ChildrenResponsive style={{borderRadius: 15, boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .2)'}}>
                  <img src={item.src} alt={item.alt} style={{width: '100%'}} />
                </ChildrenResponsive>
              </Swipeable>
            </Box>
          ))}
        </Box>
      </Box>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
          paddingBottom: 16
        }}
      >
        {items.map((item, i) => (
          <Grid item key={item.id}>
            <Box 
              sx={{
                backgroundColor: selectedIndex == i ? '#f37e78' : '#f3ebeb',
                width: 32,
                height: 3,
                margin: 16
              }} onClick={() => setSelectedId(item.id)} />
          </Grid>
        ))}
      </Box>
    </>
  )
}