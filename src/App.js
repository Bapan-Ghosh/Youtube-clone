import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer"
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path :"/",
      element: 
        <>
          <Header />
          <Body />
        </>
      ,
      children :[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<WatchPage/>
        }
      ]
    },
  ])


  return (
        <Provider store={store}>
        <div className='m-auto w-[95%]'>
           <RouterProvider router={appRouter}/>
        </div>
        </Provider>
      );
}

export default App;
