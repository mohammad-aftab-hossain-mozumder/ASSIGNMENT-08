import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Appdetails from "../pages/Appdetails/Appdetails";
import Allapps from "../pages/Allapps/Allapps";
import Installation from "../pages/Installation/Installation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const maindltarray = []
const allinstalled = []
const installedid = (x) => {
  const dltindex = maindltarray.indexOf(x)
  if (dltindex !== -1) maindltarray.splice(dltindex, 1)
  toast('installed')
  allinstalled.includes(x) || allinstalled.push(x)
}

const mainremoved = (y) => {
  maindltarray.push(y)
  const index = allinstalled.indexOf(y);
  if (index !== -1) { allinstalled.splice(index, 1) };
}

const localarray = []
const mainlocalfunc = (localinstalled) => {
  localarray.push(...localinstalled)
}
//  localStorage.clear()
// useEffect(() => {
//   const olddata = JSON.parse(localStorage.getItem("appid") || "[]");
//   const unique = Array.from(new Set([...olddata, ...allinstalled]));
//   const cleandata = unique.filter(item => !current.includes(item));
//   localStorage.setItem("mainappid", JSON.stringify(cleandata));
//   const localdata = JSON.parse(localStorage.getItem("appid"))
//   setlocalinstalled(localdata)
//   console.log(localdata)
// }, [allinstalled, current]);
// localStorage.clear()


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('/apps.json').then(res => res.json()),
        path: '/',
        Component: Home
      },
      {
        path: '/appdetails/:id',
        loader: () => fetch('/apps.json').then(res => res.json()),
        element: <div className=""><Appdetails allinstalled={allinstalled} maindltarray={maindltarray} localarray={localarray} installedid={installedid}></Appdetails><ToastContainer /></div>
      },
      {
        path: '/apps',
        loader: () => fetch('/apps.json').then(res => res.json()),
        Component: Allapps
      },
      {
        path: '/installation',
        loader: () => fetch('/apps.json').then(res => res.json()),
        element: <Installation mainlocalfunc={mainlocalfunc} mainremoved={mainremoved} allinstalled={allinstalled}></Installation>
      }
    ]
  }
])