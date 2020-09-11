export interface City {
    id: number;
    name:string;
}

export interface Job {
    jobId: number;
    title: string;
    location: string;
    description?: string;
    type?: string;
    company?: string;
    salary?: number;
}

export interface AppConfig  {
    baseUrl: string,
    jobNumber: number
}

export interface AppUser {
    userId?: string,
    firstName: string,
    lastName: string,
    email: string,
    Telephone?: string,
}