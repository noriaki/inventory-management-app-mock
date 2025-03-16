export interface Product {
  id: number
  name: string
  unopenedCount: number
  openedCount: number
  image: string | null
}

export interface Category {
  id: number
  name: string
  products: Product[]
}

