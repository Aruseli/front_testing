import { Box, Center, Circle, Text, useColorMode } from "@chakra-ui/react";
import { IconProvider } from '../icons/icons';
import { BsSoundwave } from 'react-icons/bs';
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const PodcastMainContent = React.memo<any>(({
	name = 'Иван Шилов',
	onClick,
	variantCircle,
	whileHover,
	whileTap,
	exit,
	...props
}:{
	name?: string;
	onClick?: () => any;
	variantCircle?: any;
	animateProps?: any;
	whileHover?: any;
	whileTap?: any;
	exit?: 'end' | 'initial';
	[key:string]: any;
}) => {

	const {colorMode} = useColorMode();

	return (<AnimatePresence>
			 <Circle
				sx={{
					width: '15.15rem',
					height: '15.15rem',
				}}
				as={motion.div}
				variants={variantCircle}
				exit={exit}
				whileHover={whileHover}
				whileTap={whileTap}
				onClick={onClick}
			>
				<Circle 
					sx={{
						background: 'linear-gradient(200deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)',
						width: '15.15rem',
						height: '15.15rem',
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
							<IconProvider icon={<BsSoundwave />} size='5rem' color={colorMode === 'light' ? '#060608' : '#fff'} />
							<Text textStyle='Medium22' align='center'>Podcast</Text>
							<Text textStyle='Medium20' align='center'>{name}</Text>
						</Center>	
					</Circle>
				</Circle>
			</Circle>
		</AnimatePresence>
	)
})

export function PodcastOpenFrame ({
	variantsAnimationBlock,
	children,
	animate,
	initial = 'initial',
	exit = 'end',
	height = '15.15rem',
	bg = 'podcastBg',
	onTouchStart,
	onTapStart,
	onTapCancel,
	onClick,
	styles,
	...props
}:{
	variantsAnimationBlock?: any;
	children: any;
	animate?: any;
	initial?: any;
	exit?: any;
	height?: string;
	bg?: string;
	onTouchStart?: (event) => any;
	onTapStart?: (event, info) => any;
	onTapCancel?: (event, info) => any;
	onClick?: () => any;
	styles?: any;
	[key:string]: any;
}) {

	const {colorMode} = useColorMode(); 

	return (<AnimatePresence>
			<Box 
				as={motion.div}
				position='absolute'
				height={height}
				bg={bg}
				borderRadius='7.5rem'
				boxShadow={colorMode  === 'light' ? 'inset 0 0 6px 1px #3c3a3a30' : 'inset 0 0 6px 1px #222223e3'}
				initial={initial}
				variants={variantsAnimationBlock}
				animate={animate}
				exit={exit}
				onClick={onClick}
				onTap={onTapStart}
				sx={...styles}
				onTouchStart={onTouchStart}
				// onTapEnd={onTapCancel}
			>
				{children}
			</Box>
		</AnimatePresence>
	)
}

export const PodcastOpenFrameContent = React.memo<any>(({
	variantsAnimationContent,
	open,
	initial = 'initial',
	name = 'Иван Шилов',
	profession = 'Аналитик',
	date = '14.12.21',
	time = '00:38:55',
	exit = 'end',
	initialText,
	animateText,
	variantsText,
	exitText,
	...props
}:{
	variantsAnimationContent?: any;
	open?: boolean;
	initial?: any;
	name?: string;
	profession?: string;
	date?: any;
	time?: any;
	exit?: string;
	initialText?: any;
	animateText?: any;
	variantsText?: any;
	exitText?: string;
	[key:string]: any;
}) => {

	return (<AnimatePresence>
			<Box 
				as={motion.div}
				position='absolute'
				height='15.15rem'
				w='max-content'
				bg='transparent'
				initial={initial}
				variants={variantsAnimationContent}
				animate={open ? 'start' : 'end'}
				exit={exit}
				display='flex'
				flexFlow='column'
				justifyContent='center'
				alignItems='flex-start'
				sx={{
					'&>*:not(last-of-child)': {
						mb: '1rem'
					}
				}}
			>
				<AnimatePresence>
					<Box
						as={motion.div}
						flexFlow='column'
						display='flex'
						justifyContent='center'
						alignItems='flex-start'
						initial={initialText}
						animate={animateText}
						variants={variantsText}
						exit={exitText}
					>
						<Text textStyle='Medium32' alignSelf='center'>{name}</Text>
						<Text textStyle='Regular28' alignSelf='center'>{profession}</Text>
						<Box display='flex' flexFlow='row' alignItems='center'>
							<Text textStyle='Medium28' mr='1rem'>{date}</Text>
							<Text textStyle='Medium28'>{time}</Text>
						</Box>
					</Box>
				</AnimatePresence>
			</Box>
		</AnimatePresence>
	)
})


