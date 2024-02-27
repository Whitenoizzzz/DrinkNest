import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Navbar></Navbar>
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet></Outlet>}
      </section>
    </div>
  )
}
export default HomeLayout
