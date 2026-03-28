import { Link } from "react-router-dom"
import "./Navbar.scss"
import logo from "../../components/img/logo.jpg"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
 const changeLanguage = () => {
    const currentLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(currentLang);
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__nav-logo">
            <img src={logo} alt="" />
          </div>
          <ul className="header__nav-list">
            <li className="header__nav-list_item">
              <Link to="/" className="header__nav-list_item-link">{t("home")}</Link>
            </li>
            <li className="header__nav-list_item">
              <Link to="/Projects" className="header__nav-list_item-link">{t("projetcs")}</Link>
            </li>
            <li className="header__nav-list_item">
              <Link to="/Skills" className="header__nav-list_item-link">{t("skills")}</Link>
            </li>
            <li className="header__nav-list_item">
              <Link to="/Contact" className="header__nav-list_item-link">{t("contact")}</Link>
            </li>
          </ul>
          <button className="header__nav-btn" onClick={() => changeLanguage()}>
            {i18n.language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar