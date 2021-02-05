export type User = {
    id: string
    name: string
    surname: string
    email: string
    admin: boolean
}

export type AuthState = {
    token: string | null
    isAuthenticated: boolean
    isAdmin: boolean
    isLoading: boolean
    user: User | null
}
