import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { motion, useSpring } from 'framer-motion';
import { motion, useMotionValue, useTransform, animate, useAnimation } from "framer-motion"





export const PageLiquid = (
  { 
    children, 
    theme, 
    index, 
    setActive, 
    gone = false 
  }:{
    children?: any, 
    theme?: any, 
    index?: any, 
    setActive?: any, 
    gone?: any
  }) => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    useEffect(() => {
      const handleResize = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      };
    
      // Initial set
      handleResize();
    
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
    
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
   
    // useEffect(() => {
    //   if (typeof window !== 'undefined') {
    //     setHeight(window.innerHeight);
    //     setWidth(window.innerWidth);
    //     // Your code that uses `window` here...
    //   }
    // }, []);
    let w = width;
    if (width <= 500) {
      w = width;
    }

    const getPath = (y, x, width) => {
      const anchorDistance = 200 + x * 0.5;
      const curviness = anchorDistance - 60;
      return `M0, 
          ${height} 
          H0V0h${width}v 
          ${y - anchorDistance} 
          c0, 
          ${curviness} 
          , 
         ${x} 
          , 
          ${curviness} 
          , 
         ${x} 
          , 
          ${anchorDistance} 
          S${width}, 
          ${y} 
          ,${width}, 
          ${y + anchorDistance * 2}
          V
          ${height}
          z`;
    };

    const posY = useMotionValue(height * 0.72 - 20);
    const d = useMotionValue(gone ? getPath(0, 0, w) : getPath(height * 0.72, 0, 0));
    
  const [isGone, setGone] = useState(gone);
  const [isMove, setMove] = useState(false);
  const posX = useMotionValue(-50);
  // const posY = useMotionValue(height * 0.72 - 20);
  // const d = useMotionValue(gone ? getPath(0, 0, w) : getPath(height * 0.72, 0, 0));
  
  const transition = { type: 'spring', stiffness: 100, damping: 20 };
  const control = useAnimation();

  const dragHandlers = {
      onDrag: (event, info) => {
          if (!isGone && isMove) {
              const my = info.point.y;
              const mx = info.point.x;

              control.start({ 
                  x: mx + 20,
                  y: my - 20,
                  d: getPath(my, mx + 60, 10),
                  transition
              });
        
              if (mx > width / 2) {
                  control.start({
                      d: getPath(my, -50, w),
                      transition
                  });
                  setGone(true);
                  setTimeout(() => {
                      control.start({
                          d: getPath(my, 0, w),
                          transition
                      });
                      setActive(index);
                  }, 240);
              }
          } else {
              control.start({
                  x: 7,
                  y: height * 0.72 - 20,
                  d: getPath(height * 0.72, 48, 5),
                  transition
              });
          }
      },
  };

  useEffect(() => {

    if (!gone) {
      control.start({
          d: getPath(height * 0.72, 48, 5),
          transition
      });
    
      setTimeout(() => {
          control.start({
              x: 7,
              transition
          });
      }, 100);
  }
}, [gone]);


  return (<>
   <motion.svg
            style={{ x: posX, y: posY }}
            path={`M${d}`}
            animate={control}
            drag 
            dragConstraints={{ left: -50, right: 50 }} // define your own constraints
            {...dragHandlers}
        />
    <Box>
      <Box
        as='svg'
        version="1.1" 
        id="blob" 
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          position: 'absolute',
          height: '100%',
          width: '10px',
        }}
      >
        <clipPath id={`clipping${index}`}>
          <motion.path id={`blob-path${index}`} d={d} />
        </clipPath>
      </Box>
      <Box
        sx={{
          clipPath: `url(#clipping${index})`,
          WebkitClipPath: `url(#clipping${index})`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          textAlign: 'center',
          fontSize: '37px',
          fontWeight: 'bold',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </Box>
      <Box 
        as={motion.button}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          fontFamily: '"Oswald", sans-serif',
          background: 'transparent',
          color: `${(props) => props.color}`,
          border: `1px solid ${(props) => props.color}`,
          '&::focus': {
            outline: 0,
          }
        }}
        color={theme}
        onMouseDown={() => {
          setMove(true);
        }}
        onMouseUp={() => {
          setMove(false);
        }}
        onTouchStart={() => {
          setMove(true);
        }}
        onTouchEnd={() => {
          setMove(false);
        }}
        // style={{
        //   opacity: posX.interpolate({
        //     range: [0, 100],
        //     output: [1, 0],
        //   }),
        //   transform: interpolate(
        //     [
        //       posX.interpolate((x) => `translateX(${x}px)`),
        //       posY.interpolate((y) => `translateY(${y}px)`),
        //     ],
        //     (translateX, translateY) => `${translateX} ${translateY}`
        //   ),
        // }}
      >
        {">"}
      </Box>
    </Box>
  </>
  );
};