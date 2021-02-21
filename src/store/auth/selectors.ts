import { AppState } from '../types'
import { AuthState } from './types'

export const getAuth = (state: AppState): AuthState => state.auth

export const getIsAdmin = (state: AppState): boolean => state.auth.isAdmin