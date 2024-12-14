import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/payment"!</div>
}
