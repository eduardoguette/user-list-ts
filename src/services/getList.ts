import { UserListResponse } from '../intefaces'

export const getList = async (numberPage: number) => {
  try {
    const url = `https://reqres.in/api/users?page=${numberPage}`
    const response = await fetch(url)
    const data: UserListResponse = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
    return []
  }
}
