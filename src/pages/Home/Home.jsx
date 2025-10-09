import { Link, useLoaderData } from "react-router"
import Banner from "../../components/Banner/Banner"
import Apps from "../Apps/Apps"

const Home = () => {
  const appdatas = useLoaderData()
  return (
    <div>
      <Banner className='my-10'></Banner>
      <Apps appdatas={appdatas}></Apps>
      <div className=" my-10 flex justify-center items-center"><button className="btn bg-green-400"><Link to={'/apps'}>show all</Link></button></div>
    </div>
  )
}

export default Home