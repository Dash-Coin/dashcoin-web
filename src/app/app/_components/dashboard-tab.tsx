import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function DashboardTab() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Gráfico de despesas</CardTitle>
          <CardDescription>Exemplo...</CardDescription>
        </CardHeader>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Gráfico de receita</CardTitle>
          <CardDescription>Exemplo...</CardDescription>
        </CardHeader>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Gráficos geral</CardTitle>
          <CardDescription>Exemplo...</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
