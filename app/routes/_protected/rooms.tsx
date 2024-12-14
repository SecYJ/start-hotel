import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/rooms')({
  component: RoomPage,
})

function RoomPage() {
  return <div>Hello "/rooms"!</div>
}
