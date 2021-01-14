import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactsPage = () => {
  return (
    <Layout>
      <SEO title="Контакти" />
      <div className="mt-2">
        <h1>Свържи се с нас!</h1>
      </div>

      <div className="col-6 mt-2">
        <p>Нуждаете се от консултация?</p>
        <p>Желате да подкрепите проекта?</p>
        <p>Искате да дадете обратна връзка?</p>
        <form name="contact-form" data-netlify="true" method="POST">
          <div className="form-group">
            <label htmlFor="name">Вашите имена</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Относно</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Съобщение</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={10}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Изпрати
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ContactsPage
