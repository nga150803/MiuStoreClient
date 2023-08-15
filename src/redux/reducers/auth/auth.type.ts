export type AuthState = {
  access_token: string
  refresh_token: string
  account: User
}

export type User = {
  username: string
  email: string
  phoneNumber: string
  avatar: string
  address: string
  role: string
  _id: string
}

export type PayloadRegisterUser = {
  username: string
  email: string
  authentication: {
    password: string
  }
}

export type PayloadLoginUser = {
  email: string
  password: string
}

export type PayloadUpdateUser = {
  _id: string
  username: string
  phoneNumber: string
  address: string
  avatar: string
}
