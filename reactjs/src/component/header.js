import "./main.css";
import "./scripts";
import myImage from "../img/pic.png";

function Header() {
    return (
        <header>
            <div className="user">
                <img src={myImage} alt="pic.jpg" />
                <h3 className="name">Trần Văn Đức</h3>
                <p className="post">web developer</p>
            </div>

            <nav className="navbar">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#education">education</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="/index.html">Shop</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
