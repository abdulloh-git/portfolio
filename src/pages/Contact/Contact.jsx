import React from 'react';
import "./Contact.scss";
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { useTypewriter } from '../../animation/Typewriter';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqegkeaj");
  const { t } = useTranslation();
  const lets = useTypewriter(t("lets"));
  return (
    <div className="contact">
      <div className="contact__text">
        <div className="contact__text-desc">
          <h2 className="contact__text-desc_h2">{lets}</h2>
          <p className="contact__text-desc_p">{t("available")}</p>
        </div>
        <div className="contact__text-links">
          <div className="contact__text-links_blocks">
            <div className="contact__text-links_blocks-img">📧</div>
            <div className="contact__text-links_blocks-contact">
              <h5 className="contact__text-links_blocks-contact_h5">{t("EMAIL")}</h5>
              <a href="mailto:abdulloh.b2012@gmail.com" className="contact__text-links_blocks-contact_link">{t("realEmail")}</a>
            </div>
          </div>
          <div className="contact__text-links_blocks">
            <div className="contact__text-links_blocks-img">✈️</div>
            <div className="contact__text-links_blocks-contact">
              <h5 className="contact__text-links_blocks-contact_h5">Telegram</h5>
              <a href="https://t.me/smth1140" className="contact__text-links_blocks-contact_link">@smth1140</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__message">
        {state.succeeded ? (
          <div className="contact__success">
            <div className="contact__success-icon">✔️</div>
            <h3 className="contact__success-h3">{t("messageStatus")}</h3>
            <p className="contact__success-p">{t("thanks")}</p>
            <button onClick={() => window.location.reload()} className="contact__success-btn">
              {t("another")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder={t("name")}
                required
              />
            </div>

            <div className="input-group">
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t("Email")}
                required
              />
              <ValidationError
                prefix={t("Email")}
                field="email"
                errors={state.errors}
                className="error-text"
              />
            </div>

            <div className="input-group">
              <textarea
                id="message"
                name="message"
                placeholder={t("Message")}
                rows="4"
                required
              />
              <ValidationError
                prefix={t("Message")}
                field="message"
                errors={state.errors}
                className="error-text"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="contact__success-btn"
            >
              {state.submitting ? t("sending") : t("send")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;