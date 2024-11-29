import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/home.tsx"
import { Parrot } from "./pages/parrot.tsx"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parrot" element={<Parrot />} />
      </Routes>
    </BrowserRouter>
  )
}
