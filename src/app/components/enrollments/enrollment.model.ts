export interface Category {
    id?: string | null;
    name: string;
    description: string;
}

export interface Student {
    id?: string;
    name: string;
    email: string;
    status: boolean | null;
    phone: string;
}

export interface Course {
    id?: string | null;
    name: string;
    description: string;
    category: Category;
}

export interface Enrollment {
    id?: string | null;
    student: {};
    course: {};
}