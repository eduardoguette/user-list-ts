import { Item } from '@/intefaces'
import { getList } from '@/services/getList'
import { useEffect, useState } from 'react'

export const useGetList = () => {
  const [numberPage, setNumberPage] = useState<number>(1)
  const [list, setList] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getList(numberPage).then((data) => {
      setLoading(false)
      setList(data)
    })
  }, [numberPage])

  const handleNextPage = () => {
    setNumberPage(numberPage + 1)
  }
  const handlePrevPage = () => {
    setNumberPage(numberPage - 1)
  }

  return {
    numberPage,
    loading,
    list,
    handleNextPage,
    handlePrevPage,
  }
}
