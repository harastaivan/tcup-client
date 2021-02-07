import { User } from '../auth/types'

export type NewsId = string

export type News = {
    _id: NewsId
    title: string
    body: string
    author: User
    updatedAt: Date
}

export type NewsState = {
    news: News[]
    loading: boolean
}
