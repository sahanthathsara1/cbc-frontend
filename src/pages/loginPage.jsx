import "./loginPage.css"; // Make sure to add this CSS file for styling

export default function LoginPage() {
    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <form className="login-form">
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button className="login-btn">Login</button>
            </form>
        </div>
    );
}
