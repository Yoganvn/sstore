import { PhonePrice } from '@/types'

// Sample price data - Replace with actual Google Apps Script fetch
export const samplePriceData: PhonePrice[] = [
    // Apple iPhones
    { brand: 'Apple', model: 'iPhone 15 Pro Max', variant: '256GB', price: 18500000 },
    { brand: 'Apple', model: 'iPhone 15 Pro Max', variant: '512GB', price: 21000000 },
    { brand: 'Apple', model: 'iPhone 15 Pro Max', variant: '1TB', price: 24000000 },
    { brand: 'Apple', model: 'iPhone 15 Pro', variant: '128GB', price: 15000000 },
    { brand: 'Apple', model: 'iPhone 15 Pro', variant: '256GB', price: 16500000 },
    { brand: 'Apple', model: 'iPhone 15 Pro', variant: '512GB', price: 19000000 },
    { brand: 'Apple', model: 'iPhone 15', variant: '128GB', price: 12000000 },
    { brand: 'Apple', model: 'iPhone 15', variant: '256GB', price: 13500000 },
    { brand: 'Apple', model: 'iPhone 14 Pro Max', variant: '128GB', price: 14000000 },
    { brand: 'Apple', model: 'iPhone 14 Pro Max', variant: '256GB', price: 15500000 },
    { brand: 'Apple', model: 'iPhone 14 Pro', variant: '128GB', price: 12000000 },
    { brand: 'Apple', model: 'iPhone 14 Pro', variant: '256GB', price: 13000000 },
    { brand: 'Apple', model: 'iPhone 14', variant: '128GB', price: 9500000 },
    { brand: 'Apple', model: 'iPhone 14', variant: '256GB', price: 10500000 },
    { brand: 'Apple', model: 'iPhone 13 Pro Max', variant: '128GB', price: 11000000 },
    { brand: 'Apple', model: 'iPhone 13 Pro Max', variant: '256GB', price: 12000000 },
    { brand: 'Apple', model: 'iPhone 13', variant: '128GB', price: 7500000 },
    { brand: 'Apple', model: 'iPhone 13', variant: '256GB', price: 8500000 },
    { brand: 'Apple', model: 'iPhone 12', variant: '64GB', price: 5500000 },
    { brand: 'Apple', model: 'iPhone 12', variant: '128GB', price: 6000000 },

    // Samsung
    { brand: 'Samsung', model: 'Galaxy S24 Ultra', variant: '256GB', price: 17000000 },
    { brand: 'Samsung', model: 'Galaxy S24 Ultra', variant: '512GB', price: 19000000 },
    { brand: 'Samsung', model: 'Galaxy S24 Ultra', variant: '1TB', price: 22000000 },
    { brand: 'Samsung', model: 'Galaxy S24+', variant: '256GB', price: 13000000 },
    { brand: 'Samsung', model: 'Galaxy S24+', variant: '512GB', price: 14500000 },
    { brand: 'Samsung', model: 'Galaxy S24', variant: '128GB', price: 9500000 },
    { brand: 'Samsung', model: 'Galaxy S24', variant: '256GB', price: 10500000 },
    { brand: 'Samsung', model: 'Galaxy S23 Ultra', variant: '256GB', price: 13000000 },
    { brand: 'Samsung', model: 'Galaxy S23 Ultra', variant: '512GB', price: 14500000 },
    { brand: 'Samsung', model: 'Galaxy Z Fold 5', variant: '256GB', price: 16000000 },
    { brand: 'Samsung', model: 'Galaxy Z Fold 5', variant: '512GB', price: 18000000 },
    { brand: 'Samsung', model: 'Galaxy Z Flip 5', variant: '256GB', price: 10000000 },
    { brand: 'Samsung', model: 'Galaxy Z Flip 5', variant: '512GB', price: 11500000 },
    { brand: 'Samsung', model: 'Galaxy A54', variant: '128GB', price: 3500000 },
    { brand: 'Samsung', model: 'Galaxy A54', variant: '256GB', price: 4000000 },

    // OPPO
    { brand: 'OPPO', model: 'Find X7 Ultra', variant: '256GB', price: 12000000 },
    { brand: 'OPPO', model: 'Find X7 Ultra', variant: '512GB', price: 14000000 },
    { brand: 'OPPO', model: 'Find X6 Pro', variant: '256GB', price: 9000000 },
    { brand: 'OPPO', model: 'Reno 11 Pro', variant: '256GB', price: 5500000 },
    { brand: 'OPPO', model: 'Reno 11 Pro', variant: '512GB', price: 6500000 },
    { brand: 'OPPO', model: 'Reno 11', variant: '256GB', price: 4000000 },
    { brand: 'OPPO', model: 'A98', variant: '128GB', price: 2500000 },
    { brand: 'OPPO', model: 'A98', variant: '256GB', price: 3000000 },

    // Xiaomi
    { brand: 'Xiaomi', model: '14 Ultra', variant: '256GB', price: 11000000 },
    { brand: 'Xiaomi', model: '14 Ultra', variant: '512GB', price: 13000000 },
    { brand: 'Xiaomi', model: '14 Pro', variant: '256GB', price: 8500000 },
    { brand: 'Xiaomi', model: '14', variant: '256GB', price: 7000000 },
    { brand: 'Xiaomi', model: '13 Ultra', variant: '256GB', price: 8000000 },
    { brand: 'Xiaomi', model: '13 Pro', variant: '256GB', price: 6500000 },
    { brand: 'Xiaomi', model: 'Redmi Note 13 Pro+', variant: '256GB', price: 3500000 },
    { brand: 'Xiaomi', model: 'Redmi Note 13 Pro', variant: '128GB', price: 2500000 },
    { brand: 'Xiaomi', model: 'POCO F5 Pro', variant: '256GB', price: 4000000 },
    { brand: 'Xiaomi', model: 'POCO F5', variant: '256GB', price: 3000000 },

    // Vivo
    { brand: 'Vivo', model: 'X100 Pro', variant: '256GB', price: 9000000 },
    { brand: 'Vivo', model: 'X100', variant: '256GB', price: 7000000 },
    { brand: 'Vivo', model: 'V30 Pro', variant: '256GB', price: 5500000 },
    { brand: 'Vivo', model: 'V30', variant: '256GB', price: 4500000 },
    { brand: 'Vivo', model: 'Y100', variant: '128GB', price: 2000000 },
]

// Google Apps Script URL - set in environment variables
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL

export async function fetchPriceData(): Promise<PhonePrice[]> {
    // If no API URL configured, return sample data
    if (!APPS_SCRIPT_URL) {
        console.log('No Apps Script URL configured, using sample data')
        return samplePriceData
    }

    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'GET',
            next: { revalidate: 3600 }, // ISR: revalidate every 1 hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch price data')
        }

        const data = await response.json()
        return data.data || samplePriceData
    } catch (error) {
        console.error('Error fetching price data:', error)
        return samplePriceData
    }
}

export async function submitOrder(data: {
    nama: string
    whatsapp: string
    device: string
    harga: number
}): Promise<{ success: boolean; message: string }> {
    if (!APPS_SCRIPT_URL) {
        // Simulate success for demo purposes
        return { success: true, message: 'Demo mode: Order recorded successfully' }
    }

    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()
        return { success: true, message: result.message || 'Order submitted successfully' }
    } catch (error) {
        console.error('Error submitting order:', error)
        return { success: false, message: 'Gagal mengirim data. Silakan coba lagi.' }
    }
}
