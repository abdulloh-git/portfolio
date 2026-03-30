import "./Home.scss";
import me from "../../components/img/me.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTypewriter } from "../../animation/Typewriter";

const Home = () => {
  const { t } = useTranslation();
  const slang = useTypewriter(t("slang"), 100);
  return (
    <>
      <div className="Home">
        <div className="container Home__wrapper">
          <div className="Home__desc">
            <div className="Home__desc-text">
              <h1 className="Home__desc-text_h1">{slang}</h1>
              <h3 className="Home__desc-text_h3">{t("expirience")}</h3>
            </div>
            <div className="Home__desc-btns">
              <Link to="/projects" className="Home__desc-btns_view">
                {t("view")}
              </Link>
              <Link to="/contact" className="Home__desc-hire">
                {t("hire")}
              </Link>
            </div>
          </div>
          <div className="Home_img">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;