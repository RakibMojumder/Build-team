import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';


function App() {

  return (
    <div className='bg-[#001524] text-white min-h-screen'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
