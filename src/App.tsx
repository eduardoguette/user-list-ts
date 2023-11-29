import './App.css'
import { useGetList } from './hooks/useGetList'

function App() {
  const { list } = useGetList()

  return (
    <>
      <h1>Users Api</h1>
      {list.map((item) => (
        <article key={item.email}>
          <p>{item.email}</p>
        </article>
      ))}
    </>
  )
}

export default App
