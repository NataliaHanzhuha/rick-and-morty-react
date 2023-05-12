import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Character } from './components/Character';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: '/character/:id',
    element: <Character />,
  }
]);

function App() {
  return (
    <>
      <a href="/">
        <header className='font-bold flex items-center uppercase justify-center text-2xl p-3 mb-4 bg-red-500 text-white'>
          Rick and Morty Wiki
        </header>
      </a>

      <div className='flex-1'>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </div>

      <footer className='flex justify-center p-2 text-white bg-blue-950'>
        Powered by React
      </footer>
    </>
  );
}

export default App;
