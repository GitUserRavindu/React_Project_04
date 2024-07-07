import logo from '/assets/logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Troll Face" className="header-image"/>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-subtitle">React Project 04</h4>
        </header>
    )
}