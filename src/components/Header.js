import '../styles/Header.css';
import titleImg from '../Mendota_Title.svg';

export default function Header() {
    return (
        <header className="App-header">
            <img src={titleImg} alt="Mendota stylized text"/>
        </header>
    );
};