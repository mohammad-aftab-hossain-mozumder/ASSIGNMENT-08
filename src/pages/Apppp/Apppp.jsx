import { Link } from 'react-router'
import downloadpic from '../../assets/icon-downloads.png'
import starpic from '../../assets/icon-ratings.png'

const Apppp = ({ appdata }) => {
    return (
        <Link to={`/appdetails/${appdata.id}`}>
            <div>
                <div className="card bg-white w-75 shadow-sm">
                    <figure>
                        <img
                            className='size-40'
                            src={appdata.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">
                            {appdata.title}
                        </h2>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline"><img className='size-4' src={downloadpic} alt="" /><span className='text-black'>{appdata.downloads}</span></div>
                            <div className="badge badge-outline"><img className='size-4' src={starpic} alt="" /><span className='text-black'>{appdata.ratingAvg}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Apppp