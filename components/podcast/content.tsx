import { Box, Center, Circle, Text, useColorMode } from "@chakra-ui/react";
import { IconProvider } from '../icons/icons';
import { BsSoundwave } from 'react-icons/bs';
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const PodcastMainContent = React.memo<any>(({
	name = 'Иван Шилов',
	onClick,
	...props
}:{
	name?: string;
	onClick?: () => any;
	[key:string]: any;
}) => {

	const {colorMode} = useColorMode();

	return (<Circle 
			sx={{
					background: 'linear-gradient(200deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)',
					width: '15.15rem',
					height: '15.15rem',
					zIndex: 1,
			}}
			onClick={onClick}
		>
			<Circle 
				size='15rem'
				bg='flagBackground'	
			>
				<Center flexFlow='column'>
					<IconProvider icon={<BsSoundwave />} size='5rem' color={colorMode === 'light' ? '#060608' : '#fff'} />
					<Text textStyle='Medium22' align='center'>Podcast</Text>
					<Text textStyle='Medium20' align='center'>{name}</Text>
				</Center>	
			</Circle>
    </Circle>
	)
})

export const PodcastOpenFrame = React.memo<any>(({
	variantsAnimationBlock,
	open,
	children,
	animate,
	initial = 'initial',
	exit = 'end',
	height = '15.15rem',
	bg = 'podcastBg',
	onClick,
	...props
}:{
	variantsAnimationBlock?: any;
	open?: boolean;
	children: any;
	animate?: any;
	initial?: any;
	exit?: any;
	height?: string;
	bg?: string;
	onClick?: () => any;
	[key:string]: any;
}) => {

	return (<AnimatePresence>
			<Box 
				as={motion.div}
				position='absolute'
				height={height}
				bg={bg}
				initial={initial}
				variants={variantsAnimationBlock}
				animate={animate}
				exit={exit}
			>
				{children}
			</Box>
		</AnimatePresence>
	)
})

export const PodcastOpenFrameContent = React.memo<any>(({
	variantsAnimationContent,
	open,
	initial = 'initial',
	name = 'Иван Шилов',
	onClick,
	...props
}:{
	variantsAnimationContent?: any;
	open?: boolean;
	initial?: any;
	name?: string;
	onClick?: () => any;
	[key:string]: any;
}) => {

	return (<AnimatePresence>
			<Box 
				as={motion.div}
				position='absolute'
				height='15.15rem'
				bg='transparent'
				initial={initial}
				variants={variantsAnimationContent}
				animate={open ? 'start' : 'end'}
				exit='end'
			>
				<Text textStyle='Medium32'>{name}</Text>
				<Text textStyle='Regular28'>{name}</Text>
				<Text textStyle='Medium28'>{name}</Text>
			</Box>
		</AnimatePresence>
	)
})


