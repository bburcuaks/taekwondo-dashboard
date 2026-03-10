import Link from "next/link";
import { Users, UserPlus, Calendar, CreditCard, Award, FileText } from "lucide-react";

const navigation = [
    { name: "Dashboard", href: "/", icon: Award },
    { name: "Students", href: "/students", icon: Users },
    { name: "Groups", href: "/groups", icon: UserPlus },
    { name: "Attendance", href: "/attendance", icon: Calendar },
    { name: "Payments", href: "/payments", icon: CreditCard },
    { name: "Exams", href: "/exams", icon: FileText },
];

export function Sidebar() {
    return (
        <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
            <div className="h-16 flex items-center px-6 border-b border-gray-200">
                <span className="text-xl font-bold text-blue-600">TKD Manager</span>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600 group"
                        >
                            <Icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-600" aria-hidden="true" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
