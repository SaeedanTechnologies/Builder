import { RouterProvider } from "react-router-dom"
import Router from "./routes"
import { Suspense } from "react"


const App=()=> {
  const router = Router()
  return (
    <Suspense fallback={<>Loading...</>}>
    <RouterProvider router={router} />
   </Suspense>
  )
}

export default App
