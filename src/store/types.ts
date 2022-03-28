import type { AuthState } from './auth/types'
import type { ErrorState } from './error/types'
import type { NewsState } from './news/types'
import type { SuccessState } from './success/types'

export type AppState = {
    auth: AuthState
    error: ErrorState
    news: NewsState
    success: SuccessState
}
