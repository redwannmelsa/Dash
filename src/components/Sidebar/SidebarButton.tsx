import { useEffect, useState } from 'react'
import { SubMenuItem } from '../../types/sidebar'

const SidebarButton = (
  { item, isOneButtonClicked, setIsOneButtonClicked, notifications }: {
    item: SubMenuItem,
    isOneButtonClicked: boolean,
    setIsOneButtonClicked: React.Dispatch<React.SetStateAction<boolean>>,
    notifications: number
  }
) => {

  const [thisButtonClicked, setThisButtonClicked] = useState<boolean>(false)

  const handleClick = () => {
    setIsOneButtonClicked(!isOneButtonClicked)
    setTimeout(() => {
      setThisButtonClicked(true)
    }, 10);

  }

  useEffect(() => {
    thisButtonClicked && setThisButtonClicked(false)
  }, [isOneButtonClicked])


  return (
    <div
      onClick={handleClick}
      className="item"
      style={{
        backgroundColor: thisButtonClicked ? '#1B2B65' : '#081A51'
      }}
    >
      <img src={item.logo} alt={item.name} />
      <span>{item.name}</span>
      {
        notifications >= 1 &&
        <div className='notifications'>{notifications}</div>
      }

    </div>
  )
}

export default SidebarButton