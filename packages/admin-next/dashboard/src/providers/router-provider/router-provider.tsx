import {
  RouterProvider as Provider,
  createBrowserRouter,
} from "react-router-dom"

import { v1Routes } from "./v1"
import { v2Routes } from "./v2"

const V2_ENABLED = import.meta.env.MEDUSA_V2 || false

const router = createBrowserRouter(V2_ENABLED ? v2Routes : v1Routes)

export const RouterProvider = () => {
  return <Provider router={router} />
}
