import { useLoaderData, useParams } from 'react-router'
import downloadpic from '../../assets/icon-downloads.png'
import ratingpic from '../../assets/icon-ratings.png'
import reviewpic from '../../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { useEffect, useState } from 'react'

const Appdetails = ({ maindltarray, installedid }) => {
  const [newinstalled, setnewinstalled] = useState([])
  const [localmaindata, setlocalmaindata] = useState([])

  useEffect(() => {
    const old = JSON.parse(localStorage.getItem("mainappid") || "[]")
    const merged = Array.from(new Set([...old, ...newinstalled]))
    const filtered = merged.filter(el => !maindltarray.includes(el))
    localStorage.setItem("mainappid", JSON.stringify(filtered))
    const mainlocaldata = JSON.parse(localStorage.getItem("mainappid"))
    setlocalmaindata(mainlocaldata)
  }, [newinstalled, maindltarray])

  const { id } = useParams()
  const datas = useLoaderData()
  const inputId = Number(id)

  if (isNaN(inputId) || inputId > 20) {
    return <div className="my-40 text-5xl flex justify-center text-gray-700 font-bold">App not found</div>
  }

  const targetdata = datas.find(app => app.id === inputId)
  const realdata = targetdata.ratings

  return (
    <div className="max-w-6xl mx-auto my-15">
      {/* Top Section */}
      <div className="flex gap-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <img className="w-48 h-48 rounded-2xl object-cover" src={targetdata.image} alt="" />

        <div className="flex flex-col justify-between py-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{targetdata.title}</h1>
            <h1 className="text-lg text-gray-700">Developed by <span className="text-[#632EE3] font-semibold">{targetdata.companyName}</span></h1>

            <div className="flex gap-10 mt-5">
              <div className="flex flex-col items-center bg-gray-50 p-4 rounded-2xl shadow-sm">
                <img className="w-8" src={downloadpic} alt="" />
                <p className="text-sm text-gray-600 mt-1">Downloads</p>
                <h1 className="text-xl text-gray-600 font-bold">{targetdata.downloads}</h1>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-4 rounded-2xl shadow-sm">
                <img className="w-8" src={ratingpic} alt="" />
                <p className="text-sm text-gray-600 mt-1">Average Rating</p>
                <h1 className="text-xl text-gray-600 font-bold">{targetdata.ratingAvg}</h1>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-4 rounded-2xl shadow-sm">
                <img className="w-8" src={reviewpic} alt="" />
                <p className="text-sm text-gray-600 mt-1">Total Reviews</p>
                <h1 className="text-xl text-gray-600 font-bold">{targetdata.reviews}</h1>
              </div>
            </div>
          </div>

          <button
            disabled={localmaindata.includes(targetdata.id)}
            onClick={() => {
              installedid(targetdata.id)
              setnewinstalled([targetdata.id])
            }}
            className={`px-8 py-3 mt-6 text-white rounded-2xl text-lg font-semibold shadow-md transition-all duration-200 ${localmaindata.includes(targetdata.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4538ac] hover:bg-[#372d91]'}`}
          >
            {localmaindata.includes(targetdata.id) ? 'Already Installed' : 'Install'} ({targetdata.size}MB)
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-12 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ratings Overview</h2>
        <BarChart width={1200} height={300} data={[...realdata].reverse()} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="count" fill="orange" />
        </BarChart>
      </div>

      {/* Description */}
      <div className="mt-12 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Description</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{targetdata.description}</p>
      </div>
    </div>
  )
}

export default Appdetails