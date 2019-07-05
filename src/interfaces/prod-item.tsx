import { ShoeColor } from './shoe-color'
import { Category } from './category'
import { Brand } from './brand'

export interface IProdItem {
  category: Category
  brand: Brand
  name: string
  slug: string
  price: number
  description: string
  shoeColors: ShoeColor[]
  salesCount: number
}
