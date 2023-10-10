import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  CartesianAxis,
  ResponsiveContainer,
  BarChart,
  Rectangle
} from "recharts";
import { Input } from "@chakra-ui/react";

const data = [
  { id: "142740", text: "бьянка", value: 3 },

  { id: "142744", text: "которую", value: 11 },

  { id: "142752", text: "канье", value: 8 },

  { id: "142772", text: "музыканта", value: 3 },

  { id: "142776", text: "участие", value: 21 },

  { id: "142792", text: "она", value: 275 },

  { id: "142807", text: "контракт", value: 2 },

  { id: "142809", text: "американской", value: 60 },

  { id: "142829", text: "которого", value: 54 },

  { id: "142841", text: "будет", value: 77 },

  { id: "142855", text: "рамках", value: 60 },

  { id: "142861", text: "года.", value: 55 },

  { id: "142909", text: "комитета", value: 25 },

  { id: "142919", text: "что", value: 15754 },

  { id: "142921", text: "тот", value: 2 }
];

export function Chart (){
  const [wordСount, setWordСount] = useState(10);
  const sliceData = data.slice(0, wordСount);
  const datasorting = sliceData.sort((a, b) => b.value - a.value);

  return (
    <>
      <Input
        placeholder="Количество слов"
        value={wordСount}
        type="number"
        onChange={(e) => {
          const newCount = parseInt(e.target.value);
          setWordСount(newCount);
        }}
      />
      <ResponsiveContainer width="100%" height='100%'>
        <BarChart
          layout="vertical"
          data={datasorting}
          margin={{
            top: 5,
            right: 10,
            left: 52,
            bottom: 15
          }}
          barSize={10}
          // reverseStackOrder={true}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#f5f5f5"
            verticalCoordinatesGenerator={(props) =>
              props.width > 450 ? [150, 300, 450] : [200, 400]
            }
            horizontal={false}
          />
          <XAxis
            tickLine={false}
            tick={true}
            dataKey="value"
            type="number"
            domain={[0, "dataMax + 100"]}
            // domain={["dataMin", (dataMax) => dataMax * 1.2]}
          />
          <YAxis dataKey="text" type="category" />
          <YAxis
            orientation="right"
            yAxisId={1}
            dataKey="value"
            type="category"
            // type="number"
            domain={["dataMax", "dataMix"]}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" minPointSize={1} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
