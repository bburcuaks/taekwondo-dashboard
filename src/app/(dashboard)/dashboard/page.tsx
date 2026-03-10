import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Welcome back, {session.user?.name || session.user?.email}!</h2>
                <p className="text-gray-600">
                    This page is protected and can only be seen if you are logged in.
                    Your role is <strong>{
                        // @ts-ignore
                        session.user?.role || "user"
                    }</strong>.
                </p>
            </div>
        </div>
    );
}
