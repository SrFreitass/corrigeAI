import { PrivateRouter } from '@/router/privateRouter'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PrivateRouter>{children}</PrivateRouter>
}
