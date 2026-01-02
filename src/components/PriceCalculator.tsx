'use client'

import { useState, useMemo } from 'react'
import { Smartphone, Tag, HardDrive, Calculator, Shield, ArrowLeft } from 'lucide-react'
import { PhonePrice } from '@/types'
import { formatPrice } from '@/lib/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import SubmissionForm from './SubmissionForm'

interface PriceCalculatorProps {
    priceData: PhonePrice[]
}

export default function PriceCalculator({ priceData }: PriceCalculatorProps) {
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedVariant, setSelectedVariant] = useState('')
    const [selectedGaransi, setSelectedGaransi] = useState('')

    // Warranty type options with price multipliers
    const garansiOptions = [
        { value: 'internasional', label: 'Internasional terdaftar di Bea Cukai', multiplier: 1.0 },
        { value: 'ibox', label: 'iBox', multiplier: 1.10 },
        { value: 'blibli', label: 'Blibli', multiplier: 1.08 },
        { value: 'digimap', label: 'Digimap', multiplier: 1.08 },
    ]

    // Brand to phone image mapping
    const brandImages: Record<string, string> = {
        'Apple': 'https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_16_ultramarine_01_3.jpg&w=1920&q=45',
        'Samsung': 'https://images.samsung.com/is/image/samsung/p6pim/id/2501/gallery/id-galaxy-s25-s938-sm-s938bzbbxid-thumb-544701571',
        'Xiaomi': 'https://i02.appmifile.com/images/2023/05/26/a0cf22ac-76f5-4c03-ba46-4dbb8f14e3b9.png',
        'OPPO': 'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x7-ultra/navigation/x7u-green-168x168.png',
        'Vivo': 'https://www.vivo.com/content/dam/vivo/indonesia/products/x100pro/gallery/1.png',
        'Realme': 'https://image.realme.net/general/20240508/1715147025179/669-669.png',
        'OnePlus': 'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/12/specs/green-front.png',
        'Google': 'https://lh3.googleusercontent.com/p3yKuLAqFBl_JYz5SLh6iOJMdIWy-pJwPRV-LlO-OfOWwWXHx8ZwNV4UJLzBvV-nNT4=w400-h400-rw',
        'Huawei': 'https://img.huaweicloud.com/publish/9/53/1/1/1/2023_5/1684749867167/1684749867167.png',
    }

    // Get phone image for selected brand
    const getPhoneImage = (brand: string): string | null => {
        return brandImages[brand] || null
    }

    // Get unique brands
    const brands = useMemo(() => {
        const uniqueBrands = [...new Set(priceData.map(item => item.brand))]
        return uniqueBrands.map(brand => ({ value: brand, label: brand }))
    }, [priceData])

    // Get models filtered by selected brand
    const models = useMemo(() => {
        if (!selectedBrand) return []
        const filteredModels = priceData
            .filter(item => item.brand === selectedBrand)
            .map(item => item.model)
        const uniqueModels = [...new Set(filteredModels)]
        return uniqueModels.map(model => ({ value: model, label: model }))
    }, [priceData, selectedBrand])

    // Get variants filtered by selected model
    const variants = useMemo(() => {
        if (!selectedModel) return []
        const filteredVariants = priceData
            .filter(item => item.brand === selectedBrand && item.model === selectedModel)
            .map(item => item.variant)
        const uniqueVariants = [...new Set(filteredVariants)]
        return uniqueVariants.map(variant => ({ value: variant, label: variant }))
    }, [priceData, selectedBrand, selectedModel])

    // Calculate estimated price with warranty multiplier
    const estimatedPrice = useMemo(() => {
        if (!selectedBrand || !selectedModel || !selectedVariant || !selectedGaransi) return 0
        const item = priceData.find(
            item =>
                item.brand === selectedBrand &&
                item.model === selectedModel &&
                item.variant === selectedVariant
        )
        if (!item) return 0

        const garansi = garansiOptions.find(g => g.value === selectedGaransi)
        const multiplier = garansi?.multiplier || 1.0

        return Math.round(item.price * multiplier)
    }, [priceData, selectedBrand, selectedModel, selectedVariant, selectedGaransi])

    // Calculate price range (±10%)
    const priceRange = useMemo(() => {
        if (estimatedPrice === 0) return { min: 0, max: 0 }
        const min = Math.round(estimatedPrice * 0.9)
        const max = Math.round(estimatedPrice * 1.1)
        return { min, max }
    }, [estimatedPrice])

    // Get selected garansi label
    const selectedGaransiLabel = useMemo(() => {
        const garansi = garansiOptions.find(g => g.value === selectedGaransi)
        return garansi?.label || ''
    }, [selectedGaransi])

    const deviceName = selectedBrand && selectedModel && selectedVariant
        ? `${selectedBrand} ${selectedModel} ${selectedVariant}`
        : ''

    const [showPriceResult, setShowPriceResult] = useState(false)
    const [showSubmissionForm, setShowSubmissionForm] = useState(false)

    // Handle brand change - reset dependent fields
    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBrand(e.target.value)
        setSelectedModel('')
        setSelectedVariant('')
    }

    // Handle model change - reset variant
    const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(e.target.value)
        setSelectedVariant('')
    }

    return (
        <div className="space-y-6">
            {/* Calculator Card - Centered narrow container */}
            {!showPriceResult && (
                <div className="max-w-xl mx-auto">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-xl">
                                    <Calculator className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">Kalkulator Harga</h2>
                                    <p className="text-sm text-slate-500">Pilih detail HP kamu untuk melihat estimasi harga</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {/* Brand Selection */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg mt-8">
                                    <Smartphone className="w-5 h-5 text-slate-600" />
                                </div>
                                <div className="flex-1">
                                    <Select
                                        label="Pilih Merk"
                                        options={brands}
                                        placeholder="-- Pilih Merk HP --"
                                        value={selectedBrand}
                                        onChange={handleBrandChange}
                                    />
                                </div>
                            </div>

                            {/* Model Selection */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg mt-8">
                                    <Tag className="w-5 h-5 text-slate-600" />
                                </div>
                                <div className="flex-1">
                                    <Select
                                        label="Pilih Model"
                                        options={models}
                                        placeholder="-- Pilih Model HP --"
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        disabled={!selectedBrand}
                                    />
                                </div>
                            </div>

                            {/* Variant Selection */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg mt-8">
                                    <HardDrive className="w-5 h-5 text-slate-600" />
                                </div>
                                <div className="flex-1">
                                    <Select
                                        label="Pilih Varian"
                                        options={variants}
                                        placeholder="-- Pilih Varian --"
                                        value={selectedVariant}
                                        onChange={(e) => setSelectedVariant(e.target.value)}
                                        disabled={!selectedModel}
                                    />
                                </div>
                            </div>

                            {/* Warranty Type Selection */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg mt-8">
                                    <Shield className="w-5 h-5 text-slate-600" />
                                </div>
                                <div className="flex-1">
                                    <Select
                                        label="Jenis Garansi"
                                        options={garansiOptions}
                                        placeholder="-- Pilih Jenis Garansi --"
                                        value={selectedGaransi}
                                        onChange={(e) => setSelectedGaransi(e.target.value)}
                                        disabled={!selectedVariant}
                                    />
                                </div>
                            </div>

                            {/* Show Price Button */}
                            {selectedBrand && selectedModel && selectedVariant && selectedGaransi && (
                                <div className="mt-6">
                                    <Button
                                        type="button"
                                        className="w-full"
                                        size="lg"
                                        onClick={() => setShowPriceResult(true)}
                                    >
                                        <Calculator className="w-5 h-5 mr-2" />
                                        Lihat Estimasi Harga
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Price Evaluation Result - Replaces Calculator Card */}
            {showPriceResult && estimatedPrice > 0 && (
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-600">Harga Dievaluasi!</h2>
                    </div>

                    {/* Price Card - Responsive Design */}
                    <Card className="overflow-hidden border-blue-100">
                        <CardContent className="p-0">
                            {/* Mobile: Stacked Layout, Desktop: Side by Side */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Left Side - Phone Info */}
                                <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100">
                                    <div className="flex items-center gap-4">
                                        {/* Phone Image */}
                                        <div className="w-90 h-90 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
                                            {getPhoneImage(selectedBrand) ? (
                                                <img
                                                    src={getPhoneImage(selectedBrand)!}
                                                    alt={selectedBrand}
                                                    className="w-full h-full object-contain p-2"
                                                />
                                            ) : (
                                                <Smartphone className="w-16 h-16 text-blue-400" />
                                            )}
                                        </div>

                                        {/* Phone Details */}
                                        <div className="flex flex-col space-y-2">
                                            <div>
                                                <p className="text-lg font-bold text-slate-900">{selectedBrand}</p>
                                                <p className="text-sm text-blue-600 font-medium">{selectedGaransiLabel}</p>
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-slate-800">{selectedModel}</p>
                                                <p className="text-xs text-slate-500">Jenis HP</p>
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-slate-800">{selectedVariant}</p>
                                                <p className="text-xs text-slate-500">Storage</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Price & Actions */}
                                <div className="flex flex-col items-center justify-center text-center p-6 md:p-8">
                                    <p className="text-sm text-slate-600 mb-4">
                                        Berdasarkan informasi yang Anda berikan,<br />
                                        perkiraan harga ponsel Anda saat ini adalah...
                                    </p>

                                    {/* Price Range */}
                                    <div className="mb-6">
                                        <p className="text-2xl md:text-3xl font-bold text-blue-600">
                                            {formatPrice(priceRange.min)}
                                        </p>
                                        <p className="text-base text-slate-400 font-medium">~</p>
                                        <p className="text-2xl md:text-3xl font-bold text-blue-600">
                                            {formatPrice(priceRange.max)}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-3 w-full max-w-xs">
                                        <Button
                                            type="button"
                                            className="w-full"
                                            size="lg"
                                            onClick={() => {
                                                setShowSubmissionForm(true)
                                                // Scroll to form after it renders
                                                setTimeout(() => {
                                                    document.getElementById('submission-form')?.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'center'
                                                    })
                                                }, 100)
                                            }}
                                        >
                                            Ajukan Penjualan
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full"
                                            size="lg"
                                            onClick={() => {
                                                setShowPriceResult(false)
                                                setShowSubmissionForm(false)
                                            }}
                                        >
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                            Kembali
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Submission Form - Only shows after clicking Ajukan Penjualan */}
                    {showSubmissionForm && (
                        <div id="submission-form" className="animate-fade-in">
                            <SubmissionForm
                                deviceName={deviceName}
                                estimatedPrice={estimatedPrice}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
