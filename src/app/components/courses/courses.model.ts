export interface Category {
    id?: string | null;
    name: string;
    description: string;
}

export interface Course {
    id?: string | null;
    name: string;
    description: string;
    category: Category;
}
