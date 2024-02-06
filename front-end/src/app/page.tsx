import MenuAside from '../components/MenuAside'
import Dashboard from '../components/Dashbord'

export default function Home() {
  return (
    <main className="flex">
      <MenuAside />
      <Dashboard />
    </main>
  )
}
