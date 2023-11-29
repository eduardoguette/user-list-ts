import { useEffect, useState } from 'react'
import { Item } from '../intefaces'
import { getList } from '../services/getList'

export const useGetList = () => {
  const [list, setList] = useState<Item[]>([])
  useEffect(() => {
    getList().then((data) => {
      setList(data)
    })
  }, [])
  return {
    list
  }
}
