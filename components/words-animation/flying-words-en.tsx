import React from 'react';
import { Text, Box, usePrefersReducedMotion, Wrap, WrapItem, Center } from '@chakra-ui/react';
import { anim1, anim2, anim3, anim4, anim5, anim6, anim7, anim8 } from './keyframes';
import { motion } from 'framer-motion';

export const MotionBox = motion<any>(Box);

export const FlyingWordsEn = React.memo<any>(() => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${anim1} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${anim2} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${anim3} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation4 = prefersReducedMotion
    ? undefined
    : `${anim4} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation5 = prefersReducedMotion
    ? undefined
    : `${anim5} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation6 = prefersReducedMotion
    ? undefined
    : `${anim6} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation7 = prefersReducedMotion
    ? undefined
    : `${anim7} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation8 = prefersReducedMotion
    ? undefined
    : `${anim8} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  

  return (
    <Wrap 
      maxW='25.3rem' 
      width='26rem' 
      spacing='0'
      justify={{sm: 'center', md: 'center'}}
      sx={{
        '@media(max-width: 380px)': {
          maxW: '21.3rem'
        },
      }}
    >
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max'
          animate={{
            rotate: -2.5,
            scale: 0.85,
          }}
          transition={{ type: "spring", damping: 70, mass: 2.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text textStyle='h3' animation={animation1}>Community of</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='18rem' 
          h='max' 
          ml='2' 
          mr='2'
          sx={{
            '@media(max-width: 325px)': {
              ml: '0',
              mr: '0',
            }
          }}
          animate={{ scale: 1.05 }}
          transition={{ type: "spring", damping: 40, stiffness: 30, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text textStyle='h1' lineHeight='normal' animation={animation4}>Deep Cult</Text>
        </MotionBox>
      </WrapItem>

      <WrapItem>
        <MotionBox 
          w='max' 
          h='max' 
          alignSelf='center'
          animate={{
            rotate: -2,
            scale: 0.8
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          <Text textStyle='body1' animation={animation3}>followers</Text>
        </MotionBox>
      </WrapItem>
     
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max' 
          ml='2' 
          mr='2'
          sx={{
            '@media(max-width: 325px)': {
              ml: '0',
              mr: '0',
            }
          }}
          animate={{
            rotate: 1.5,
            scale: 0.95
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text align='right' textStyle='h5' lineHeight='normal' animation={animation2}>centered</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max' 
          alignSelf='center'
          animate={{
            rotate: 2.5,
            scale: 1.1
          }}
          transition={{ type: "spring", damping: 40, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text textStyle='body1' animation={animation5}>around</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max'
          animate={{
            rotate: 1.5,
            scale: 0.9
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          <Text textStyle='h4' lineHeight='normal' animation={animation6}>the Products</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem h='3rem' alignItems='flex-end'>
        <MotionBox 
          w='max' 
          h='max'
          sx={{
            '@media(max-width: 380px)': {
              w: '11rem'
            },
            '@media(max-width: 325px)': {
              w: '9rem'
            }
          }}
          align='right'
          animate={{
            rotate: -1,
            scale: 0.85
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text textStyle='italic' lineHeight='normal' animation={animation7}> of the Deep.Foundation</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max'
          animate={{
            rotate: 2,
            scale: 0.75
          }}
          transition={{ type: "spring", damping: 95, stiffness: 50, repeat: Infinity, repeatType: "mirror" }}
        >
          <Text textStyle='h4' fontWeight='bold' animation={animation8}> Ecosystem</Text>
        </MotionBox>
      </WrapItem>
    </Wrap>
  )
})