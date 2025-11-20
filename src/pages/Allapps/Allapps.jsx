import { useState } from 'react'
import { useLoaderData } from 'react-router'
import Perapp from '../../components/Perapp/Perapp'

const Allapps = () => {
    const [current, settext] = useState('')
    const loaderall = useLoaderData()
    const [recentapps, bringapps] = useState(loaderall)
    const [loading, setloading] = useState(false)
    const changed = (e) => {
        settext(e.target.value)
        setloading(true)
        setTimeout(() => {
            bringapps(loaderall.filter(every => every.title.toUpperCase().includes(e.target.value.toUpperCase())))
            setloading(false)
        }, 400)
    }

    return (
        <div className="p-5">

            <div className="text-center my-10">
                <h1 className='text-3xl'>Our All Applications</h1>
                <p className='text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="grid grid-cols-3 items-center my-10">
                <div className="font-bold text-2xl">Total Found {recentapps.length}</div>
                <input defaultValue={current} onChange={changed} className='border-2 rounded-xl p-2' type="text" placeholder='search Apps' name="" id="" />
                <div className=""></div>
            </div>
            {
                loading && <div className="text-5xl">loading.....</div>
            }
            {
                recentapps.length === 0 && <div className=" text-5xl text-center">not matching</div>
            }
            <div className='grid grid-cols-4 gap-4 my-10'>
                {
                    recentapps.map(perdata => <Perapp perdata={perdata}></Perapp>)
                }
            </div>

        </div>
    )
}

export default Allapps