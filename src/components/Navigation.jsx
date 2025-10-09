

function Navigation(prop) { 

    return (

    <nav className="bg-white rounded-2xl shadow-sm px-2 py-2 flex items-center justify-between w-[80%] mx-auto mt-8">
      <a href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
        {prop.back}
      </a>

      <div className="text-lg font-semibold text-gray-900">{prop.Type}</div>

      <a href="/signout" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
        Sign out
      </a>
      
    </nav>
    );
};


export default Navigation;