import './navbar.scss'
import { user, notifications } from '../../data/user'
import User from './parts/User'
import Searchbar from './parts/Searchbar'
import Status from './parts/Status'
import NotificationsCOmponent from './parts/Notifications'

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ display: 'flex' }}>
        <User userName={user.name} userEmail={user.email} userPfp={user.pfp} />
        <Searchbar />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Status status={user.status} contacts={user.contacts} />
        <NotificationsCOmponent notifications={notifications} />
      </div>
    </div>
  )
}

export default Navbar