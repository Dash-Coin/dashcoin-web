import { Category } from '@/types/category'

export async function fetchCategories(): Promise<Category[]> {
  return [
    {
      id: 'food',
      name: 'Alimentação',
    },
    {
      id: 'housing',
      name: 'Moradia',
    },
    {
      id: 'health',
      name: 'Saúde',
    },
    {
      id: 'services',
      name: 'Serviços',
    },
    {
      id: 'others',
      name: 'Outros',
    },
  ]
}
