import { Center, Circle, Text, useColorMode } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


export function Member({
  name = 'Timofey',
  job = 'writer',
  onClick,
  variantCircle,
  whileHover,
  whileTap,
  exit,
  ...props
}:{
  name?: string;
  job?: string;
  onClick?: () => any;
  variantCircle?: any;
  animateProps?: any;
  whileHover?: any;
  whileTap?: any;
  exit?: 'end' | 'initial';
  [key: string]: any; 
}) {

  const {colorMode} = useColorMode();

  return (<AnimatePresence>
      <Circle
				sx={{
					width: '15.15rem',
					height: '15.15rem',
				}}
				as={motion.div}
				// variants={variantCircle}
				// exit={exit}
				// whileHover={whileHover}
				// whileTap={whileTap}
				// onClick={onClick}
			>
				<Circle 
          background={colorMode ? 'linear-gradient(200deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(38deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)'}
					sx={{
						width: '17.5rem',
						height: '17.5rem',
						zIndex: 1,
					}}
				>
					<Circle 
						size='15rem'
						bg='flagBackground'	
					>
						<Center 
							flexFlow='column'
							sx={{
								'&>*:not(last-of-child)': {
									mb: '0.5rem'
								}
							}}
						>
							<Text textStyle='Medium36' align='center'>{name}</Text>
							<Text textStyle='Regular30' align='center'>{job}</Text>
						</Center>	
					</Circle>
				</Circle>
			</Circle>
    </AnimatePresence>
  );
}