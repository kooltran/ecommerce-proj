import { IProdItem } from 'interfaces/prod-item'

export interface IHomepage {
  data: [IProdItem]
  homepageAction: () => void
}