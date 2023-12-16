import { useState, useEffect } from 'react';



const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Agregar el listener de resize cuando el componente se monta
    window.addEventListener('resize', handleResize);
    return () => {
      // Remover el listener de resize cuando el componente se desmonta
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <nav className='opacity-95 animate-slideDown bg-slate-800 w-full fixed  flex flex-row justify-between h-[3.3rem] '>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="sm:hidden inline-flex items-center justify-center  p-2 w-10 h-9 ml-3 mt-2 mb-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded={isMenuOpen}
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } flex items-center mt-[7rem] sm:mt-0 sm:flex w-full`}
        id="navbar-hamburger"
      >
        <ul className=" bg-slate-800 divide-gray-100   sm:bg-transparent  flex flex-col sm:flex-row text-center justify-center rounded-md border-2 sm:border-none border-slate-300">
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md '>
            <button
              className='btnNav text-white font-headerFont text-[1.2rem] sm:text-3xl sm:w-48 w-24 h-8 sm:hover:text-blue-700 '
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
              }}
            >
            About Me  
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md '>
            <button
              className='btnNav text-white font-headerFont text-[1.2rem] sm:text-3xl sm:w-48 w-24 h-8 sm:hover:text-blue-700'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
              }}
            >
            Projects
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md '>
            <button
              className='btnNav text-white font-headerFont text-[1.2rem] sm:text-3xl sm:w-48 w-24 h-8 sm:hover:text-blue-700'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
              }}
            >
            Skills
            </button>
          </li>
        </ul>
      </div>

      {/* <div className="  sm:hidden md:block h-[3.5rem] w-[10.8rem] sm:w-[15rem]  rounded-b-[2rem]"> */}
      <div className={`sm:hidden md:block h-[3.5rem] w-[10.8rem] sm:w-[15rem] rounded-b-[2rem] ${isMenuOpen ? 'hidden' : 'block'}`}>

        <div className="grid grid-cols-5 gap-1 md:grid-cols-4  ">
            <a href="https://www.linkedin.com/in/guillermo-eduardo-paez-172366284/" target="_blank" rel="noopener noreferrer">
              <img className="h-[2.2rem] w-[2.2rem] mt-2  bg-white rounded-lg" src='https://via.placeholder.com/150/92c952' alt="linkedIn" />
            </a>
            <a href="mailto:zeduard89@gmail.com?subject=Te%20Contacto%20Por%20Medio%20de%20tu%20Porfolio&body=Hola%20Guillermo,%0D%0A%0D%0AEspero%20que%20te%20encuentres%20bien.%20Quisiera%20ponerme%20en%20contacto%20contigo%20para%20discutir%20oportunidades%20de%20colaboración.%0D%0A%0D%0A¡Saludos%20cordiales!">
               <img className="h-[2.2rem] w-[2.2rem] mt-[9px]  bg-white rounded-lg" src='https://via.placeholder.com/150/92c952' alt="gmail" />
            </a>
            <a href="https://github.com/zeduard89" target="_blank" rel="noopener noreferrer">
              <img className="h-[2.2rem] w-[2.2rem] mt-[9px]  bg-white rounded-lg" src='https://via.placeholder.com/150/92c952' alt="github" />
            </a>
            <a href='www.google.com' target="_blank" rel="noopener noreferrer">
              <img className="h-[2.2rem] w-[2.2rem] mt-[9px]   bg-white rounded-lg" src='https://via.placeholder.com/150/92c952' alt="cv" />
            </a>        
          </div>
      </div>          
    </nav>
  );
};

export default NavBar;