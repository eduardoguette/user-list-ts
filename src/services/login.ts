import { userAuth, userAuthParams } from '@/intefaces'

const URL = 'https://reqres.in/api/login'
export const login = async ({
  email,
  password
}: userAuthParams): Promise<string | null> => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data: userAuth = await response.json()
    return data.token
  } catch (error) {
    console.log(error)
    return null
  }
}
