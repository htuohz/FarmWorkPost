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