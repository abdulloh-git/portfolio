import { useTranslation } from "react-i18next";
import "./Projects.scss";
import { useTypewriter } from "../../animation/Typewriter";

const Projects = () => {
  const { t } = useTranslation();
  const myProjects = useTypewriter(t("myProjects"), 150);
  return (
    <div className="projects">
      <h1 className="projects__h1">{myProjects}</h1>
      <div className="container projects__grid">

        <div className="projects__block">
          <div className="projects__block-img">
            <img src="https://www.shutterstock.com/image-vector/travel-header-social-media-cover-260nw-2704299341.jpg" alt="" />
          </div>
          <div className="projects__block-desc">
            <div className="projects__block-desc_text">
              <h3 className="projects__block-desc_text-h3">{t("ticketSelling")}</h3>
              <p className="projects__block-desc_text-p">{t("madeWith1")}</p>
            </div>
            <div className="projects__block-btns">
              <a href="https://t.me/+T0jTCSPqwWoyMjky" className="projects__block-btns_link">{t("telegram")}</a>
              <a href="https://abdulloh-git.github.io/Traveller-Tickets/" className="projects__block-btns_link">{t("github")}</a>
            </div>
          </div>
        </div>

        <div className="projects__block">
          <div className="projects__block-img">
            <img src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91" alt="" />
          </div>
          <div className="projects__block-desc">
            <div className="projects__block-desc_text">
              <h3 className="projects__block-desc_text-h3">{t("todo")}</h3>
              <p className="projects__block-desc_text-p">{t("madeWith2")}</p>
            </div>
            <div className="projects__block-btns">
              <a href="https://t.me/+LdFEYX1OHb0zYWUy" className="projects__block-btns_link">{t("telegram")}</a>
              <a href="https://abdulloh-git.github.io/todo/" className="projects__block-btns_link">{t("github")}</a>
            </div>
          </div>
        </div>

        <div className="projects__block">
          <div className="projects__block-img">
            <img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b" alt="" />
          </div>
          <div className="projects__block-desc">
            <div className="projects__block-desc_text">
              <h3 className="projects__block-desc_text-h3">{t("forecasting")}</h3>
              <p className="projects__block-desc_text-p">{t("madeWith3")}</p>
            </div>
            <div className="projects__block-btns">
              <a href="https://t.me/+aMEY2RWUHHwwYjU6" className="projects__block-btns_link">{t("telegram")}</a>
              <a href="https://abdulloh-git.github.io/weather/" className="projects__block-btns_link">{t("github")}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;