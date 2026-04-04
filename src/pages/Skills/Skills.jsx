import { useTranslation } from "react-i18next"
import "./Skills.scss"
import { useTypewriter } from "../../animation/Typewriter";

const Skills = () => {
  const { t } = useTranslation();
  const myStack = useTypewriter(t("myStack"), 150);
  return (
    <div className="skills">
      <h2 className="skills__h1">{myStack}</h2>
      <div className="container skills__grid">
        <div className="skills__block">
          <h3 className="skills__block-h3 special">{t("Logic")}</h3>
          <div className="skills__block-components">
            <span className="skills__block-components-span">{t("RTK")}</span>
            <span className="skills__block-components-span">{t("zustand")}</span>
            <span className="skills__block-components-span">{t("RTKQuery")}</span>
            <span className="skills__block-components-span">{t("API")}</span>
            <span className="skills__block-components-span">{t("async")}</span>
          </div>
          <p className="skills__block-p">{t("logicText")}</p>
        </div>
        <div className="skills__block">
          <h3 className="skills__block-h3">{t("lang")}</h3>
          <div className="skills__block-components">
            <span className="skills__block-components-span">{t("ts")}</span>
            <span className="skills__block-components-span">{t("js")}</span>
          </div>
        </div>
        <div className="skills__block">
          <h3 className="skills__block-h3">{t("eco")}</h3>
          <div className="skills__block-components">
            <span className="skills__block-components-span">{t("react")}</span>
            <span className="skills__block-components-span">{t("router")}</span>
          </div>
        </div>
        <div className="skills__block">
          <h3 className="skills__block-h3">{t("styling")}</h3>
          <div className="skills__block-components">
            <span className="skills__block-components-span">{t("sass")}</span>
            <span className="skills__block-components-span">{t("bem")}</span>
          </div>
        </div>
        <div className="skills__block">
          <h3 className="skills__block-h3">{t("tools")}</h3>
          <div className="skills__block-components">
            <span className="skills__block-components-span">{t("git")}</span>
            <span className="skills__block-components-span">{t("vite")}</span>
          </div>
        </div>
        <div className="skills__block">
          <h3 className="skills__block-h3">{t("workflow")}</h3>
          <div className="skills__block-components">
            <span className="skills__block-components-span">{t("node")}</span>
            <span className="skills__block-components-span">{t("npm")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills