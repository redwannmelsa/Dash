import { useEffect, useState } from 'react'
import { Notifications } from '../../../types/user'

const NotificationsCOmponent = (
  { notifications }: {
    notifications: Notifications
  }
) => {

  const [numberOfNotifications, setNumberOfNotifications] = useState<number>(0)

  useEffect(() => {
    let updatedNumberOfNotifs: number = 0

    Object.keys(notifications).forEach(key => {
      // @ts-ignore
      updatedNumberOfNotifs += notifications[key]
    })

    setNumberOfNotifications(updatedNumberOfNotifs)
  }, [])

  return (
    <div className='nav-notifications'>
      {
        numberOfNotifications > 0 ?
          <img src='./src/assets/navbar/navNotifications.png' alt="pending notifications" /> :
          <img src='./src/assets/navbar/navNotiications.png' alt="pending notifications" />
      }
    </div>

  )
}

export default NotificationsCOmponent