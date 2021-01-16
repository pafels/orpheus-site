import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function TeamPage() {
  const query = useStaticQuery(graphql`
    query {
      pavel: file(relativePath: { eq: "team/pavel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vasko: file(relativePath: { eq: "team/vasko.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lyubo: file(relativePath: { eq: "team/lyubo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vlado: file(relativePath: { eq: "team/vlado.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Екип" />
      <div className="card-deck">
        <div className="card mb-3 mt-3">
          <Img
            className="card-img-top"
            fluid={query.pavel.childImageSharp.fluid}
          />
          <div className="card-body">
            <h5>Павел Сидеров / Сдружение "Алабак"</h5>
            <p>
            Занимава се с поддръжка, развитие и популяризиране на велозоната около село Варвара от 2010та година насам. 
            През 2015 година стартира инициативата Алабак, чиито цели са свързани също и с туристическата инфраструктура 
            и опазване на едноименния родопски дял. С помощта на много съмишленици организира множество доброволчески 
            акции и събития за популяризиране. В следствие на всички тези дейности през годините се сблъсква с множество 
            проблеми, което е и причината да отделя не малко време за разработване на правилника за веломаршрути и също 
            така комуникация с институциите за опазване на вело и туристическата инфраструктура.
            </p>
          </div>
        </div>
        <div className="card mb-3 mt-3">
          <Img
            className="card-img-top"
            fluid={query.vasko.childImageSharp.fluid}
          />
          <div className="card-body">
            <h5>Васил Тодев / Сдружение "Байкария"</h5>
            <p>
              Etiam tellus nisl, pretium in elementum hendrerit, cursus non
              purus. Sed in lectus consectetur, viverra purus nec, tincidunt
              lorem. Duis lobortis lacus et faucibus imperdiet. Vivamus ultrices
              id massa at laoreet. Quisque lectus tellus, hendrerit ut tempus
              sit amet, interdum sit amet metus. Donec ac nisi tincidunt,
              egestas lectus sed, condimentum nisl. Curabitur convallis libero
              ut diam finibus laoreet. Maecenas auctor enim ut sem viverra
              maximus at vestibulum nibh. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Nunc id lorem egestas turpis condimentum
              cursus nec vel dolor. Integer semper lectus lectus, a egestas
              purus lacinia rutrum. Aenean fringilla lobortis mi, eu placerat
              mauris.
            </p>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="card mb-3 mt-3">
          <Img
            className="card-img-top"
            fluid={query.lyubo.childImageSharp.fluid}
          />
          <div className="card-body">
            <h5>Любомир Ботушаров / "МТБ-БГ"</h5>
            <p>
              Fusce ac pulvinar enim, sit amet facilisis dolor. Cras viverra mi
              quis nisl consectetur rutrum non at erat. Sed ac lorem tincidunt,
              pretium nisi ac, egestas nisi. Mauris iaculis viverra elit vel
              aliquet. In a nunc mattis, rhoncus lorem at, maximus ligula.
              Phasellus suscipit est quis lacus dictum, eget laoreet est
              sollicitudin. Nulla efficitur leo quis turpis volutpat, eu rutrum
              nisl hendrerit. Sed finibus pretium est quis egestas.
            </p>
          </div>
        </div>
        <div className="card mb-3 mt-3">
          <Img
            className="card-img-top"
            fluid={query.vlado.childImageSharp.fluid}
          />
          <div className="card-body">
            <h5>Владимир Конушлиев / Велоклуб "Крива Спица"</h5>
            <p>
              Cras tellus libero, tempor vel euismod id, consectetur id orci.
              Integer non ultrices turpis, a tincidunt lectus. Curabitur est
              ipsum, posuere molestie tristique ac, iaculis quis ex. Sed
              porttitor nunc in dui interdum viverra. Maecenas ullamcorper, quam
              id porta consequat, sapien elit laoreet sapien, sit amet venenatis
              justo leo vel lacus. Vivamus finibus, orci eget molestie egestas,
              purus massa tincidunt nibh, sed consequat urna nunc at dui.
              Maecenas bibendum, arcu a tincidunt condimentum, dui lorem
              facilisis mi, eu scelerisque nisl augue et ipsum. Donec at
              vestibulum lacus. Proin et lobortis velit. Aenean non vestibulum
              diam, vitae rhoncus nisl. Integer imperdiet enim non elit
              ultricies posuere. Proin nulla lacus, cursus sed leo a,
              condimentum varius sapien.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
