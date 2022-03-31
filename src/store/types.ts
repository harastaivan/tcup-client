import type { AuthState } from './auth/types'
import type { NewsState } from './news/types'

export type AppState = {
    auth: AuthState
    news: NewsState
}
