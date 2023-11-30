import { ListItem } from '@tremor/react'
import { FC, ImgHTMLAttributes, ReactNode } from 'react'
interface Props {
  children?: ReactNode
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const ListUsers: FC<Props> & {
  ItemUser: FC<Props>
  ImageUser: FC<ImageProps>
  InfoUser: FC<Props>
  NameUser: FC<Props>
  EmailUser: FC<Props>
} = ({ children }) => {
  return <ul>{children}</ul>
}

ListUsers.ItemUser = ({ children }) => {
  return <ListItem className="flex justify-start  gap-4">{children}</ListItem>
}

ListUsers.ImageUser = (props: ImageProps) => {
  return (
    <img className="h-12 aspect-square rounded-full object-fill" {...props} />
  )
}

ListUsers.InfoUser = ({ children }) => {
  return <div>{children}</div>
}

ListUsers.NameUser = ({ children }) => {
  return <p className="text-left">{children}</p>
}

ListUsers.EmailUser = ({ children }) => {
  return <p>{children}</p>
}

export default ListUsers
