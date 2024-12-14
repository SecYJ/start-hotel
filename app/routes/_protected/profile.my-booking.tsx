import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/profile/my-booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/profile/order"!</div>
}
