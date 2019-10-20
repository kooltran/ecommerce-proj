import { ShoeColor } from './shoe-color'

export interface IProdItem {
    id: number;
    name: string;
    price: string;
    shoeColors: ShoeColor[]
}