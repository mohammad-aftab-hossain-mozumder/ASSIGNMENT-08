import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet, useNavigation } from 'react-router'
const Root = () => {
  const navigation = useNavigation()
  const isnaving = Boolean(navigation.location)
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header></Header>
      {
        isnaving&& <span className='text-6xl'>loading.......</span>
      }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root