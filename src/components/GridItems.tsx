import ListUsers from '@/components/ListUsers'
import { Item } from '@/intefaces'
import { SearchIcon } from '@heroicons/react/outline'
import { Card, ListItem, TextInput } from '@tremor/react'
import { useState } from 'react'

interface Props {
  list: Item[]
}

export const GridItems = ({ list }: Props) => {
  const [search, setSearch] = useState<string>('')

  const filterList = list.filter((item) => {
    const fullName = `${item.first_name} ${item.last_name}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Card className="  mx-auto w-[60ch] relative mt-4">
        <h3>Your Team</h3>
        <div className="relative">
          <TextInput
            onChange={handleSearch}
            value={search}
            icon={SearchIcon}
            className="my-4"
            placeholder="Search..."
          />
        </div>
        <ListUsers>
          {filterList.map((item) => (
            <ListItem key={item.id} className="flex justify-start  gap-4">
              <ListUsers.ImageUser
                src={item.avatar}
                alt={`image profile ${item.first_name}`}
              />
              <ListUsers.InfoUser>
                <ListUsers.NameUser>
                  {item.first_name} {item.last_name}
                </ListUsers.NameUser>
                <ListUsers.EmailUser>{item.email}</ListUsers.EmailUser>
              </ListUsers.InfoUser>
            </ListItem>
          ))}
        </ListUsers>
      </Card>
    </>
  )
}
