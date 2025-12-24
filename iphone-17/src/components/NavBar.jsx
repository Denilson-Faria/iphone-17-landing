export default function NavBar(){
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-center space-x-8">
                    <a href="#design" className="text-white hover:text-gray-300 transition">Design</a>
                    <a href="#camera" className="text-white hover:text-gray-300 transition">Camera</a>
                    <a href="#performance" className="text-white hover:text-gray-300 transition">Performance</a>
                    <a href="#cores" className="text-white hover:text-gray-300 transition">Cores</a>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition">
                        Comprar
                    </button>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">iPhone 17 Pro</span>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white text-sm">
                        Comprar
                    </button>
                </div>
            </div>
        </nav>
    )
}