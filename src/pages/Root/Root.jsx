import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet, useNavigation } from 'react-router'
const Root = () => {

  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root