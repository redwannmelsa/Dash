import SidebarHeader from "./SidebarHeader"
import SidebarSubMenu from "./SidebarSubMenu"
import SidebarFooter from "./SidebarFooter"
import { general, mainMenu, workspace } from "../../data/sidebar"
import './sidebar.scss'
import { useState } from "react"

function Sidebar() {

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [isOneButtonClicked, setIsOneButtonClicked] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('block')
  const [isContentHidden, setIsContentHidden] = useState<boolean>(false)

  // this function puts the different animation-related states on a timer
  // to match the animation timer
  // without this, the animation looks janky - some children will wait too long to hide and clip through the sidebar
  // there might be an easier way to do this with only CSS (?)
  const collapseSidebar = () => {
    setIsCollapsed(!isCollapsed)

    if (display === 'block') {
      setTimeout(() => {
        setDisplay('none')
      }, 295)

    } else {
      setIsContentHidden(true)
      setTimeout(() => {
        setIsContentHidden(false)
      }, 295);
      setDisplay('block')
    }
  }

  return (
    <>
      <div
        className={isCollapsed ? "sidebar slideIn" : "sidebar slideOut"}
        style={{
          display: display
        }}
      >
        {
          !isCollapsed && !isContentHidden &&
          <>
            <SidebarHeader collapseSidebar={collapseSidebar} />
            <SidebarSubMenu content={mainMenu} isOneButtonClicked={isOneButtonClicked} setIsOneButtonClicked={setIsOneButtonClicked} />
            <SidebarSubMenu content={workspace} isOneButtonClicked={isOneButtonClicked} setIsOneButtonClicked={setIsOneButtonClicked} />
            <SidebarSubMenu content={general} isOneButtonClicked={isOneButtonClicked} setIsOneButtonClicked={setIsOneButtonClicked} />
            <SidebarFooter />
          </>
        }

      </div>
      <img
        onClick={collapseSidebar}
        className="collapse"
        style={{
          display: display === 'block' ? 'none' : 'block'
        }}
        src={'./src/assets/sidebar/collapseSidebar.svg'}
        alt="collapse button" />
    </>
  )
}

export default Sidebar