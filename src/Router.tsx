import { Routes, Route } from 'react-router-dom'
import { Event } from './pages/Event'

export function Router() {
  return (
    <Routes>
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}
