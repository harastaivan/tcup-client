import { AppState } from '../types'
import { AuthState } from './types'

export const getAuth = (state: AppState): AuthState => state.auth

export const getIsAdmin = (state: AppState): boolean => state.auth.isAdmin

export const getToken = (state: AppState): string | null => state.auth.token
