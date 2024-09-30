'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import { CardContent } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'Janeiro', revenue: 186 },
  { month: 'Fevereiro', revenue: 305 },
  { month: 'Março', revenue: 73 },
  { month: 'Abril', revenue: 237 },
  { month: 'Maio', revenue: 209 },
  { month: 'Junho', revenue: 237 },
  { month: 'Julho', revenue: 305 },
  { month: 'Agosto', revenue: 214 },
  { month: 'Setembro', revenue: 73 },
  { month: 'Outubro', revenue: 186 },
  { month: 'Novembro', revenue: 209 },
  { month: 'Dezembro', revenue: 214 },
]

const chartConfig = {
  revenue: {
    label: 'Receita',
    color: '#4c1d95',
  },
} satisfies ChartConfig

export function RevenueInYearChart() {
  return (
    <CardContent>
      <ChartContainer config={chartConfig} className="w-full h-[250px]">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={8}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </CardContent>
  )
}
