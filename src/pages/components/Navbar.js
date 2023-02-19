import {Link} from 'react-router-dom';
import React, { useState }  from 'react';

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState([]);
    const selectd=props.selected;
    return (
        <>
        <body style={{zIndex: '2' }} class="sticky top-0 antialiased text-slate-500 dark:text-slate-400 dark:bg-slate-900 mt-0">
            <nav className="bg-gray-300 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-90/[0.06] bg-white/70 supports-backdrop-blur:bg-white/95 dark:bg-transparent">
            <div className="container flex flex-wrap justify-between items-center mx-auto max-w-8xl">
                <Link to="/" className="flex items-center">
                    <span className="ml-5 self-center text-xl font-semibold whitespace-nowrap dark:text-white">SkillVault</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={
                        "justify-between items-center   w-full md:flex md:w-auto md:order-1" +
                        (!navbarOpen ? "" : " hidden")
                    } id="navbar-default">
                <ul className={"flex flex-col p-2 mt-4 mr-5 bg-slate-0 md:flex-row md:space-x-8 md:mt-0"}>
                        <li>
                            <Link to="/" className={((selectd==='home')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Home</Link>
                        </li>
                        <li>
                            <Link to="/course" className={((selectd==='course')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black   md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Courses</Link>
                        </li>
                        <li>
                            <Link to="/blog" className={((selectd==='blog')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Blogs</Link>
                        </li>
                        <li>
                            <Link to="/about" className={((selectd==='about')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={((selectd==='contact')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black   md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Contact</Link>
                        </li>
                        </ul>
                </div>
            </div>
            </nav>
            </body>
        </>
    );
}