import "./Home.scss"
import randomBoy from "../../components/img/randomBoy.jpg"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="Home">
        <div className="container Home__wrapper">
          <div className="Home__desc">
            <div className="Home__desc-text">
              <h1 className="Home__desc-text_h1">{t("slang")}</h1>
              <h3 className="Home__desc-text_h3">{t("expirience")}</h3>
            </div>
            <div className="Home__desc-btns">
              <button className="Home__desc-btns_view">{t("view")}</button>
              <button className="Home__desc-hire">{t("hire")}</button>
            </div>
          </div>
          <div className="Home_img">
            <img src={randomBoy} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home