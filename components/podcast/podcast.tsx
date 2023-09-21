import { Box, useColorMode, useEditable } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
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
	blur: {
		filter: 'blur(7px)',
	},
	unBlur: {
		filter: 'blur(0px)',
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
	const control = useAnimation();

	useEffect(() => {
		if (open === true) {
			control.start('start');
		} else if (open === false)	{
			control.start('end');
		} else if (media === true) {
			control.start('blur');
		} else {
			control.start('unBlur');	
		}
	}, [control, media, open]);

	const whileVariants = {
		hoverState: { 
			boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', 
			transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } },
		tapState: { 
			boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', 
			transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } 
		}
	};

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
				<PodcastOpenFrame
					variantsAnimationBlock={variantBlock}
					animate={control}
					// animate={ open ? 'start' : 'end' ? media ? 'blur' : 'unBlur' }
					onClick={() => {
						setMedia(!media);
						console.log('media', media);
					}}
				>
					<PodcastOpenFrameContent 
						open={open} 
						variantsAnimationContent={variantsAnimationContent}
					/>
				</PodcastOpenFrame>
				<PodcastMainContent
					variantCircle={whileVariants}
					whileHover="hoverState"
					whileTap="tapState"
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
