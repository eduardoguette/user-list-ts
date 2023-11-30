import { login } from '@/services/login'
import { useStoreApp } from '@/store'
import { Button, Card, TextInput } from '@tremor/react'
import toast from 'react-hot-toast'
export const Login = () => {
  const setIsAuth = useStoreApp((state) => state.setIsAuth)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string
    const token = await login({
      email: email,
      password: password
    })
    toast.success('Login success')
    if (token) {
      setIsAuth({ token: token })
    }
  }
  return (
    <Card className="w-[400px] absolute inset-0 h-max m-auto">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p className="text-gray-700">Email</p>
          <TextInput
            name="email"
            placeholder="Email"
            defaultValue="eve.holt@reqres.in"
          />
        </label>
        <label htmlFor="">
          <p className="text-gray-700">Password</p>
          <TextInput
            name="password"
            placeholder="Password"
            defaultValue="cityslicka"
          />
        </label>
        <Button>Login</Button>
      </form>
    </Card>
  )
}
