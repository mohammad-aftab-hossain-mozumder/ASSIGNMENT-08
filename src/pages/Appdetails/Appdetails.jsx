import { useLoaderData, useParams, useSearchParams } from 'react-router'
import downloadpic from '../../assets/icon-downloads.png'
import ratingpic from '../../assets/icon-ratings.png'
import reviewpic from '../../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { useEffect, useState } from 'react'

const Appdetails = ({ maindltarray, installedid, localarray, allinstalled }) => {
    const [newinstalled, setnewinstalled] = useState([])
    const [localmaindata, setlocalmaindata] = useState([])
    useEffect(() => {
        const puran = JSON.parse(localStorage.getItem("mainappid") || "[]");
        const ononno = Array.from(new Set([...puran, ...newinstalled]));
        const posti = ononno.filter(el => !maindltarray.includes(el))
        localStorage.setItem("mainappid", JSON.stringify(posti))
        const mainlocaldata = JSON.parse(localStorage.getItem("mainappid"))
        console.log('mainlocaldata', mainlocaldata)
        setlocalmaindata(mainlocaldata)
    }, [newinstalled, maindltarray])

    const { id } = useParams()
    const datas = useLoaderData()

    const inputtext = Number(id)

    if (isNaN(inputtext)) {
        return <div className="my-80 flex text-5xl justify-center items-center">App not found</div>
    }


    if (parseInt(id) > 20) {
        return <div className="my-80 flex text-5xl justify-center items-center">App not found</div>
    }
    const targetdata = datas.find(app => app.id === parseInt(id))
    const realdata = targetdata.ratings


    return (
        <div>
            <div className="flex">
                <img className='size-110' src={targetdata.image} alt="" />
                <div className="">
                    <h1>{targetdata.title}</h1>
                    <h1>Developed by <span className='text-[#632EE3]'>{targetdata.companyName}</span></h1>
                    <div className="flex gap-10">
                        <div className="">
                            <img src={downloadpic} alt="" />
                            <p>Downloads</p>
                            <h1>{targetdata.downloads}</h1>
                        </div>
                        <div className="">
                            <img src={ratingpic} alt="" />
                            <p>Average Ratings</p>
                            <h1>{targetdata.ratingAvg}</h1>
                        </div>
                        <div className="">
                            <img src={reviewpic} alt="" />
                            <p>Total Reviews</p>
                            <h1>{targetdata.reviews}</h1>
                        </div>
                    </div>
                    <button disabled={localmaindata.includes(targetdata.id) === true} onClick={() => {
                        installedid(targetdata.id)
                        setnewinstalled([targetdata.id])
                        handledisable()
                    }} className='btn'>{localmaindata.includes(targetdata.id) ? 'already installed' : 'install'} ({targetdata.size}MB)</button>
                </div>
            </div>
            <div className="mt-10 p-4 w-full">
                <h2 className="font-semibold mb-3">Ratings</h2>
                {
                    parseInt(id) <= 20 && 
                    <BarChart width={1200} height={250} data={[...realdata].reverse()} layout="vertical">
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Bar dataKey="count" fill="orange" />
                    </BarChart>
                }
            </div>
            <div className="">
                <h1>Description</h1>
                <p>{targetdata.description}</p>
            </div>

        </div>
    )
}

export default Appdetails