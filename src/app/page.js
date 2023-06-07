import Table from '@/components/table'
import { getData } from '@/utils/service'

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Table data={data}/>
    </main>
  )
}
