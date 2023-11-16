import TagRestaurant from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagRestaurant>{children}</TagRestaurant>

export default Tag
