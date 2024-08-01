import { TagCloud } from 'react-tagcloud'


const data = [
  { value: "бьянка", count: 1003 },
  { value: "которую", count: 11 },
  { value: "канье", count: 8 },
  { value: "музыканта", count: 93 },
  { value: "участие", count: 21 },
  { value: "она", count: 275 },
  { value: "контракт", count: 2 },
  { value: "американской", count: 60 },
  { value: "сон", count: 140 },
  { value: "которого", count: 54 },
  { value: "будет", count: 77 },
  { value: "рамках", count: 960 },
  { value: "года.", count: 55 },
  { value: "комитета", count: 25 },
  { value: "что", count: 574 },
  { value: "тот", count: 2 }
]

const customRenderer = (tag, size, color) => {

  return (
    <span key={tag.count} style={{ color, margin: '12px', fontSize: `calc(5px + ${tag.count})` }} className={`tag-${size}`}>
      {tag.value} ({tag.count})
    </span>
  )
}

export const CustomizedCloud = () => (
  <TagCloud tags={data} minSize={10} maxSize={85} disableRandomColor={true}  renderer={customRenderer} />
)