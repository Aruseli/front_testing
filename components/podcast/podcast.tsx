import { Box, Center, Circle, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { PodcastMainContent, PodcastOpenFrame, PodcastOpenFrameContent } from './content';


const variantBlock = {
	start: { 
		opacity: 1, width: '28rem', 
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
	// hoverState: { boxShadow: '0 0px 5px 2px #0000001a', transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } },
	// tapState: { boxShadox: '0 0px 4px 0 #0000001a', transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } },
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

	const variantContainer = {
		start: { 
			width: '28rem', 
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
		hoverState: { boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } },
		tapState: { boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', transition: { type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 } },
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
				whileHover="hoverState"
				whileTap="tapState"
				animate={open ? 'start' : 'end'}
				variants={variantContainer}
			>
				{/* <AnimatePresence>
					<Box 
						as={motion.div}
						position='absolute'
						height='15.15rem'
						bg='podcastBg'
						initial='initial'
						variants={variantBlock}
						animate={open ? 'start' : 'end'}
						exit='end'
					>
						123
					</Box>
				</AnimatePresence> */}
				<PodcastOpenFrame
					variantsAnimationBlock={variantBlock}
					open={open}
					animate={open ? 'start' : 'end'}
				>
					<PodcastOpenFrameContent />
				</PodcastOpenFrame>
				<PodcastMainContent
					onClick={() => {
						setOpen(!open);
						setTimeout(() => {
							setOpen(false);
						}, 5000);
					}} 
				/>
			</Box>
		</AnimatePresence>
	)
});
