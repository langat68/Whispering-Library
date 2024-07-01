//import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.29 16.29l-1.41 1.41L12 13.41l-2.88 2.88-1.41-1.41L10.59 12 8.71 10.12l1.41-1.41L12 10.59l2.88-2.88 1.41 1.41L13.41 12l2.88 2.88z"></path>
                </svg>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved. Happy reading!</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="#book-collection">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                    </svg>
                </a>
                <a href="#library-events">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                        <path d="M11 10h2v5h-2zm0-3h2v2h-2z"></path>
                    </svg>
                </a>
                <a href="#contact-us">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-2-2 1-1 1 1 3-3 1 1-4 4zm4-6V9h-4v2h2v1h-2v2h2v1h-2v2h4v-2h-2v-1h2v-2h-2v-1h2z"></path>
                    </svg>
                </a>
            </nav>
        </footer>
    );
}

export default Footer;
