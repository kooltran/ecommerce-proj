import { ShoeColor } from './shoe-color'

export interface IProdItem {
    name: string;
    price: string;
    shoeColors: ShoeColor[]
}