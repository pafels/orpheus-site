import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { TeamQueryQuery } from "graphql-types"
import _ from "lodash"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TEAM_QUERY = graphql`
  query TeamQuery {
    allFile(filter: { relativeDirectory: { eq: "team" } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default function TeamPage() {
  const query = useStaticQuery<TeamQueryQuery>(TEAM_QUERY)
  const [lyubo, pavel, vasko, vlado] = _.sortBy(
    query.allFile.nodes,
    node => node.name
  ).map(node => node.childImageSharp!.fluid)

  return (
    <Layout>
      <SEO title="Екип" />
      <div className="card-deck">
        <div className="card mb-3 mt-3">
          <Img className="card-img-top" fluid={vasko as any} />
          <div className="card-body">
            <div className="card-title">
              <h5>Васил Тодев / Сдружение "Байкария"</h5>
            </div>
            <p>
              <a href="https://www.bikearea.org" target="_blank">
                Сдружение “Байкария”
              </a>{" "}
              е създадено през 2004 година с цел развитие и популяризиране на
              планинското колоездене в България. Сдружението работи по
              създаването на десетки маршрути за планинско колоездене в
              Родопите. Сред тях са маршрути в района на Велинград, Беглика,
              Триград, Момчиловци, Маджарово и Ивайловград. "Байкария" стои и
              зад създаването на маршрута “Рудопия”, прекосяващ Родопите от
              запад на изток (Велинград - Мезек), както и велокоридор “Баташка
              планина”, свързващ Защитените територии в едноименния дял на
              Западни Родопи.
            </p>
            <p>
              През 2008 година сдружението участва в първия опит за създаване на
              стандарт за маркиране на велосипедни маршрути, в резултат на който
              е издадена кратка брошура-наръчник за обособяване на “байк
              дестинация” и указания за полагане на маркировка. Успоредно с
              изброените дейности, от 2004 година до сега, сдружение “Байкария”
              е организирало над 70 велосипедни събития в Българските планини и
              чужбина.
            </p>
            <p>
              Васко, един от основателите на сдружението, работи за постигане
              целите на организацията от нейното създаване до настоящия момент.
              Участва активно във всички проекти на сдружението, в това число
              развитието на горски център “Чатъма”, провеждането на организирани
              вело и пешеходни прояви, реализацията на редица природоопазващи
              инициативи и проекти за местно развитие. Родом от Велингард,
              обиколил редица планини по целия свят, Васко винаги носи Родопите
              в сърцето си.
            </p>
          </div>
        </div>
        <div className="card mb-3 mt-3">
          <Img className="card-img-top" fluid={lyubo as any} />
          <div className="card-body">
            <h5>Любомир Ботушаров / MTB-BG.com</h5>
            <p>
              Любомир Ботушаров се занимава активно с планинско колоездене от
              1997 г., като през повечето време го практикува и като професия.
              Той е собственик и основен автор в блога MTB-BG.com, който е един
              от най-популярните източници на информация на тази тема,
              включително за МТБ маршрути и пътеки, за които има и допълнителен
              сайт, наречен МТБ Справочник. В последните години Любо развива
              успешно и Велоучилище МТБ-БГ с обучителни курсове по планинско
              колоездене за начинаещи, напредващи и напреднали.
            </p>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="card mb-3 mt-3">
          <Img className="card-img-top" fluid={vlado as any} />
          <div className="card-body">
            <h5> Владимир Конушлиев / Велоклуб "Крива спица"</h5>
            <p>
              <a href="https://www.kriva.org" target="_blank">
                Велоклуб "Крива спица"
              </a>{" "}
              е един от първите клубове по планинско колоездене в България.
              Корените на клуба поникват в Пловдив през пролетта на 2004-та
              година. Оттогава до днес, "кривите спици" имат зад гърба си почти
              трицифрено число организирани вело походи и събития в българските
              планини. Клубът е организатор на традиционния и емблематичен "24
              часов маратон по планинско колоездене" вече 14 години.
            </p>
            <p>
              Сдружението има богат опит във разработка и поддръжка на маршрути
              за планинско колоездене, предимно в Източни и Западни Родопи.
              Редом с това, клубът създава и поддържа до ден днешен първия, и
              най-голям до момента, парк за планинско колоездене в градска среда
              - "Велопарк Пловдив".
            </p>
            <p>
              Велоклуб "Крива спица" участва редовно в разговори с институции на
              местно и национално ниво, касаещи регулиране и развитие на
              велосипедния туризъм в планините.
            </p>
            <p>
              Владо е един от основателите на клуба и неуморен деятел във всички
              дела на сдружението. Скита из българските планини, с колело и
              пеша, вече 17 години.
            </p>
          </div>
        </div>
        <div className="card mb-3 mt-3">
          <Img className="card-img-top" fluid={pavel as any} />
          <div className="card-body">
            <h5>Павел Сидеров / Сдружение "Алабак"</h5>
            <p>
              <a href="https://www.facebook.com/alabak.info" target="_blank">
                "Инициатива Алабак"
              </a>{" "}
              е кръстена на едноименния планински рид в Западните Родопи
              разположен между долините на реките Яденица и Чепинска.
              Инициативата цели опазването на уникалните природни дадености на
              дела редом с устойчиво развитие на туризъм по богатата му
              маршрутна мрежа.
            </p>
            <p>
              Павел е планинар и колоездач с над 12 години опит. Грижовен
              домакин на велозоната около село Варвара, която развива и поддържа
              от 2010-та година насам, дейностите около която прерастват в
              "Инициатива Алабак" през 2015-та година. С помощта на много
              съмишленици организира множество доброволчески акции и събития за
              популяризиране на природното богатство на това парченце от
              Родопите. В следствие на всички тези дейности през годините се
              сблъсква с множество проблеми, което е и причината да отделя не
              малко време за разработване на правилника за веломаршрути и също
              така комуникация с институциите за опазване на велосипедна и
              пешеходна туристическата инфраструктура.
            </p>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h6>
            В изработката, консултирането и финализирането на правилника също
            така се включиха и много колеги от различни клубове и организации в
            страната - за което им благодарим!
          </h6>
        </div>
      </div>
    </Layout>
  )
}
