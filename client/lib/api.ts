import { Job, ApplicationFormData, ContactFormData, ApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Fetch all jobs
export async function fetchJobs(): Promise<Job[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`);
        const result: ApiResponse<Job[]> = await response.json();

        if (result.success && result.data) {
            return result.data;
        }
        throw new Error(result.message || 'Failed to fetch jobs');
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
}

// Submit job application
export async function submitApplication(data: ApplicationFormData): Promise<ApiResponse<any>> {
    try {
        const response = await fetch(`${API_BASE_URL}/applications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result: ApiResponse<any> = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting application:', error);
        throw error;
    }
}

// Submit contact message
export async function submitContactMessage(data: ContactFormData): Promise<ApiResponse<any>> {
    try {
        const response = await fetch(`${API_BASE_URL}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result: ApiResponse<any> = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting message:', error);
        throw error;
    }
}
