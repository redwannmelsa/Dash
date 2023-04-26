import { Contact } from '../../../types/user'

const Status = (
  { status, contacts }: {
    status: string, contacts: Contact[]
  }
) => {
  return (
    <div className='status'>
      <div className="dot"></div>
      <div className='userStatus'>{status}</div>
      {contacts.map((contact, i) => (
        <div>
          <img className={'statusPfp' + ' ' + 'pfp' + i} src={contact.pfp} alt="contact profile picture" key={i} />
        </div>
      ))}
    </div>
  )
}

export default Status