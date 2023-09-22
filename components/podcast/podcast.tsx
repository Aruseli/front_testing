import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { BsYoutube } from 'react-icons/bs';
import { PodcastMainContent, PodcastOpenFrame, PodcastOpenFrameContent } from './content';


const variantBlock = {
	start: { 
		opacity: 1, width: '34rem', 
		transition: { 
			type: "spring", 
			mass: 1, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100,
			width: { duration: 0.1 },
			opacity: { duration: 0.2 },
		} 
	},
	end: { 
		opacity: 0, 
		width: '1rem', 
		transition: { 
			type: "spring", 
			mass: 1, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100,
			width: { duration: 2 },
			opacity: { duration: 0.4 }, 
		} 
	},
	initial: { opacity: 0, width: '1rem' },
};

const variantContainer = {
	start: { 
		width: '34rem', 
		borderRadius: '7.5rem', 
		transition: { 
			type: "spring", 
			mass: 0.5, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100, 
			width: { duration: 0.3 },
		} 
	},
	
	end: { 
		width: '15.15rem',
		borderRadius: '7.5rem', 
		transition: { 
			type: "spring", 
			mass: 0.5, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100,
			width: { duration: 0.3 },
		} 
	},
	initial: { width: '15.15rem', borderRadius: '7.5rem' },
};

const variantsAnimationContent = {
	start: { 
		x: '17rem', 
		opacity: 1, 
		originX: 0,
		transition: { 
			type: "spring", 
			mass: 0.5, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100, 
			x: { duration: 0.3, delay: 0.2 },
		} 
	},
	
	end: { 
		x: '0.5rem',
		opacity: 0, 
		originX: 1,
		transition: { 
			type: "spring", 
			mass: 0.5, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100,
			x: { duration: 0.3 },
			opacity: { duration: 0.1 },
		} 
	},
	initial: { x: '0.5rem', opacity: 0, originX: 0 },
};

const variantMedia = {
	start: {
		display: 'flex',
		x: '22rem',
		scale: 1,
		opacity: 1,
		transition: { 
			type: "spring", 
			mass: 0.5, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100, 
			x: { duration: 0.3, delay: 0.2 },
			opacity: { duration: 0.1, delay: 0.3 },
		} 
	},
	end: {
		display: 'none',
		x: 0,
		opacity: 0,
		scale: 0,
		transition: { 
			type: "spring", 
			mass: 0.5, 
			bounce: 0.25, 
			stiffness: 200, 
			damping: 100, 
			x: { duration: 0.1, delay: 0.1 },
			opacity: { duration: 0.1,  },
			display: { delay: 0.15 },
		} 
	},
	initial: { x: 0, opacity: 0, display: 'none', scale: 0 },
}

export const Podcast = React.memo<any>(({
	children,
	name = 'Иван Шилов',
	...props
}:{
	children?: any;
	name?: string;
	[key:string]: any;
}) => {

	const {colorMode} = useColorMode();
	const [open, setOpen] = useState(false);
	const [media, setMedia] = useState(false);

	const whileVariants = {
		hoverState: { 
			boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', 
			transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } },
		tapState: { 
			boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', 
			transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } 
		},
		end: { 
			boxShadow: 'none', 
			transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } 
		},
	};

	const variantText = {
		show: {
			opacity: 1,
			scale: 1,
			transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100, 
			opacity: { duration: 0.1 } },
		},
		hide: {
			opacity: 0,
			scale: 0,
			transition: { 
				type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100, 
				opacity: { duration: 0.15 },
				scale: { duration: 0.2 }, 
			},
		},
		initial: {
			opacity: 1,
			scale: 1,
		}
	}

	return (<AnimatePresence>
			<Box 
				as={motion.div}
				position='relative'  
				height='max-content' 
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					overflow: 'hidden',
				}}
				initial='initial'
				exit='end'
				animate={open ? 'start' : 'end'}
				variants={variantContainer}
			>
				<Box as={motion.div}
					variants={variantMedia}
					animate={media ? 'start' : 'end'}
					exit='end'
					initial='initial'
					position='absolute'
					zIndex={2}
				>
					<IconButton
						isRound={true}
						variant='solid'
						bg='flagBackground'
						aria-label='Done'
						p='2.5rem 1rem'
						size='lg'
						icon={<BsYoutube size='3rem' color='red' />}
					/>
				</Box>
				<PodcastOpenFrame
					variantsAnimationBlock={variantBlock}
					animate={ open ? 'start' : 'end' }
					// onTouchStart={e => {
					// 	setMedia(media => !media);
					// 	console.log('media_2', media);
					// }}
					onClick={() => {
						console.log('media_click', media);
						setMedia(media => !media);
						console.log('media_click', media);
					}}
				>
					<PodcastOpenFrameContent 
						open={open} 
						variantsAnimationContent={variantsAnimationContent}
						animateText={media ? 'hide' : 'show'}
						initialText='initial'
						variantsText={variantText}
						exitText='hide'
					/>
				</PodcastOpenFrame>
				<PodcastMainContent
					variantCircle={whileVariants}
					whileHover="hoverState"
					whileTap="tapState"
					exit='end'
					onClick={() => {
						setOpen(!open);
						// setTimeout(() => {
						// 	setOpen(false);
						// }, 5000);
					}} 
				/>
			</Box>
		</AnimatePresence>
	)
});
