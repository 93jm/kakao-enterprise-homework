export interface BoardItem {
  id: number
  title: string
  user: {
    login: string
  }
  created_at: string
  number: number
}
