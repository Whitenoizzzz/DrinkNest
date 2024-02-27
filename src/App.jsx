import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Landing,
  About,
  Error,
  Cocktail,
  HomeLayout,
  NewsLetter,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/NewsLetter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        //if you dont specify error here it will bubble up to the parent element errorElement
        errorElement: <SinglePageError></SinglePageError>,
        loader: landingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail></Cocktail>,
        errorElement: <SinglePageError></SinglePageError>,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: 'newsletter',
        element: <NewsLetter></NewsLetter>,
        action: newsletterAction,
      },
      {
        path: 'about',
        element: <About></About>,
      },
    ],
  },
  {
    path: '/about',
    element: (
      <div>
        <About></About>
      </div>
    ),
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}
export default App
