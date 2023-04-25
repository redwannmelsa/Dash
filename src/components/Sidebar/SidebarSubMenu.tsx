import { SubMenu } from "../../types/sidebar"
import SidebarButton from "./SidebarButton"
import { notifications } from "../../data/user"

const SidebarSubMenu = (
  { content, isOneButtonClicked, setIsOneButtonClicked }: {
    content: SubMenu,
    isOneButtonClicked: boolean,
    setIsOneButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  }
) => {

  return (
    <div className="menu">
      <h2>{content.title}</h2>
      <div className="content">
        {
          content.items.map((item, key) => (
            <SidebarButton
              key={key}
              item={item}
              isOneButtonClicked={isOneButtonClicked}
              setIsOneButtonClicked={setIsOneButtonClicked}
              // @ts-ignore
              notifications={notifications[item.name]}
            />
          ))
        }

      </div>
    </div>
  )
}

export default SidebarSubMenu