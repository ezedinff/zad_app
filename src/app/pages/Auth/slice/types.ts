/* --- STATE --- */
export interface User {
    firstName: string;
    lastName: string;
    username: string;
    role: string;
}

export interface AuthState {
    loading: boolean;
    user: User | null;
}
