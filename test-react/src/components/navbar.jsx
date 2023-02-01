import React from 'react';
import { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="header" className="w-full py-1 bg-gray-200 shadow-lg border-b border-black-400">
                    <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                        <label for="menu-toggle" className="cursor-pointer md:hidden block">
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </label>


                        <div className="order-2 md:order-3 flex flex-wrap items-center justify-center mr-0 md:mr-4" id="nav-content">
                            <form action="" className="relative mx-auto w-max">
                                <input type="search" className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </form>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;