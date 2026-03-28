import { useTranslation } from "react-i18next"
import "./Footer.scss"

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="container">
                <p className="footer__ownership">&copy; {t("ownership")}</p>
            </div>
        </div>
    )
}

export default Footer