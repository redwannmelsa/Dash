export type User = {
  name: string,
  email: string | null,
  status: string,
  pfp: string,
  contacts: Contact[]
}

export type Contact = {
  name: string,
  email: string | null,
  status: string,
  pfp: string
}

export type Notifications = {
  Dashboard: number,
  Inbox: number,
  Accounts: number,
  'Schedule Post': number,
  Communities: number,
  Analytics: number,
  'File & Folders': number,
  Settings: number
}