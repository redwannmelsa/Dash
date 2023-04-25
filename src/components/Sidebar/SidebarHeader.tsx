
const SidebarHeader = (
  { collapseSidebar }: { collapseSidebar: any }
) => {

  return (
    <div className="sidebarHeader">
      <img src={'./src/assets/sidebar/dashLogo.svg'} alt="Dash logo" />
      <h1>Dash</h1>
      <img onClick={collapseSidebar} className="collapse" src={'./src/assets/sidebar/collapseSidebar.svg'} alt="" />
    </div>
  )
}

export default SidebarHeader