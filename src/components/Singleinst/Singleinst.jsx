import { useEffect, useState } from 'react'
import downloadpic from '../../assets/icon-downloads.png'
import starpic from '../../assets/icon-ratings.png'

const Singleinst = ({ singledata, remove }) => {

    return (
        <div className='flex justify-between items-center'>
            <div className="flex justify-center items-center gap-4">
                <img className='size-25' src={singledata.image} alt="" />
                <div className="">
                    <h1 className='font-bold text-2xl mb-2'>{singledata.title}</h1>
                    <h1>{singledata.size}MB</h1>
                </div>
            </div>
            <button onClick={() => { remove(singledata.id) }} className='bg-red-600 btn'>Uninstall</button>
        </div>
    )
}

export default Singleinst