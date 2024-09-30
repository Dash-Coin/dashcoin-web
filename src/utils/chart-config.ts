import { ChartConfig } from '@/components/ui/chart'

export const chartConfig = {
  revenues: {
    label: 'Receitas',
  },
  food: {
    label: 'Alimentação',
    color: '#4f46e5',
  },
  housing: {
    label: 'Moradia',
    color: '#4338ca',
  },
  health: {
    label: 'Saúde',
    color: '#3730a3',
  },
  services: {
    label: 'Serviços',
    color: '#312e81',
  },
  others: {
    label: 'Outros',
    color: '#1e1b4b',
  },
} satisfies ChartConfig
