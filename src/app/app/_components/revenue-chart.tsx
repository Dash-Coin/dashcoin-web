'use client'

import { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'

import { CardContent } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { revenue: 'food', value: 500, fill: 'var(--color-food)' },
  { revenue: 'home', value: 274, fill: 'var(--color-home)' },
  { revenue: 'education', value: 100, fill: 'var(--color-education)' },
  { revenue: 'health', value: 173, fill: 'var(--color-health)' },
  { revenue: 'other', value: 675, fill: 'var(--color-other)' },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  food: {
    label: 'Alimentação',
    color: 'hsl(var(--chart-5))',
  },
  home: {
    label: 'Casa',
    color: 'hsl(var(--chart-2))',
  },
  education: {
    label: 'Educação',
    color: 'hsl(var(--chart-1))',
  },
  health: {
    label: 'Saúde',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Outros',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function RevenuesChart() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <CardContent>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="revenue"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Total
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
  )
}
