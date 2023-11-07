import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-7 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#">
                        <span className="text-xl font-bold">Quizler</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 justify-end">
                    <div className="register pr-5">
                        <p className="font-bold text-2l relative w-max one cursor-pointer">
                            <span>Register</span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-blue-400"></span>
                        </p>
                    </div>
                    <div className="login">
                        <p className="font-bold text-2l relative w-max one cursor-pointer">
                            <span>Log in</span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;