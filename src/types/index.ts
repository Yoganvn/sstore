export interface PhonePrice {
    brand: string
    model: string
    variant: string
    price: number
}

export interface SubmissionData {
    nama: string
    whatsapp: string
    device: string
    harga: number
}

export interface PriceDataResponse {
    success: boolean
    data: PhonePrice[]
    lastUpdated?: string
}
