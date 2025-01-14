interface Deleted {
    deleted_at?: string | null;
}

export interface CarDetail {
    id: string;
    manufacture: string;
    model: string;
    image: string;
    capacity: number;
    transmission: string;
    type: string;
    year: number;
    rent_price: number;
    delete: Deleted;
}

export interface Car {
    id: string;
    plate: string;
    manufacture: string;
    model: string;
    image: string;
    capacity: number;
    description: string;
    transmission: string;
    type: string;
    year: number;
    available: boolean;
    rent_price: number;
    option: string[];
    spec: string[];
}