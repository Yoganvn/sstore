'use client'

import { useEffect, useRef } from 'react'
import { X, CheckCircle, MessageCircle, PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { formatPrice, formatWhatsAppNumber } from '@/lib/utils'

interface SuccessModalProps {
    isOpen: boolean
    onClose: () => void
    nama: string
    deviceName: string
    estimatedPrice: number
    whatsapp: string
}

export default function SuccessModal({
    isOpen,
    onClose,
    nama,
    deviceName,
    estimatedPrice,
    whatsapp,
}: SuccessModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    // Close on backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    if (!isOpen) return null

    const adminWhatsApp = '6281234567890' // Replace with actual admin number
    const message = `Halo, saya ${nama}. Saya ingin menjual ${deviceName} dengan estimasi harga ${formatPrice(estimatedPrice)}. Nomor WA saya: ${whatsapp}`
    const whatsappLink = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up"
            >
                {/* Header with success animation */}
                <div className="relative bg-gradient-to-br from-blue-500 to-sky-600 px-6 py-8 text-center overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="relative">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 animate-bounce-slow">
                            <CheckCircle className="w-12 h-12 text-blue-500" />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white mb-2">
                            <PartyPopper className="w-6 h-6" />
                            <h2 className="text-2xl font-bold">Berhasil!</h2>
                            <PartyPopper className="w-6 h-6 scale-x-[-1]" />
                        </div>
                        <p className="text-blue-100">Permintaan penjualan kamu sudah kami terima</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="text-center">
                        <p className="text-lg text-slate-700">
                            Terima kasih <span className="font-semibold text-slate-900">{nama}</span>!
                        </p>
                        <p className="text-slate-600 mt-1">
                            Admin kami akan segera menghubungi kamu via WhatsApp untuk proses selanjutnya.
                        </p>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 bg-slate-50 rounded-xl space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 text-sm">
                            <span className="text-slate-500 font-medium whitespace-nowrap">Device</span>
                            <span className="font-bold text-slate-900 text-left sm:text-right break-words">{deviceName}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 text-sm border-t border-slate-200/60 pt-2 sm:border-0 sm:pt-0">
                            <span className="text-slate-500 font-medium whitespace-nowrap">Estimasi Harga</span>
                            <span className="font-bold text-blue-600 text-lg sm:text-base text-left sm:text-right">{formatPrice(estimatedPrice)}</span>
                        </div>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] focus:ring-[#25D366]" size="lg">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat Admin via WhatsApp
                        </Button>
                    </a>

                    <button
                        onClick={onClose}
                        className="w-full py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    )
}
