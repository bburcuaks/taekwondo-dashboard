import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aksu Motion Academy",
    description: "Premium Coach Management System",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[#1a1a1a]">
            {children}
        </div>
    );
}
