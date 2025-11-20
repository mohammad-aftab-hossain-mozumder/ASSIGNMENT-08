import { useEffect, useState } from 'react'
import Singleinst from '../../components/Singleinst/Singleinst'
import { useLoaderData } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Installation = ({ allinstalled, mainremoved, mainlocalfunc }) => {
  const [localinstalled, setlocalinstalled] = useState([])
  const allappsdatas = useLoaderData()

  mainlocalfunc(localinstalled)

  const [currentinstalled, setinstalled] = useState([...allinstalled])
  const [current, set] = useState([])

  const remove = (y) => {
    mainremoved(y)
    toast('Uninstalled')
    const removedList = [...current, y]
    set(removedList)
    setinstalled(currentinstalled.filter(item => !removedList.includes(item)))
  }

  useEffect(() => {
    const olddata = JSON.parse(localStorage.getItem("appid") || "[]")
    const merged = Array.from(new Set([...olddata, ...allinstalled]))
    const clean = merged.filter(item => !current.includes(item))
    localStorage.setItem("appid", JSON.stringify(clean))
    const localdata = JSON.parse(localStorage.getItem("appid"))
    setlocalinstalled(localdata)
  }, [allinstalled, current])

  const [currentsort, setsort] = useState([...allappsdatas])

  const handlesort = (type) => {
    const sorted = [...allappsdatas]
    if (type === 'ltoh') sorted.sort((a, b) => a.size - b.size)
    if (type === 'htol') sorted.sort((a, b) => b.size - a.size)
    setsort(sorted)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">

      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Your Installed Apps
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Manage and explore all apps you've installed
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center my-10 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all">
        <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Total Installed: <span className="text-indigo-600 dark:text-indigo-400">{localinstalled.length}</span>
        </div>

        <details className="dropdown">
          <summary className="btn bg-indigo-100 dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 font-semibold border-none rounded-xl shadow-sm hover:shadow-md transition-all">
            Sort By Size
          </summary>

          <ul className="menu dropdown-content bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 z-10 w-48 p-2">
            <li>
              <a className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-2" onClick={() => handlesort('ltoh')}>
                Low to High
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-2 whitespace-nowrap" onClick={() => handlesort('htol')}>
                High to Low
              </a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex flex-col gap-6 my-10">
        {currentsort.map(app =>
          localinstalled.includes(app.id) && (
            <Singleinst key={app.id} remove={remove} singledata={app} />
          )
        )}
      </div>

      <ToastContainer theme="dark" />
    </div>
  )
}

export default Installation