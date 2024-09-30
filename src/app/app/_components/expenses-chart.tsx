'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'

import { CardContent } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { fetchExpenses } from '@/http/fetch-expenses'
import { chartConfig } from '@/utils/chart-config'

export function ExpensesChart() {
  const { data } = useQuery({
    queryKey: ['expenses'],
    queryFn: fetchExpenses,
  })

  const chartData = useMemo(() => {
    return (
      data?.transactions.map((expense) => {
        const category = expense.category as keyof typeof chartConfig // Garante que `category` é uma chave válida
        const config = chartConfig[category] // Obtém a configuração correspondente

        // Verifica se `config` tem a propriedade `color` e usa uma cor padrão se não tiver
        return {
          expense: expense.category,
          value: expense.value,
          fill:
            config && 'color' in config
              ? config.color
              : 'hsl(var(--default-color))', // Verifica se `color` existe em `config`
        }
      }) || []
    )
  }, [data?.transactions])

  const totalExpenses = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [chartData])

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
            nameKey="expense"
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
                        {totalExpenses.toLocaleString()}
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
