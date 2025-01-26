import Home from './pages/Home'
import Contact from './pages/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShopPage from './pages/ShopPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/contact",
    element:<Contact></Contact>
  },
    {
    path:"/shop",
    element:<ShopPage></ShopPage>
  },
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App