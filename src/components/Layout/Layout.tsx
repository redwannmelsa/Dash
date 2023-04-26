import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout