import React from 'react'
import { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="relative bg-gray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;