import { ArrowRight, Recycle, MapPin, Clock, Phone } from 'lucide-react' // 1. Added Icons
import { fetchPriceData } from '@/lib/data'
import PriceCalculator from '@/components/PriceCalculator'
import { CaraKerjaSection } from '@/components/CaraKerjaSection'

export const revalidate = 3600 // Revalidate every 1 hour (ISR)

export default async function HomePage() {
  const priceData = await fetchPriceData()

  return (
    <div className="min-h-screen bg-mesh">
      {/* Header - Modern Floating Pill Design */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-slide-down">
        <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md border border-white/50 shadow-lg shadow-slate-200/20 rounded-full px-2 py-2 transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:shadow-slate-200/30">
          <div className="flex items-center justify-between pl-4 pr-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent tracking-tight">
                SStore
              </span>
            </div>

            {/* 2. Updated Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: 'Cara Kerja', href: '#cara-kerja' },
                { label: 'Cek Harga', href: '#calculator' },
                { label: 'Lokasi Store', href: '#lokasi-store' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 text-sm font-medium text-slate-900 rounded-full hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span className="hidden sm:inline">Kontak</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-200 tracking-wide">Platform Jual HP #1 di Indonesia</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8">
              Ubah HP Lama <br />
              Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 font-bold">Uang Tunai</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Dapatkan penawaran harga terbaik untuk HP bekas kamu hari ini.
              Proses <span className="text-blue-400 font-semibold">cepat</span>,
              <span className="text-blue-400 font-semibold"> aman</span>, dan
              <span className="text-blue-400 font-semibold"> langsung cair</span> ke rekeningmu.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calculator"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.02]"
              >
                Cek Harga Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl backdrop-blur-sm transition-all"
              >
                Cara Kerja
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Bento Grid */}
      <CaraKerjaSection />

      {/* Price Calculator Section */}
      <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Cek Harga HP Kamu
            </h2>
            <p className="text-lg text-slate-600">
              Pilih detail HP untuk melihat estimasi harga jual
            </p>
          </div>

          <PriceCalculator priceData={priceData} />
        </div>
      </section>


      <section id="lokasi-store" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Kunjungi Store Kami
            </h2>
            <p className="text-lg text-slate-600">
              Ingin transaksi langsung? Datang ke lokasi offline store kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Alamat Store</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Jl. Telekomunikasi No. 1<br />
                      Terusan Buahbatu - Bojongsoang,<br />
                      Sukapura, Kec. Dayeuhkolot,<br />
                      Kabupaten Bandung, Jawa Barat 40257
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Jam Operasional</h3>
                    <p className="text-slate-600">Senin - Minggu</p>
                    <p className="text-slate-900 font-medium">09.00 - 21.00 WIB</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Hubungi Kami</h3>
                    <p className="text-slate-600">WhatsApp & Telepon</p>
                    <a href="https://wa.me/6281234567890" className="text-blue-600 font-medium hover:underline">
                      0812-3456-7890
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://goo.gl/maps/placeholder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
           <div className="bg-slate-200 rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-full min-h-[400px] relative">

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.307454332909!2d107.6608144!3d-6.973007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sTelkom%20University!5e0!3m2!1sen!2sid!4v1689567891234!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-lg text-slate-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Bagaimana cara mengetahui harga HP saya?',
                a: 'Cukup pilih merk, model, dan varian HP kamu di kalkulator harga di atas. Estimasi harga akan langsung muncul.',
              },
              {
                q: 'Berapa lama proses penjualan?',
                a: 'Proses biasanya selesai dalam 24 jam setelah kami menerima HP dan melakukan pengecekan kondisi.',
              },
              {
                q: 'Apakah ada biaya penjemputan?',
                a: 'Tidak! Layanan penjemputan gratis untuk area yang kami cover. Hubungi kami untuk info lebih lanjut.',
              },
              {
                q: 'Bagaimana jika HP saya rusak?',
                a: 'Kami tetap menerima HP dengan kondisi rusak. Harga akan disesuaikan berdasarkan tingkat kerusakan.',
              },
              {
                q: 'Metode pembayaran apa yang tersedia?',
                a: 'Kami mendukung transfer bank (BCA, Mandiri, BNI, BRI) dan e-wallet (GoPay, OVO, DANA).',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 p-2 rounded-lg bg-slate-100 group-open:bg-blue-100 transition-colors">
                    <svg
                      className="w-4 h-4 text-slate-500 group-open:text-blue-600 group-open:rotate-180 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold">SStore</span>
              </div>
              <p className="text-slate-400">
                Platform jual beli HP bekas terpercaya dengan harga terbaik dan proses tercepat.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tautan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">Cek Harga</a></li>
                <li><a href="#lokasi-store" className="hover:text-white transition-colors">Lokasi Store</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li>WhatsApp: 0812-3456-7890</li>
                <li>Email: hello@sstore.id</li>
                <li>Jam Operasional: 09.00 - 21.00 WIB</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} SStore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
