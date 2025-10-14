import { useEffect, useState } from 'react'
import Singleinst from '../../components/Singleinst/Singleinst'
import { useLoaderData } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = ({ allinstalled, mainremoved, mainlocalfunc }) => {

  const [localinstalled, setlocalinstalled] = useState([])
  // localStorage.clear()
  const allappsdatas = useLoaderData()

  mainlocalfunc(localinstalled)

  const [currentinstalled, setinstalled] = useState([...allinstalled])
  const [current, set] = useState([])
  const remove = (y) => {

    mainremoved(y)
    toast('uninstalled')
    const allremoved = [...current, y]
    set(allremoved)
    setinstalled(currentinstalled.filter(installed => !allremoved.includes(installed)))
  }

  useEffect(() => {
    const olddata = JSON.parse(localStorage.getItem("appid") || "[]");
    const unique = Array.from(new Set([...olddata, ...allinstalled]));
    const cleandata = unique.filter(item => !current.includes(item));
    localStorage.setItem("appid", JSON.stringify(cleandata));
    const localdata = JSON.parse(localStorage.getItem("appid"))
    setlocalinstalled(localdata)
    console.log(localdata)
  }, [allinstalled, current]);


  const pure = allappsdatas.filter(data => !current.includes(data.id))
  const [currentsort, setsort] = useState([...allappsdatas])
  const handlesort = (type) => {
    if (type === 'ltoh') {
      const ltoharry = [...allappsdatas].sort((a, b) => a.size - b.size)
      setsort(ltoharry)
      console.log(ltoharry)
    }
    if (type === 'htol') {
      const htolarry = [...allappsdatas].sort((a, b) => b.size - a.size)
      setsort(htolarry)
      console.log(htolarry)
    }
  }

  // localStorage.setItem(12, {aftab:12, he:'he'})

  return (
    <div>
      <div className="text-center my-10">
        <h1 className='text-3xl'>Your Installed Apps</h1>
        <p className='text-xl'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between items-center my-10">
        <div className=" text-xl font-bold">
          total found {localinstalled.length}
        </div>
        <details className="dropdown">
          <summary className="btn m-1">Sort By Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-auto shadow-sm">
            <li><a onClick={() => { handlesort('ltoh') }}>Low to High</a></li>
            <li><a onClick={() => { handlesort('htol') }} className='whitespace-nowrap'>Hight to Low</a></li>
          </ul>
        </details>
      </div>
      <div className=" my-10">
        {
          currentsort.map(singledata => localinstalled.includes(singledata.id) && <Singleinst remove={remove} singledata={singledata}></Singleinst>)
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Installation