import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Box } from "@chakra-ui/react";

interface Data {
  source: string;
  date: string;
  title: string;
  description: string;
  mainWord: string;
};

const defaultData: Data[] = [
  {
    source: 'abc',
    date: "1984-01-04",
    title: "Теннисон 'Вкушающие лотос'",
    description: "Есть музыка, чей вздох нежнее упадает, ‎чем лепестки отцветших роз, нежнее, чем роса, когда она блистает,‎роняя слёзы на утёс. Нежней, чем падает на землю свет зарницы,‎когда за морем спит гроза, нежней, чем падают усталые ресницы ‎на утомлённые глаза. Есть музыка, чей вздох как сладкая дремота,‎что сходит с неба в тихий час. Есть мшистая постель, где крепко спит забота ‎и где никто не будит нас. Там дышит гладь реки в согретом полумраке, ‎цветы баюкает волна, и с выступов глядя, к земле склонились маки, ‎в объятьях нежащего сна.",
    mainWord: 'a',
  },
  {
    source: 'djs',
    date: "1961-05-10",
    title: "Данте Алигьери. 'Божественная комедия. Ад. Песнь шестая'",
    description: "Меж призраков, которыми владел тяжелый дождь, мы шли вперед, ступая по пустоте, имевшей облик тел. Лежала плоско их гряда густая, и лишь один, чуть нас заметил он, привстал и сел, глаза на нас вздымая. 'О ты, который в этот Ад сведен, - Сказал он, - ты меня, наверно, знаешь. Ты был уже, когда я выбыл вон.'",
    mainWord: 'b',
  },
  {
    source: 'akd',
    date: "1991-10-12",
    title: "Пушкин А.С. 'Ангел'",
    description: "В дверях эдема ангел нежный, главой поникшею сиял, а демон мрачный и мятежный над адской бездною летал. Дух отрицанья, дух сомненья на духа чистого взирал и жар невольный умиленья впервые смутно познавал. 'Прости, — он рек, — тебя я видел, и ты недаром мне сиял: не все я в небе ненавидел, не все я в мире презирал'.",
    mainWord: 'c',
  },
  {
    source: 'euj',
    date: "1978-09-24",
    title: "Евтушенко Е.А. 'Люди неинтересные'",
    description: "Людей неинтересных в мире нет. Их судьбы — как истории планет. У каждой все особое, свое, и нет планет, похожих на нее. А если кто-то незаметно жил и с этой незаметностью дружил, он интересен был среди людей самой неинтересностью своей.",
    mainWord: 'd',
  },
];

const columnHelper = createColumnHelper<Data>();
const columns = [
  columnHelper.accessor("source", {
    header: "Источник",
  }),
  columnHelper.accessor("date", {
    header: "Время",
  }),
  columnHelper.accessor("title", {
    header: "Заголовок",
  }),
  columnHelper.accessor("description", {
    header: "Описание",
  }),
  columnHelper.accessor("mainWord", {
    header: "Тренд слова",
  }),
];

export const Table = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log({ 'table': table });
  return (
    <Box as='table'
      sx={{
        borderCollapse: 'collapse',
        borderWidth: 'thin',
        borderStyle: 'solid',
        borderColor: 'gray.200',
        margin: '1.5rem',
        backgroundColor: '#fff',
      }}
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box as='tr' key={headerGroup.id} 
            sx={{
              borderBottom: '2px solid #ccc'
            }}
          >
            {headerGroup.headers.map((header) => (
              <Box as='th' key={header.id}
                sx={{
                  textAlign: 'left',
                  padding: '0.5rem 0.8rem',
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Box>
            ))}
          </Box>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <Box as='tr' key={row.id}
            sx={{
              borderBottom: 'thin solid #ccc'
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <Box as='td' key={cell.id}
                sx={{
                  textAlign: 'left',
                  padding: '0.5rem 0.8rem',
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </tbody>
    </Box>
  );
};