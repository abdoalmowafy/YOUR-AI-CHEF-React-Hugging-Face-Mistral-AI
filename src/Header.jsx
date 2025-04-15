import logo from './assets/logo.png'

export default function Header() {
    return (
        <header className="nav-bar">
            <h1 className="nav-title">YOUR AI CHEF</h1>
            <img src={logo} alt="logo" className="nav-logo" />
        </header>
    );
}