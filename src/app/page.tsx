export default function Home() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                        <p className="text-2xl font-semibold text-gray-900 mt-1">124</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500">Active Groups</h3>
                        <p className="text-2xl font-semibold text-gray-900 mt-1">8</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500">Unpaid Fees (This Month)</h3>
                        <p className="text-2xl font-semibold text-red-600 mt-1">15</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500">Upcoming Exams</h3>
                        <p className="text-2xl font-semibold text-gray-900 mt-1">2</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                <p className="text-sm text-gray-500">Dashboard functionality will be fully implemented soon.</p>
            </div>
        </div>
    );
}
