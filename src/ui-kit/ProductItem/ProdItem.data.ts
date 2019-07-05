import prodImgColor1Style1 from 'assets/img/color1/prod_item1-color1-style1.jpg'
import prodImgColor1Style2 from 'assets/img/color1/prod_item1-color1-style2.jpg'
import prodImgColor1Style3 from 'assets/img/color1/prod_item1-color1-style3.jpg'
import prodImgColor1Style4 from 'assets/img/color1/prod_item1-color1-style4.jpg'
import prodImgColor2Style1 from 'assets/img/color2/prod_item1-color2-style1.jpg'
import prodImgColor2Style2 from 'assets/img/color2/prod_item1-color2-style2.jpg'
import prodImgColor2Style3 from 'assets/img/color2/prod_item1-color2-style3.jpg'
import prodImgColor2Style4 from 'assets/img/color2/prod_item1-color2-style4.jpg'

export const prodItemData = {
  brand: {
    name: 'nike',
    slug: 'nike',
  },
  category: {
    name: 'sport shoes',
    slug: 'sport-shoes',
    children: [],
  },
  description: 'lorem ipsum',
  slug: 'ultraboost-st-shoes',
  salesCount: 1,
  name: 'ULTRABOOST ST SHOES',
  price: 299,
  shoeColors: [
    {
      name: 'red',
      images: [
        { sm: prodImgColor1Style1, md: prodImgColor1Style1 },
        { sm: prodImgColor1Style2, md: prodImgColor1Style2 },
        { sm: prodImgColor1Style3, md: prodImgColor1Style3 },
        { sm: prodImgColor1Style4, md: prodImgColor1Style4 },
      ],
    },
    {
      name: 'yellow',
      images: [
        { sm: prodImgColor2Style1, md: prodImgColor2Style1 },
        { sm: prodImgColor2Style2, md: prodImgColor2Style2 },
        { sm: prodImgColor2Style3, md: prodImgColor2Style3 },
        { sm: prodImgColor2Style4, md: prodImgColor2Style4 },
      ],
    },
    {
      name: 'green',
      images: [
        { sm: prodImgColor1Style1, md: prodImgColor1Style1 },
        { sm: prodImgColor1Style2, md: prodImgColor1Style2 },
        { sm: prodImgColor1Style3, md: prodImgColor1Style3 },
        { sm: prodImgColor1Style4, md: prodImgColor1Style4 },
      ],
    },
    {
      name: 'blue',
      images: [
        { sm: prodImgColor2Style1, md: prodImgColor2Style1 },
        { sm: prodImgColor2Style2, md: prodImgColor2Style2 },
        { sm: prodImgColor2Style3, md: prodImgColor2Style3 },
        { sm: prodImgColor2Style4, md: prodImgColor2Style4 },
      ],
    },
  ],
}
