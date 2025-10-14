import { Link, useLoaderData } from "react-router"
import Banner from "../../components/Banner/Banner"
import Apps from "../Apps/Apps"

const Home = () => {
  const appdatas = useLoaderData()
  return (
    <div>
      <Banner className='my-10'></Banner>
      <Apps appdatas={appdatas}></Apps>
      <div className=" my-10 flex justify-center items-center"><Link className="btn bg-green-400" to={'/apps'}>show all</Link></div>
    </div>
  )
}

export default Home