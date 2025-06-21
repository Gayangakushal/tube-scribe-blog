
import { Menu, Headphones, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FergandoHeader = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Podcast", path: "/podcast" },
    { name: "Blog", path: "/blog" },
    { name: "Videos", path: "/videos" },
    { name: "Clothes", path: "/clothes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'edo SZ, serif' }}>
                Fergando
              </h1>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`font-medium transition-colors relative group ${
                  location.pathname === item.path 
                    ? "text-white" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/podcast"
              className="bg-black border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium flex items-center space-x-2"
            >
              <Headphones className="h-4 w-4" />
              <span>Listen Now</span>
            </Link>
            <button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FergandoHeader;
