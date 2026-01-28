export interface Job {
    id: string;
    title: string;
    description: string;
    location: string;
    type: string;
    requirements: string[];
}

export interface ApplicationFormData {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    degree: string;
    message: string;
    jobId: string;
    jobTitle: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}
