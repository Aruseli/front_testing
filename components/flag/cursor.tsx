import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";



const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28
};

export function CursorCircle() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      // backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    }
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (<Box position='relative' w='100%' h='100%'>
      <Box ref={ref}
        sx={{
          display: 'flex',
          flexFlow: 'row',
          height: '100%',
          width: '100%',
          background: '#fff',
          borderRadius: '20px',
          // padding: '40px',
        }}
      >
        <motion.div
          variants={variants}
          style={{
            position: 'fixed',
            zIndex: 100,
            display: 'flex',
            flexFlow: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            height: '10px',
            width: '10px',
            backgroundColor: '#1e91d6',
            borderRadius: '200px',
            pointerEvents: 'none',
            color: '#fff',
            textAlign: 'center',
            fontSize: '16px',
          }}
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: 1,
            height: '300px',
            width: '250px',
            background: '#1e91d6',
            borderRadius: '24px',
            cursor: 'none',
            backgroundImage: 'url("https://cdn.discordapp.com/attachments/577203676108685331/790326977714192465/Tile_Image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
        >
          <Text 
            fontSize='md'
            color='black'
            sx={{
              background: '#fff',
              borderRadius: '34px',
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              padding: '12px 20px',
              fontWeight: 500,
            }}
          >Discord Onboarding</Text>
        </Box>
        <Box p='5rem'>
          <Text
            as='div'
            fontSize='md'
            sx={{
              fontWeight: 500,
              lineHeight: 1.2,
              textDecoration: 'underline',
              transition: '150ms ease-in-out',
              _hover: {
                color: '#1e91d6',
                cursor: 'pointer',
              }
            }}
            onMouseEnter={contactEnter}
            onMouseLeave={contactLeave}
          >
            Want to Chat?
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export function CursorCoord() {
  const [globalMousePos, setGlobalMousePos] = useState({x: null, y: null});
  const [localMousePos, setLocalMousePos] = useState({x: null, y: null});

  const handleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div>
      <div
        style={{
          border: '1px solid gray',
          display: 'inline-block',
          padding: '75px',
          textAlign: 'center',
        }}
        onMouseMove={handleMouseMove}
      >
        Local
        <br />
        <b>
          ({localMousePos.x}, {localMousePos.y})
        </b>
      </div>
      <br />
      Global
      <br />
      <b>
        ({globalMousePos.x}, {globalMousePos.y})
      </b>
    </div>
  );
}
