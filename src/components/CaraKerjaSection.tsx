"use client"

import { Smartphone, Phone, Truck, CheckCircle, ShieldCheck, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function CaraKerjaSection() {
    return (
        <section id="cara-kerja" className="w-full py-20 lg:py-32 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-10">
                    {/* Header */}
                    <div className="flex gap-4 flex-col items-start">
                        <div>
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                                4 Langkah Mudah
                            </Badge>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tight max-w-xl font-bold text-left text-slate-900">
                                Cara <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Jual HP Kamu</span>
                            </h2>
                            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-slate-600 text-left">
                                Proses transparan dan ga pake ribet. Cuma butuh 4 langkah buat jadiin HP lamamu uang tunai.
                            </p>
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Step 1 - Large Card */}
                        <div className="bg-gradient-to-br from-blue-500 to-sky-500 rounded-3xl h-full lg:col-span-2 overflow-hidden shadow-xl shadow-blue-500/20 group hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                            <div className="flex flex-col lg:flex-row h-full min-h-[320px]">
                                {/* Content Side */}
                                <div className="flex-1 p-8 flex flex-col justify-between">
                                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 w-fit">Step 1</Badge>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl lg:text-2xl tracking-tight font-bold text-white">Cek Harga HP Kamu</h3>
                                        <p className="text-white/80 max-w-sm text-base lg:text-lg leading-relaxed">
                                            Pilih merk, model, dan kondisi HP di kalkulator harga kami. Dapatkan estimasi harga jual terbaik dalam hitungan detik!
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full text-sm text-white">
                                                <Zap className="w-4 h-4" />
                                                Instant
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full text-sm text-white">
                                                <CheckCircle className="w-4 h-4" />
                                                Gratis
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Side */}
                                <div className="flex-1 relative min-h-[200px] lg:min-h-0">
                                    <img
                                        src="/assets/cek.png"
                                        alt="Cek Harga HP Ilustrasi"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                    />
                                    {/* Blue tint overlay for color harmony */}
                                    {/* <div className="absolute inset-0 bg-blue-500/30" /> */}
                                    {/* Smooth gradient overlay for seamless blend */}
                                    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 from-0% via-blue-500/60 via-40% via-blue-500/20 to-transparent hidden lg:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 from-0% via-blue-500/60 via-50% to-transparent lg:hidden" /> */}
                                </div>
                            </div>
                        </div>

                        {/* Step 2 - Small Card */}
                        <div className="bg-white rounded-3xl aspect-square overflow-hidden flex flex-col border border-slate-100 shadow-xl shadow-slate-200/40 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {/* Image Section with Badge Overlay */}
                            <div className="relative flex-1 min-h-0">
                                <img
                                    src="/assets/deal.png"
                                    alt="Deal Harga Ilustrasi"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                                <Badge className="absolute top-4 left-4 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">Step 2</Badge>
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex flex-col gap-2">
                                <h3 className="text-xl lg:text-2xl tracking-tight font-bold text-slate-900">Deal Harga</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Admin akan hubungi kamu via WhatsApp untuk konfirmasi kondisi HP dan deal harga final.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 - Small Card */}
                        <div className="bg-white rounded-3xl aspect-square overflow-hidden flex flex-col border border-slate-100 shadow-xl shadow-slate-200/40 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {/* Image Section with Badge Overlay */}
                            <div className="relative flex-1 min-h-0">
                                <img
                                    src="/assets/barang.png"
                                    alt="Barang Dijemput Ilustrasi"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                                <Badge className="absolute top-4 left-4 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">Step 3</Badge>
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex flex-col gap-2">
                                <h3 className="text-xl lg:text-2xl tracking-tight font-bold text-slate-900">Barang Dijemput</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Kurir kami datang ke lokasi kamu untuk menjemput HP. Gratis ongkir, tanpa ribet!
                                </p>
                            </div>
                        </div>

                        {/* Step 4 - Large Card */}
                        <div className="bg-slate-900 rounded-3xl h-full lg:col-span-2 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="flex flex-col lg:flex-row h-full min-h-[320px]">
                                {/* Content Side */}
                                <div className="flex-1 p-8 flex flex-col justify-between">
                                    <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-fit">Step 4</Badge>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl lg:text-2xl tracking-tight font-bold text-white">Langsung Bayar</h3>
                                        <p className="text-slate-400 max-w-sm text-base lg:text-lg leading-relaxed">
                                            Setelah HP dicek kondisinya, uang langsung ditransfer ke rekeningmu saat itu juga. Cepat dan aman!
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white">
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                                Instant
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white">
                                                <ShieldCheck className="w-4 h-4 text-green-400" />
                                                Terpercaya
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Side */}
                                <div className="flex-1 relative min-h-[200px] lg:min-h-0">
                                    <img
                                        src="/assets/pay.png"
                                        alt="Langsung Bayar Ilustrasi"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CaraKerjaSection }
