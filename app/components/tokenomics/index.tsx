'use client'

import { useInView } from 'framer-motion'
import React, {  useRef } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

interface DataItem {
  name: string
  color: string
  value: number
}

const data: DataItem[] = [
  { name: 'Presale', value: 40, color: '#11BBFF' },
  { name: 'Stacking & Rewards', value: 20, color: '#7B15F8' },
  { name: 'Team & Advisors', value: 5, color: 'url(#gradient1)' },
  { name: 'Liquidity & Exchange listings', value: 20, color: '#9215F8' },
  { name: 'Stratagic Reserves', value: 10, color: '#7800AB' },
  { name: 'Marketing & KOLs', value: 5, color: '#A372FB' },
]

const RADIAN = Math.PI / 180

interface CustomLabelProps {
  cx: number
  cy: number
  midAngle: number
  outerRadius: number
  percent: number
  index: number
}

// Helper function to split text into multiple lines based on a max character limit per line
const wrapText = (text: string, maxChars: number): string[] => {
  const words = text.split(' ')
  let line = ''
  const lines: string[] = []
  words.forEach((word) => {
    // Check if adding the next word would exceed the limit
    if ((line + word).length > maxChars) {
      lines.push(line.trim())
      line = word + ' '
    } else {
      line += word + ' '
    }
  })
  if (line) {
    lines.push(line.trim())
  }
  return lines
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}: CustomLabelProps) => {
  // Offset the label 40 pixels outside of the pie slice.
  const radius = outerRadius + 40
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  // Wrap the label text (using a max of 15 characters per line, adjust as needed)
  const labelLines = wrapText(data[index].name, 15)
  return (
    <text
      x={x}
      y={y}
      fill='#FFFFFF'
      textAnchor={x > cx ? 'start' : 'end'}
      className='md:text-xl sm:text-lg text-white'
    >
      {labelLines.map((line, i) => (
        <tspan  key={i} x={x} dy={i === 0 ? '0' : '1.2em'}>
          {line}
        </tspan>
      ))}
      <tspan fill='#9B4AFF' dx={'5px'}>
        {(percent * 100).toFixed(0)}%
      </tspan>
    </text>
  )
}

const PieChartWithLabels: React.FC = () => {
  const pieChartSection = useRef<HTMLDivElement>(null)
  const isInView = useInView(pieChartSection, { amount: 0.5 })

 
  // Define chart dimensions and center coordinates.
  const chartWidth = 600
  const chartHeight = 600
  const cx = chartWidth / 2 // center x-coordinate
  const cy = chartHeight / 2 // center y-coordinate
  const innerRadius = 140
  const outerRadius = 187.5

  // Define image dimensions
  const imageWidth = 200
  const imageHeight = 200

  // Calculate image position so that it is centered in the hole.
  const imageX = cx - imageWidth / 2 + 5
  const imageY = cy - imageHeight / 2
  return (
    <section
      className=' sm:py-14 py-8 px-2 sm:px-5 md:mx-20 sm:mx-5 mx-3 text-white'
      aria-label='Tokenomics'
    >
      {/* Section Title */}
      <h1 className='faq-item lg:text-5xl md:text-4xl text-3xl font-medium text-center text-white '>
        Tokenomics
      </h1>
      <section
        ref={pieChartSection}
        className=' my-10 lg:py-10 pt-10  lg:px-20 sm:px-5 px-3 border rounded-lg border-white/15 flex flex-wrap items-center gap-x-10'
        style={{ backgroundImage: 'linear-gradient(130deg,#190D2E,#000000)' }}
      >
        <div  className={` ${isInView?'opacity-100':'opacity-0 translate-y-10'} transition-all duration-[1500] sm:text-xl flex-1 `}>
          <h3 className='md:text-4xl sm:text-3xl text-2xl font-semibold mb-5'>
            Token Details
          </h3>
          <div className='flex flex-col gap-3 p-5 border font-thin border-white/15 rounded-xl text-white/70'>
            <span>
              Token Name: <span className='font-semibold text-white'>CYNQAI</span>
            </span>
            <hr className='border-b border-white/15' />
            <span>
              Token Ticker: <span className='font-semibold text-white'>$CYNQAI</span>
            </span>
            <hr className='border-b border-white/15' />
            <span>
              Chain: <span className='font-semibold text-white'>Ethereum</span>
            </span>
            <hr className='border-b border-white/15' />
            <span>
              Contract: <span className='font-semibold text-white'>To Be Announced</span>
            </span>
            <hr className='border-b border-white/15' />
            <span>
              Supply: <span className='font-semibold text-white'>10,000,000,000</span>
            </span>
            <hr className='border-b border-white/15' />
            <span>
              Decimals: <span className='font-semibold text-white'>9</span>
            </span>
          </div>
        </div>
        {isInView && (
          <PieChart
            width={chartWidth}
            height={chartHeight}
            className=' mx-auto pie-responsive relative'
          >
            {/* Define the linear gradient in an SVG <defs> block */}
            <defs>
              <linearGradient id='gradient1' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='#11BBFF' />
                <stop offset='100%' stopColor='#7D15FB' />
              </linearGradient>
            </defs>
            <Pie
              data={data}
              cx={cx} // Center X-coordinate
              cy={cy} // Center Y-coordinate
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey='value'
              label={renderCustomizedLabel}
              labelLine={false} // Disables connector lines
              stroke='none' // Removes border lines between slices
              // Rotate the pie chart:
              startAngle={90} // The starting angle (in degrees)
              endAngle={-270} // The ending angle (in degrees)
              isAnimationActive={true}
              animationDuration={700}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke='none' // Removes any default stroke on individual slices
                />
              ))}
            </Pie>

            {/* SVG image element placed in the center of the chart */}

            <image
              x={imageX}
              y={imageY}
              width={imageWidth}
              height={imageHeight}
              href='/pieImg.svg' // Make sure this path is correct
            />
            {/* SVG Gradient element placed in the center of the chart */}
            <image
              x={cx - 400 / 2 - 5}
              y={cy - 400 / 2}
              width={400}
              height={400}
              href='/pieGradient.svg'
            />
          </PieChart>
        )}
      </section>
    </section>
  )
}

export default PieChartWithLabels
