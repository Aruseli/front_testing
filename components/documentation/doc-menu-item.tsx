import { AnimatePresence, Variants, motion } from "framer-motion";
import { memo, useCallback, useState } from 'react';
import { TbArrowUpCircle } from 'react-icons/tb';
import  { Button } from '@chakra-ui/react';
export interface IMenuItem {
  id: number;
  title: string;
  body?: any;
  children?: IMenuItem[];
}

interface IMenuItemProps extends IMenuItem {
  expanded?: boolean | number;
  onOpen?: () => void;
  style?: any;
  // variants?: any;
  // transition?: any;
}

export type Menu = IMenuItem[];

const variantsLi: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      y: { stiffness: 1000, velocity: -100 },
    }
  }
};

export const SubMenu = memo(function SubMenu({
  isOpen, 
  title, 
  onClick
}:{
  isOpen: boolean; 
  title: string;
  onClick: () => void;
}) {
  return (<AnimatePresence>
    {isOpen && (
      <motion.section
        key='content'
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: "auto" },
          collapsed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        onClick={onClick}
      >
        <motion.div
          variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
          transition={{ duration: 0.8 }}
          style={{ originY: 1, originX: 1 }}
        >
          {title}
        </motion.div>
      </motion.section>
    )}
  </AnimatePresence>)
});


export const DocumentationMenuItem = memo(function DocumentationMenuItem({
  id,
  expanded, 
  onOpen, 
  title, 
  children, 
  style,
  // variants = {},
  // transition = {},
}:IMenuItemProps) {
  const open = expanded;
  const [openMenuSubId, setOpenMenuSubId] = useState(null);
  const handleMenuClick = useCallback((id) => {
    setOpenMenuSubId(prevId => (prevId === id ? null : id));
  }, []);

  return (<AnimatePresence mode='wait'>
      <motion.li variants={variantsLi} style={{listStyle: "none"}}>
        <Button variant='ghost' as={motion.div}
          width='100%'
          animate={{ 
            color: open ? "#FF0088" : "#0055FF", 
          }}
          variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
          // @ts-ignore
          transition={{ duration: 3.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          onClick={onOpen}
          rightIcon={children && (
            <motion.div animate={{ rotate: open ? 180 : 0 }}>
              <TbArrowUpCircle />
            </motion.div>
          )}
          sx={{
            justifyContent: 'flex-start',
            p: 0,
            ...style
          }}
        >{title}</Button>
        {children && children.map((c, i) =>(
          expanded && <AnimatePresence mode='wait' key={c.id}>
            <motion.section
              key='content'
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 3.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <DocumentationMenuItem 
                key={c.id}
                expanded={openMenuSubId === c.id}
                onOpen={() => handleMenuClick(c.id)}
                title={c.title}
                id={c.id}
                // variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                // transition={{ duration: 0.8 }}
                children={c.children}
              />
            </motion.section>
          </AnimatePresence>
          ))
        }
      </motion.li>
    </AnimatePresence>
  )
})