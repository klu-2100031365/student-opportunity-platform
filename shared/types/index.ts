export type UserRole = 'student' | 'admin' | 'ambassador';

export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
    stack?: string;
}

export interface AuthResponse {
    token: string;
    user: IUser;
}
