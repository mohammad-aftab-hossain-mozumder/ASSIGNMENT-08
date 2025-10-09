import { Link } from 'react-router'
import downloadpic from '../../assets/icon-downloads.png'
import starpic from '../../assets/icon-ratings.png'

const Apppp = ({ appdata }) => {
    return (
        <Link to={`/appdetails/${appdata.id}`}>
            <div>
                <div className="card bg-base-100 w-75 shadow-sm">
                    <figure>
                        <img
                            className='size-40'
                            src={appdata.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {appdata.title}
                        </h2>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline"><img className='size-4' src={downloadpic} alt="" /><span>{appdata.downloads}</span></div>
                            <div className="badge badge-outline"><img className='size-4' src={starpic} alt="" /><span>{appdata.ratingAvg}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Apppp