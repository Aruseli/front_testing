import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import { Box, Input, Square } from "@chakra-ui/react";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import { Color, Label } from "@amcharts/amcharts5/core";

import { useRef, useEffect, useLayoutEffect, useState } from "react";

export function Cloud(props) {
  const [word, setWord] = useState('');
  
  const data = [
    { text: "бьянка", value: 1003 },
    { text: "которую", value: 11 },
    { text: "канье", value: 8 },
    { text: "музыканта", value: 93 },
    { text: "участие", value: 21 },
    { text: "она", value: 275 },
    { text: "контракт", value: 2 },
    { text: "американской", value: 60 },
    { text: "сон", value: 140 },
    { text: "которого", value: 54 },
    { text: "будет", value: 77 },
    { text: "рамках", value: 960 },
    { text: "года.", value: 55 },
    { text: "комитета", value: 25 },
    { text: "что", value: 574 },
    { text: "тот", value: 2 }
  ];

  function findObjectByValue(text: string, searchString: string) {
    return text === searchString;
  }
  // function findObjectByValue(data: { text: string, value: number }[], searchString: string) {
  //   return data.find(obj => obj.text === searchString);
  // }
  
  const result = findObjectByValue('что', word);
  // console.log('result', result);

  useLayoutEffect(() => {
    let root = am5.Root.new("cloudDiv");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    let colorSet = am5.ColorSet.new(root, { step: 1 });

    let container = root.container.children.push(am5.Container.new(root, {
      width: 600,
      height: 400,
      // width: am5.percent(100),
      // height: am5.percent(100),
      layout: root.verticalLayout
    }));
    

    let series = root.container.children.push(
      am5wc.WordCloud.new(root, {
        angles: [0],
        minFontSize: 5,
        maxFontSize: 30,
        calculateAggregates: true,
        categoryField: "text",
        valueField: "value",
        //@ts-ignore
        // rotationThreshold: 0.7,
        maxCount: 100,
        minWordLength: 2,
        // minFontSize: am5.percent(5),
        // maxFontSize: am5.percent(30),
        // rotation: -45,
        // centerX: am5.percent(50),
        // centerY: am5.percent(50),
        // x: am5.percent(50),
        // y: am5.percent(50)
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
      text: "{text}({value})",
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
      // customFunction: function(sprite: am5.Sprite, min, max, value) {
      //   if (value === word) {
      //     (sprite as am5.Graphics).set("fill", am5.color(0xff0000));
      //   }
      //   else {
      //     (sprite as am5.Graphics).set("fill", am5.color(0x00ff00));
      //   }
      // }
    }]);

    series.labels.template.events.on("click", (ev: any) => {
      const category = ev.target.dataItem.get("category");
      // window.open("https://www.google.com/search?q=" + encodeURIComponent(category));
      console.log('category', category);
    });

 
   


    // series.labels.template.setup = function(label) {
      
    //   label.set("background", am5.RoundedRectangle.new(root, { fillOpacity: 1, fill: colorSet.next() }))
    // }

    
    series.data.setAll(data);
    console.log('seriesData', series.data);

   // @ts-ignore
  //  series.dataItems[0].dataContext.text.on("inited", function (event) {
  //    if (event.target.dataItem.dataContext.text === word) {
  //      event.target.set("fill", am5.color("#FF0000")); // change color to red
  //     }
  //   });
    
    // const searchString = "бьянка";
    
       // @ts-ignore
    console.log('series.dataItems', series.dataItems);

    if (root) {
      (root as any).current = root;
    }

    return () => {
      root.dispose();
    };

  }, []);

  const color1 = "#0a035e";
  const color2 = "#1d139c";
  const color3 = "#482CF9";
  const color4 = "#89A4FF";

  

  return (<>
      <Input 
        colorScheme="red" 
        value={word}
        width='20rem'
        onChange={(e) => setWord(e.target.value)}
      />
      <div
        id="cloudDiv"
        style={{ width: "627px", height: "250px", border: "1px solid red" }}
      ></div>
    </>
  )
}
