export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50">

            {/* Logo Pulse */}
            <div className="flex flex-col items-center gap-4">

                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 animate-ping absolute"></div>
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        QH
                    </div>
                </div>

                {/* Brand */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">
                    Qurbani <span className="text-green-600">Hat</span>
                </h1>

                <p className="text-gray-500 text-sm sm:text-base">
                    Preparing best livestock marketplace...
                </p>

                {/* Loader Bars */}
                <div className="flex gap-2 mt-4">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-3 h-3 bg-green-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-3 h-3 bg-green-700 rounded-full animate-bounce"></span>
                </div>
            </div>

            {/* Skeleton Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 w-full max-w-5xl">
                {[1,2,3].map((item) => (
                    <div
                        key={item}
                        className="h-40 bg-white rounded-xl shadow-md p-4 animate-pulse border border-gray-100"
                    >
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                ))}
            </div>

        </div>
    );
}