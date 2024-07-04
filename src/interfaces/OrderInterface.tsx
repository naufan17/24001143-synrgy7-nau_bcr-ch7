interface Car {
    manufacture: string;
    model: string;
    type: string;
}

interface User {
    name: string;
    email: string;
    address: string;
    phone_number: string;
}

interface Order {
    id: string;
    durations: number;
    rent_start: string;
    rent_end: string;
    total_price: number;
    status: string;
    created_at: string;
    updated_at: string;
    car: Car;
    user: User;
}

export type { Order };