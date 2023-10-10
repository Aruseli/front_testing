import React, { useState, useEffect, useReducer, useMemo } from "react";
import { motion } from "framer-motion";
import { Box, Button, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface Data {
  id: string;
  source: string;
  date: string;
  title: string;
  description: string;
  trendWord: string;
  count: number;
  url: string;
};

const data: Data[] = [
  {
    id: "142740",
    source: 'Аргументы и факты',
    date: "1984-01-04",
    title: "Теннисон 'Вкушающие лотос'",
    description: "Есть музыка, чей вздох нежнее упадает, ‎чем лепестки отцветших роз, нежнее, чем роса, когда она блистает,‎роняя слёзы на утёс. Нежней, чем падает на землю свет зарницы,‎когда за морем спит гроза, нежней, чем падают усталые ресницы ‎на утомлённые глаза. Есть музыка, чей вздох как сладкая дремота,‎что сходит с неба в тихий час. Есть мшистая постель, где крепко спит забота ‎и где никто не будит нас. Там дышит гладь реки в согретом полумраке, ‎цветы баюкает волна, и с выступов глядя, к земле склонились маки, ‎в объятьях нежащего сна.",
    trendWord: 'музыка',
    count: 15,
    url: 'https://www.aif.ru/culture/person/tennison_vkuschayuschie_lotus',
  },
  {
    id: "142755",
    source: 'Лента.ру',
    date: "1961-05-10",
    title: "Данте Алигьери. 'Божественная комедия. Ад. Песнь шестая'",
    description: "Меж призраков, которыми владел тяжелый дождь, мы шли вперед, ступая по пустоте, имевшей облик тел. Лежала плоско их гряда густая, и лишь один, чуть нас заметил он, привстал и сел, глаза на нас вздымая. 'О ты, который в этот Ад сведен, - Сказал он, - ты меня, наверно, знаешь. Ты был уже, когда я выбыл вон.'",
    trendWord: 'комедия',
    count: 2,
    url: 'https://lenta.ru/articles/2011/05/10/dante/',
  },
  {
    id: "142722",
    source: 'Комсомольская правда',
    date: "1991-10-12",
    title: "Пушкин А.С. 'Ангел'",
    description: "В дверях эдема ангел нежный, главой поникшею сиял, а демон мрачный и мятежный над адской бездною летал. Дух отрицанья, дух сомненья на духа чистого взирал и жар невольный умиленья впервые смутно познавал. 'Прости, — он рек, — тебя я видел, и ты недаром мне сиял: не все я в небе ненавидел, не все я в мире презирал'.",
    trendWord: 'демон',
    count: 11,
    url: 'https://www.kp.ru/daily/21742/28103/',
  },
  {
    id: "142778",
    source: 'Forbes',
    date: "1978-09-24",
    title: "Евтушенко Е.А. 'Люди неинтересные'",
    description: "Людей неинтересных в мире нет. Их судьбы — как истории планет. У каждой все особое, свое, и нет планет, похожих на нее. А если кто-то незаметно жил и с этой незаметностью дружил, он интересен был среди людей самой неинтересностью своей.",
    trendWord: 'незаметно',
    count: 3,
    url: 'https://www.forbes.ru/forbeslife/lyudi/403401-lyudi-neinteresnye',
  },
];

export function TableWithFilter ({
  dateMin,
  dateMax,
}:{
  dateMin?: string;
  dateMax?: string;
}){
  const [wordСount, setWordСount] = useState(0);
  const [word, setWord] = useState('');
  const sliceData = data.slice(0, wordСount);
  const datasorting = sliceData.sort((a, b) => b.count - a.count);
  const sources = data.map(function(item) { return item["source"]; });
  console.log({ 'sources': sources });

  return (<>
      <FilterInputs 
        sources={sources}
        word={word}
        dateMin={dateMin}
        dateMax={dateMax}
        countWord={wordСount}
        onChangeSource={() => {}}
        onChangeCountWord={(e) => setWordСount(parseInt(e.target.value))}
        onChangeWord={(e) => setWord(e.target.value)}
        onChangeDateMin={() => {}}
        onChangeDateMax={() => {}}
      />
      <TableContainer whiteSpace='pre-line'>
        <Table variant='simple' size='md'>
          <Thead>
            <Tr
              sx={{
                '&>*': {
                  padding: '0.5rem 1.5rem',
                  borderCollapse: 'collapse',
                  borderWidth: 'thin',
                  borderStyle: 'solid',
                  borderColor: 'borderColorTable',
                  backgroundColor: 'headerBgTable',
                  fontSize: '3xs',
                  fontWeight: 'semiBold',
                  textTransform: 'none',
                  lineHeight: '1.5rem',
                  color: 'text',
                  width: 'max-content'
                }
              }}
            >
              <Th scope="col">Источник</Th>
              <Th scope="col" sx={{minW: '15rem'}}>Время</Th>
              <Th scope="col">Заголовок</Th>
              <Th scope="col">Описание</Th>
              <Th scope="col" sx={{minW: '15rem'}}>Тренд слова</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(d => (
              <Tr key={d.id}
                sx={{
                  '&>*': {
                    borderCollapse: 'collapse',
                    borderWidth: 'thin',
                    borderStyle: 'solid',
                    borderColor: 'borderColorTable',
                    fontSize: '3xs',
                    lineHeight: '1.5rem',
                    backgroundColor: 'bgTable',
                    color: 'text'
                  }
                }}
              >
                <Td>
                  <Button 
                    sx={{
                      bg: 'headerBgTable',
                      borderWidth: 'thin',
                      borderStyle: 'solid',
                      borderColor: 'borderColorTable',
                      fontSize: '3xs',
                    }}
                  >
                    {d.source}
                  </Button>
                </Td>
                <Td sx={{textAlign: 'center'}}>{d.date}</Td>
                <Td>{d.title}</Td>
                <Td>{d.description}</Td>
                <Td>{d.trendWord}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export function RawTable ({
  dateMin,
  dateMax,
}:{
  dateMin?: string;
  dateMax?: string;
}){
  const [wordСount, setWordСount] = useState(0);
  const [word, setWord] = useState('');
  const sliceData = data.slice(0, wordСount);
  const datasorting = sliceData.sort((a, b) => b.count - a.count);
  const sources = data.map(function(item) { return item["source"]; });
  console.log({ 'sources': sources });

  return (<TableContainer whiteSpace='pre-line'>
      <Table variant='simple' size='md'>
        <Thead>
          <Tr
            sx={{
              '&>*': {
                padding: '0.5rem 1.5rem',
                borderCollapse: 'collapse',
                borderWidth: 'thin',
                borderStyle: 'solid',
                borderColor: 'borderColorTable',
                backgroundColor: 'headerBgTable',
                fontSize: '3xs', 
                fontWeight: 'semiBold',
                textTransform: 'none',
                lineHeight: '1.5rem',
                color: 'text',
                width: 'max-content'
              }
            }}
          >
            <Th scope="col">Источник</Th>
            <Th scope="col" sx={{minW: '15rem'}}>Url</Th>
            <Th scope="col">Количество</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(d => (
            <Tr key={d.id}
              sx={{
                '&>*': {
                  borderCollapse: 'collapse',
                  borderWidth: 'thin',
                  borderStyle: 'solid',
                  borderColor: 'borderColorTable',
                  fontSize: '3xs',
                  lineHeight: '1.5rem',
                  backgroundColor: 'bgTable',
                  color: 'text'
                }
              }}
            >
              <Td>{d.source}</Td>
              <Td sx={{textAlign: 'center'}}>{d.url}</Td>
              <Td>{d.count}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};


function Filters({
  source,
  word,
  onChangeSource,
  onChangeWord
}: {
  source: string;
  word: string;
  onChangeSource: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return(<Box 
      display='flex' 
      flexFlow='row'
      sx={{
        '&>*:nth-of-type(1)': {
          mr: '1rem'
        }
      }}
    >
      <Input
        placeholder="Источник"
        value={source}
        type="text"
        onChange={onChangeSource}
      />
      <Input
        placeholder="Слово"
        value={word}
        type="text"
        onChange={onChangeWord}
      />
    </Box>
  )
}

function FilterInputs({
  sources,
  word,
  dateMin,
  dateMax,
  countWord,
  onChangeSource,
  onChangeWord,
  onChangeDateMin,
  onChangeDateMax,
  onChangeCountWord,
}: {
  sources: string[];
  word: string;
  dateMin: string;
  dateMax: string;
  countWord: number;
  onChangeSource: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDateMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDateMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCountWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  console.log({ 'countWord': countWord });

  return(<Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(8rem, 1fr))' columnGap='1rem' rowGap='1rem' padding='1rem 0'>
      <Input 
        placeholder='Количество слов'
        value={countWord}
        type='number'
        onChange={onChangeCountWord}
        size='lg'
        variant='outline'
        sx={{borderColor: "borderColorTable", fontSize: '2xs'}}
      />
      <Input
        value={dateMin}
        onChange={onChangeDateMin}
        size="lg"
        type="datetime-local"
        placeholder='Дата с'
        sx={{borderColor: "borderColorTable", fontSize: '2xs'}}
      />
      <Input
        value={dateMax}
        onChange={onChangeDateMax}
        size="lg"
        type="datetime-local"
        placeholder='Дата по'
        sx={{borderColor: "borderColorTable", fontSize: '2xs'}}
      />
      <Select placeholder='Источник' sx={{borderColor: "borderColorTable", fontSize: '2xs'}} size='lg'>
        {sources.map((s, i) => (<option key={i} value={s}>{s}</option>))}
      </Select>
      <Input 
        placeholder='Слово'
        value={word}
        type='text'
        size='lg'
        sx={{borderColor: "borderColorTable", fontSize: '2xs'}}
        onChange={() => console.log('123')}
      />
    </Box>
  )
}
