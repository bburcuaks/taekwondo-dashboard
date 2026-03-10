"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LockKeyhole, User } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (res?.error) {
                setError("Geçersiz e-posta veya şifre kombinasyonu.");
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (err) {
            setError("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4 text-gray-200 relative overflow-hidden">
            {/* Arka plan büyük silik logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <img
                    src="/images/aksumotion.jpeg"
                    alt="Aksu Motion Logo"
                    className="w-[900px] h-[900px] object-contain opacity-10"
                />
            </div>

            {/* Arka plan ışık efektleri */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#d4af37] rounded-full blur-[120px] opacity-15"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#b39529] rounded-full blur-[120px] opacity-15"></div>
            </div>

            <div className="relative z-10 w-full max-w-[360px] bg-[#242424]/90 border border-[#d4af37]/20 rounded-2xl px-6 py-7 shadow-2xl backdrop-blur-sm">
                {/* Üstte görünen logo test */}
                <div className="flex justify-center mb-4">
                    <img
                        src="/images/aksumotion.jpeg"
                        alt="Aksu Motion Logo"
                        className="w-[100px] h-[100px] object-contain"
                    />
                </div>

                <div className="text-center mb-6">
                    <h1 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                        Sisteme Giriş
                    </h1>
                    <p className="text-xs text-gray-400">
                        Yönetim paneline erişmek için giriş yapın.
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border-l-4 border-red-500 px-3 py-2 text-xs text-red-200 rounded-r-md">
                            {error}
                        </div>
                    )}

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs font-medium text-gray-300 mb-1.5 text-center">
                                E-Posta Adresi
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <User size={16} />
                                </span>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full h-10 px-9 bg-[#141414] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-sm text-center"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-300 mb-1.5 text-center">
                                Şifre
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <LockKeyhole size={16} />
                                </span>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full h-10 px-9 bg-[#141414] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-sm text-center"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-10 flex justify-center items-center text-sm font-semibold rounded-md text-[#1a1a1a] bg-gradient-to-r from-[#d4af37] to-[#e5c55a] hover:from-[#c29d30] hover:to-[#d4af37] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <h2 className="text-sm font-medium text-[#d4af37] tracking-[0.2em]">
                        AKSU MOTION ACADEMY
                    </h2>
                    <p className="mt-1 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                        Premium Coach Management System
                    </p>
                </div>
            </div>
        </div>
    );
}