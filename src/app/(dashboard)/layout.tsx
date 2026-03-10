import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Taekwondo Dashboard",
    description: "Coach management dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-900">
                        <Sidebar />
                        <div className="flex-1 flex flex-col h-screen overflow-hidden">
                            <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-200">
                                <h1 className="text-xl font-semibold">Dashboard</h1>
                                <div className="flex items-center space-x-4">
                                    {/* User profile / Logout placeholder */}
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                        C
                                    </div>
                                </div>
                            </header>
                            <main className="flex-1 overflow-y-auto p-6">
                                {children}
                            </main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
