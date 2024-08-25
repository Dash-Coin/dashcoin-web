import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { DashboardTab } from './_components/dashboard-tab'
import { ExpensesTab } from './_components/expenses-tab'
import { RevenuesTab } from './_components/revenues-tab'

export default function AppPage() {
  return (
    <Tabs defaultValue="dashboard" className="space-y-6">
      <TabsList className="w-full grid grid-cols-3">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="revenues">Receitas</TabsTrigger>
        <TabsTrigger value="expenses">Despesas</TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard">
        <DashboardTab />
      </TabsContent>

      <TabsContent value="revenues">
        <RevenuesTab />
      </TabsContent>

      <TabsContent value="expenses">
        <ExpensesTab />
      </TabsContent>
    </Tabs>
  )
}
