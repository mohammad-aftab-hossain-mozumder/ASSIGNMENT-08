import { useEffect, useState } from 'react'
import downloadpic from '../../assets/icon-downloads.png'
import starpic from '../../assets/icon-ratings.png'

const Singleinst = ({singledata, remove}) => {
    
  return (
    <div className='flex justify-between items-center'>
        <div className="flex">
            <img className='size-25' src={singledata.image} alt="" />
            <div className="">
                <h1>{singledata.title}</h1>
                <div className="flex gap-5">
                    <div className="">
                        <img className='size-5' src={downloadpic} alt="" />
                        <h1></h1>
                    </div>
                    <div className="">
                        <img className='size-5' src={starpic} alt="" />
                        <h1></h1>
                    </div>
                    <div className="">
                        <h1>{singledata.size}MB</h1>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={()=>{remove(singledata.id)}} className='btn'>Uninstall</button>
    </div>
  )
}

export default Singleinst