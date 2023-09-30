import { Box } from '@chakra-ui/react';
import React from 'react';


export function DeepTalks({
  title = 'Феникс',
  date = '01.12.2022',
  ...props
}:{
  title?: string;
  date?: string;
  [key:string]: any;
}) {
  return (<Box display='flex' flexFlow='column' height='max-content'>123</Box>)}