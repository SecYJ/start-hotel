import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/rooms/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/rooms/$id"!</div>
}
