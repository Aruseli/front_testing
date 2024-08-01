import { Button, Checkbox, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiChevronDown, FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export const MPopover = React.memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    
  const initRef = useRef();
  const [tittle, setTitle] = useState('');
  const [address, setAddress] = useState('');

  const [addSource, setAddSource] = useState(false);
  return (<Popover 
      isLazy 
      placement='bottom-end' 
      // initialFocusRef={initRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          bg='red'
          borderRadius='md'
          borderWidth='thin'
          borderColor='black'
          fontSize='sm'
          width='100%'
          p='0.375rem 0' variant='ghost' 
          _hover={{bg: 'none'}} 
          onClick={onOpen} 
          leftIcon={<FiChevronDown />}
        >Источники</Button>
      </PopoverTrigger> 
      <PopoverContent minW='25rem'>
        <Popover 
          isLazy 
          placement='bottom-end' 
          // initialFocusRef={initRef}
          isOpen={isOpen}
          onClose={onClose}
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              fontSize='xs'
              width='100%'
              variant='ghost'
              _hover={{bg: 'none'}} 
              onClick={onOpen} 
              leftIcon={<FiChevronDown />}
            >добавить источник</Button>
          </PopoverTrigger> 
          <Portal>
            <PopoverContent minW='25rem'>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader h='2rem'/>
              <PopoverBody>
                <Input
                  defaultValue={tittle}
                  onChange={(e) => {
                      e.stopPropagation();
                      setTitle(e?.target?.value);
                  }}
                  placeholder="Название источника"
                  size="md"
                  type="text"
                  borderColor="black" 
                  fontSize='sm'
                  mb='0.5rem'
                  // ref={initRef}
                />
                <Input
                  defaultValue={address}
                  onChange={(e) => {
                      setAddress(e?.target?.value);
                  }}
                  placeholder="address"
                  size="md"
                  type="text"
                  borderColor="black" 
                  fontSize='sm'
                  mb='1.5rem'
                />
                {addSource
                ? <>
                    <Input
                    defaultValue={tittle}
                    onChange={(e) => {
                        setTitle(e?.target?.value);
                    }}
                    placeholder="Название источника"
                    size="md"
                    type="text"
                    borderColor="black" 
                    fontSize='sm'
                    mb='0.5rem'
                    ref={initRef}
                  />
                  <Input
                    defaultValue={address}
                    onChange={(e) => {
                        setAddress(e?.target?.value);
                    }}
                    placeholder="address"
                    size="md"
                    type="text"
                    borderColor="black" 
                    fontSize='sm'
                    mb='0.5rem'
                  />
                </> : null}
              </PopoverBody>
              <PopoverFooter
                sx={{
                  display: 'flex',
                  flexFlow: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Button variant='ghost' leftIcon={<FiPlusCircle />} onClick={() => setAddSource(true)}>добавить</Button>
                <Button variant='ghost' rightIcon={<FiMinusCircle />} onClick={() => setAddSource(false)}>удалить</Button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
        <Stack spacing={5} direction='column'>
          <Checkbox size='sm' colorScheme='red'>
            Checkbox
          </Checkbox>
          <Checkbox size='md' colorScheme='green' defaultChecked>
            Checkbox
          </Checkbox>
          <Checkbox size='lg' colorScheme='orange' defaultChecked>
            Checkbox
          </Checkbox>
        </Stack>
      </PopoverContent>
    </Popover>
  )
})