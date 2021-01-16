import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ContactsImagesQueryQuery } from "graphql-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CONTACTS_IMAGES_QUERY = graphql`
  query ContactsImagesQuery {
    file(relativePath: { eq: "contacts-side.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const ContactsPage = () => {
  const query = useStaticQuery<ContactsImagesQueryQuery>(CONTACTS_IMAGES_QUERY)

  return (
    <Layout>
      <SEO title="Контакти" />

      <div className="row mt-5">
        <div className="col-6 mt-2">
          <h1>Свържeте се с нас!</h1>
          <ul>
            <li>Нуждаете се от консултация?</li>
            <li>Желате да подкрепите проекта?</li>
            <li>Искате да дадете обратна връзка?</li>
          </ul>

          <form
            name="contact-form"
            data-netlify="true"
            netlify-honeypot="bot-field"
            method="POST"
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <input name="bot-field" hidden />
            <div className="form-group">
              <label htmlFor="name">Вашите имена</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
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
        <div className="col-6 mt-2">
          <Img fluid={query.file!.childImageSharp!.fluid as any} />
        </div>
      </div>
    </Layout>
  )
}

export default ContactsPage
