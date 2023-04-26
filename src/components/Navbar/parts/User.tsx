
const User = (
  { userName, userEmail, userPfp }: {
    userName: string, userEmail: string, userPfp: string
  }
) => {
  return (
    <div className='user'>
      <img className='userPfp' src={userPfp} alt="profile picture" />
      <div className="userInfo">
        <span className="userName">{userName}</span>
        <span className="userEmail">{userEmail}</span>
      </div>
      <img src="./src/assets/navbar/chevronDown.svg" alt="dropdown menu" />
    </div>
  )
}

export default User