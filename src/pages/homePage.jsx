import React from "react";
import "./homePage.css"; // Add this CSS file for styling
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop solution for everything amazing!</p>
            </header>
            <main className="home-content">
                <section className="feature">
                    <h2>Sign up now</h2>
                    <button className="sign">Sign up</button>
                </section>
                <section className="feature">
                    <h2>Log in</h2>
                    {/* <button className="sign">Log in</button> */}
                    <Link className="sign" to="/login">Log in</Link>
                </section>
                <section className="feature">
                    <h2>Feature 3</h2>
                    <p>Learn more about the third feature that sets us apart.</p>
                </section>
            </main>
            <footer className="home-footer">
                <p>© 2024 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
