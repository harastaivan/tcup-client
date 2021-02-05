import { AuthState } from "./auth/types";
import { ErrorState } from "./error/types";
import { SuccessState } from "./success/types";

export type AppState = {
    auth: AuthState
    error: ErrorState
    success: SuccessState
}