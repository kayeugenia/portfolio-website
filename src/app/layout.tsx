import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kay Eugenia Purnama',
  description: 'An aspiring software engineer based in Singapore',
  icons: {icon: '/icon.png'},
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} text-gray-950 relative pt-28 sm:pt-30 max-w-fit mx-auto`}>
            <div className="bg-orange-50 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[65rem]"></div>
            <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
            </ActiveSectionContextProvider>
        </body>
        </html>
    )
}
