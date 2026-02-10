import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Transparent header component with navigation links.
 * 
 * Displays a fixed header at the top of the page with:
 * - Logo/home link
 * - Documentation link (external)
 * - Cookie Settings link (internal route)
 * 
 * Features glassmorphism effect with backdrop blur and semi-transparent background.
 * 
 * @component
 * @example
 * ```jsx
 * <Header />
 * ```
 */
const Header = () => {
    return (
        <header className="app-header">
            <div className="header-container">
                <Link to="/" className="header-logo">
                    Trivia Quiz
                </Link>
                <nav className="header-nav">
                    <a
                        href="https://lahoda-dmytro.github.io/trivia_quiz/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-link"
                    >
                        Docs
                    </a>
                    <Link to="/cookie-settings" className="header-link">
                        Cookie Settings
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
