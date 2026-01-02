'use client'

import { useState } from 'react'
import { User, Phone, Send, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { submitOrder } from '@/lib/data'
import SuccessModal from './SuccessModal'

interface SubmissionFormProps {
    deviceName: string
    estimatedPrice: number
}

export default function SubmissionForm({ deviceName, estimatedPrice }: SubmissionFormProps) {
    const [nama, setNama] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [errors, setErrors] = useState<{ nama?: string; whatsapp?: string }>({})

    const validateForm = () => {
        const newErrors: { nama?: string; whatsapp?: string } = {}

        if (!nama.trim()) {
            newErrors.nama = 'Nama wajib diisi'
        } else if (nama.trim().length < 2) {
            newErrors.nama = 'Nama minimal 2 karakter'
        }

        if (!whatsapp.trim()) {
            newErrors.whatsapp = 'Nomor WhatsApp wajib diisi'
        } else if (!/^[0-9+\-\s]{10,15}$/.test(whatsapp.replace(/\s/g, ''))) {
            newErrors.whatsapp = 'Format nomor WhatsApp tidak valid'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            const result = await submitOrder({
                nama: nama.trim(),
                whatsapp: whatsapp.trim(),
                device: deviceName,
                harga: estimatedPrice,
            })

            if (result.success) {
                setShowSuccess(true)
            } else {
                setErrors({ nama: result.message })
            }
        } catch (error) {
            setErrors({ nama: 'Terjadi kesalahan. Silakan coba lagi.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false)
        setNama('')
        setWhatsapp('')
    }

    return (
        <>
            <Card className="animate-fade-in">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-xl">
                            <Send className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Ajukan Penjualan</h2>
                            <p className="text-sm text-slate-500">Isi data berikut dan admin kami akan menghubungi kamu</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Device Summary */}
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                <span>Device: <span className="font-medium text-slate-900">{deviceName}</span></span>
                            </div>
                        </div>

                        {/* Name Input */}
                        <Input
                            label="Nama Lengkap"
                            placeholder="Masukkan nama lengkap"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            error={errors.nama}
                            icon={<User className="w-5 h-5" />}
                        />

                        {/* WhatsApp Input */}
                        <Input
                            label="Nomor WhatsApp"
                            placeholder="08xxxxxxxxxx"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            error={errors.whatsapp}
                            icon={<Phone className="w-5 h-5" />}
                            type="tel"
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            isLoading={isSubmitting}
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Kirim Permintaan
                        </Button>

                        <p className="text-xs text-center text-slate-500">
                            Dengan mengirim, kamu menyetujui untuk dihubungi via WhatsApp
                        </p>
                    </form>
                </CardContent>
            </Card>

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccess}
                onClose={handleCloseSuccess}
                nama={nama}
                deviceName={deviceName}
                estimatedPrice={estimatedPrice}
                whatsapp={whatsapp}
            />
        </>
    )
}
