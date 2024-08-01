async ({ deep, require }) => {
  const React = require('react');
  const { useRef, useEffect, useState, useCallback, useLayoutEffect } = React;
  const { 
    Input, 
    SimpleGrid, 
    Box, 
    Select,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuOptionGroup,
    MenuItemOption, 
    Button,
    HStack,
    Text, 
    Tag,
    TagLabel,
    TagCloseButton,
    IconButton,
  } = require('@chakra-ui/react');
  const am5 = await deep.import('@amcharts/amcharts5');
  const am5wc = await deep.import('@amcharts/amcharts5/wc');
  const { FiChevronDown, FiTag } = require('react-icons/fi');
  const WordCloud = require('react-d3-cloud');
  const { useLocalStore } = require('@deep-foundation/store/local');
  const ResizeDetector = require('react-resize-detector');
  const _ = require('lodash');
  const { useSpaceId } = require('@deep-foundation/deepcase');
  const Min = await deep.id('@deep-foundation/post-to-cloud', 'Min');
  const Max = await deep.id('@deep-foundation/post-to-cloud', 'Max');
  const Limit = await deep.id('@deep-foundation/post-to-cloud', 'Limit');
  const Cloud = await deep.id('@deep-foundation/post-to-cloud', 'Cloud');
  const Word = await deep.id('@deep-foundation/post-to-cloud', 'Word');
  const Count = await deep.id('@deep-foundation/post-to-cloud', 'Count');
  const Address = await deep.id('@deep-foundation/rss-to-deep', 'Address');
  const AddressTittle = await deep.id('@deep-foundation/rss-to-deep', 'AddressTittle');
  const CloudAddress = await deep.id('@deep-foundation/post-to-cloud', 'CloudAddress');
  const Contain = await deep.id('@deep-foundation/core', 'Contain');
  const rssTree = await deep.id('@deep-foundation/rss-to-deep', 'rssTree');
  const CloudWordsInterface = await deep.id('@deep-foundation/words-demo', 'CloudWordsInterface');
  
  const Content = React.memo(({ style, link, fillSize }) => { 
    const [selectedWords, setSelectedWords] = useLocalStore('wcsw', []);
    const { data: [cloudLink]} = deep.useDeepSubscription({
      id: {_eq: link.from_id}
    });
    
    const minmaxLinks = deep.useDeepSubscription({
      type_id: {_in: [Min, Max, Limit]},
      to_id: {_eq: cloudLink?.id}
    }); 

    const minmax = !minmaxLinks.loading ? minmaxLinks?.data : [];

    let min, max, limit;
    for (let l of minmax) {
      if (l.type_id === Min) min = l
      if (l.type_id === Max) max = l
      if (l.type_id === Limit) limit = l
    }

    const cloudValue = cloudLink?.object?.value;
    
    const data = cloudValue ? Object.keys(cloudValue).map((word)=>({ id:word, text: cloudValue?.[word]?.word+`(${cloudValue?.[word]?.total})`, value: cloudValue?.[word]?.total * 70})) : [];
    const data1 = cloudValue; 
    
    const onWordClick = useCallback((e, w) => setSelectedWords((selectedWords = []) => selectedWords.includes(w.text.slice(0, w.text.indexOf('('))) ? selectedWords.filter(i => i !== w.text.slice(0, w.text.indexOf('('))) : [...selectedWords, w.text.slice(0, w.text.indexOf('('))]), []);
    const onWordTagClick = word => setSelectedWords(selectedWords.filter((selected)=>selected !== word));
    const wordFontWeight = useCallback((w) => selectedWords.includes(w.text.slice(0, w.text.indexOf('('))) ? 'bold' : 'normal', [selectedWords]);
    const wordFill = useCallback((w) => selectedWords.includes(w.text.slice(0, w.text.indexOf('('))) ? '#000' : '#b6b6b6', [selectedWords]);
    const wordRotate = useCallback((word) => word.value % 1, []);
    const [size, setSize] = useState({ width: 0, height: 0 })

    const _min = new Date(min?.value?.value || (new Date()).valueOf());
    const _max = new Date(max?.value?.value || (new Date()).valueOf());
    const _limit = limit?.value?.value;
    const __min = (new Date(_min.getTime() - _min.getTimezoneOffset() * 60000).toISOString()).slice(0, 16)
    const __max = (new Date(_max.getTime() - _max.getTimezoneOffset() * 60000).toISOString()).slice(0, 16)

    const { data: addresses } = deep.useDeepSubscription({
      type_id: { _eq: Address }
      },{
      returning: `
        id
        value
        cloudAddresses: in(where: { type_id:{_eq: ${CloudAddress}}, from: { type_id: {_eq: ${Cloud}} }}) {
        cloud: from_id
        }
        tittle: in(where: { type_id:{_eq: ${AddressTittle}} }) {
          value
        }
        `
    }); 

    const [wordValue, setWordValue] = useState();
    
    let datasorted = data.sort((a,b) => b.value - a.value).slice(0, _limit);
    if (wordValue) datasorted = datasorted[datasorted.findIndex(word=>word?.text === wordValue)] ? [datasorted[datasorted.findIndex(word=>word?.text === wordValue)]] : []; 
    console.log('datasorted', datasorted)

    useLayoutEffect(() => {
      let root = am5.Root.new("cloudDiv");
console.log('datasorted1', datasorted);
      let container = root.container.children.push(am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.gridLayout
      }));
      

      let series = root.container.children.push(
        am5wc.WordCloud.new(root, {
          angles: [0],
          minFontSize: am5.percent(5),
          maxFontSize: am5.percent(30),
          calculateAggregates: true,
          categoryField: "text",
          valueField: "value",
          minWordLength: 2,
        })
      );

      series.labels.template.setAll({
        templateField: "labelSettings",
        fontFamily: "Courier New",
        fontWeight: "bold",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        text: "{text}",
      });

      series.labels.template.set("interactive", true);

      series.labels.template.states.create("hover", {
          fill: am5.color(0xff621f)
      });

      series.set("heatRules", [{
        target: series.labels.template,
        dataField: "value",
        min: am5.color(color4),
        max: am5.color(color1),
        key: "fill",
      }]);

      series.labels.template.events.on("click", (ev: any) => {
        const category = ev.target.dataItem.get("category");
        // window.open("https://www.google.com/search?q=" + encodeURIComponent(category));
        console.log('category', category);
      });
console.log('datasortedel', datasorted);
      const el = series.data.setAll(datasorted);
      console.log('el', el);
      
      if (root) {
        (root as any).current = root;
      }

      return () => {
        root.dispose();
      };

    }, [datasorted]);

    const color1 = "#0a035e";
    const color2 = "#1d139c";
    const color3 = "#482CF9";
    const color4 = "#89A4FF";
    
    return <>
      <ResizeDetector
        handleWidth 
        handleHeight
        onResize={(width, height) => setSize({ width, height })}
      >
        <Box sx={{
              overflow: !fillSize ? 'hidden' : 'scroll',
              width: fillSize ? size.width : '100%',
              height: fillSize ? size.height : '100%',
              boxShadow: '0 0 5px 4px #d8eaec',
          }}
        >
          <Box sx={{ position: 'relative', bg: 'lightDark', p: '0.5rem', width: '100%', minWidth: '35rem', ...style }}>
            <Box display='flex' flexFlow='column'>
              <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(8rem, 1fr))' columnGap='0.5rem' rowGap='0.5rem' marginBottom='0.5rem' width='100%'>
                <Input 
                  placeholder='Количество слов'
                  value={_limit}
                  type='number'
                  onChange={async (e) => {
                    const l = Number(e.target.value);
                    const { data: founded } = await deep.select({
                        type_id: Limit, from_id: cloudLink.id, to_id: cloudLink.id
                    });
                    if (founded.length) deep.update({ link_id: founded[0]?.id }, { value: l }, { table: 'numbers' });
                    else deep.insert({ type_id: Limit, from_id: cloudLink.id, to_id: cloudLink.id, number: { data: { value: l } } });
                  }}
                  sx={{borderColor: "borderColor", fontSize: 'sm'}}
                />
                <Input
                  value={__min}
                  onChange={async (e) => {
                    const t = new Date(e.target.value).valueOf();
                    const { data: founded } = await deep.select({
                        type_id: Min, from_id: cloudLink.id, to_id: cloudLink.id
                    });
                    if (founded.length) deep.update({ link_id: founded[0]?.id }, { value: t }, { table: 'numbers' });
                    else deep.insert({ type_id: Min, from_id: cloudLink.id, to_id: cloudLink.id, number: { data: { value: t } } });
                  }}
                  placeholder="min"
                  type="datetime-local"
                  sx={{borderColor: "borderColor", fontSize: 'sm'}}
                />
                <Input
                  value={__max}
                  onChange={async (e) => {
                      const t = new Date(e.target.value).valueOf();
                    const { data: founded } = await deep.select({
                        type_id: Max, from_id: cloudLink.id, to_id: cloudLink.id
                    });
                    if (founded.length) deep.update({ link_id: founded[0]?.id }, { value: t }, { table: 'numbers' });
                    else deep.insert({ type_id: Max, from_id: cloudLink.id, to_id: cloudLink.id, number: { data: { value: t } } });
                  }}
                  placeholder="max"
                  type="datetime-local"
                  sx={{borderColor: "borderColor", fontSize: 'sm'}}
                />
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button} 
                  bg='lightDark'
                  borderRadius='md'
                  borderWidth='thin'
                  borderColor='borderColor'
                  fontSize='sm'
                  fontWeight='regular'
                  width='100%'
                >
                  <HStack><Text>Источники</Text><FiChevronDown /></HStack>
                </MenuButton>
                <MenuList minWidth='240px'>
                  {addresses?.map((address)=>{
                    const addressExists = address?.cloudAddresses?.find(cloudAddress => cloudAddress?.cloud === cloudLink?.id);
                    return <MenuItem
                      key={address.id}
                      isChecked={addressExists} 
                      onClick = {() => {
                        if (addressExists){
                          deep.delete({ type_id: CloudAddress, from_id: cloudLink?.id, to_id: address.id });
                        } else {
                          deep.insert({ type_id: CloudAddress, from_id: cloudLink?.id, to_id: address.id });
                        }
                      }}
                    >
                      {!!addressExists ? '- ':'+ '}{address?.tittle?.[0]?.value?.value ? address?.tittle?.[0]?.value?.value : address?.value?.value}
                    </MenuItem>
                  }
                </MenuList>
              </Menu>
              <Input 
                placeholder='Слово'
                value={wordValue}
                type='text'
                sx={{borderColor: "borderColor", fontSize: 'sm'}}
                onChange={e => setWordValue(e.target.value?.toLowerCase())}
              />
              <IconButton isRound icon={<FiTag/>}
                aria-label='удаление слов из контекста'
                colorScheme='gray'
                sx={{
                  borderWidth: 'thin',
                  borderColor: 'borderColor',
                  width: '2rem',
                }}
                onClick={() => {
                  setSelectedWords([...selectedWords, wordValue]);
                  setWordValue('');
                }}
              />
              </Box>
            </Box>
            <Box display='flex' flexFlow='row' marginBottom='0.5rem'>
              <Text fontSize='xs' fontWeight='medium' alignSelf='center' mr='0.5rem'>Источники:</Text>
              <Box
                sx={{
                  '&>*:not(:last-of-type)': {
                    mr: '0.5rem'
                  }
                }}
              >
                {addresses?.map((address) => address?.cloudAddresses?.find(cloudAddress => cloudAddress?.cloud === link.from_id) ? <Tag size='sm' borderRadius='full' variant='solid' height='100%'>
                  <TagLabel>{address?.tittle?.[0]?.value?.value ? address?.tittle?.[0]?.value?.value : address?.value?.value}</TagLabel>
                  <TagCloseButton onClick={() => 
                          deep.delete({ type_id: CloudAddress, from_id: link.id, to_id: address.id })
                </Tag> : null ) }
              </Box>
            </Box>
            <Box display='flex' flexFlow='row' marginBottom='0.5rem'>
              <Text fontSize='xs' fontWeight='medium' alignSelf='center' mr='0.5rem'>Контекст:</Text>
              <Box
                sx={{
                  '&>*:not(:last-of-type)': {
                    mr: '0.5rem'
                  }
                }}
              >
                {selectedWords?.map((word)=> <Tag size='sm' borderRadius='full' variant='solid' height='100%'>
                  <TagLabel>{word ? word : 'ошибочка'}</TagLabel>
                  <TagCloseButton onClick={()=>onWordTagClick(word)}/>
                </Tag>)}
              </Box>
            </Box>
            {<div
              id="cloudDiv"
              style={{ width: "627px", height: "400px" }}
            ></div>}
            
          </Box>
        </Box>
      </ResizeDetector>
    </>;
  }, (prev, next) => _.isEqual(prev.link.value, next.link.value));

  return ({ style, link }:{ style?: any; link: any; }) => {
    return <Content link={link} style={{ height: 500, ...style }}/>;
  };
}