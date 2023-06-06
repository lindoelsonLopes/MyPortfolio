import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import iconTerminal from '../assets/img/icon-terminal.png';
import iconGitHub from '../assets/img/icon-github.png';
import iconHtml5 from '../assets/img/icon-html5.png';
import iconCss3 from '../assets/img/icons-css3.png';
import iconJavascript from '../assets/img/icon-javascript.png';
import iconReact from '../assets/img/icon-react.png';
import iconTypescript from '../assets/img/icon-typescript.png';
import iconNodeJs from '../assets/img/icon-nodejs.png';
import iconDocker from '../assets/img/icon-docker.png';
import iconMongoDb from '../assets/img/icon-mongodb.png';
import iconScrum from '../assets/img/icon-scrum.png';
import iconKanban from '../assets/img/icon-kanban.png';
import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    return(
        <section className="skills" id="skills">
          <Container>
            <Row>
              <Col>
                <div className="skill-bx">
                  <h2>
                    Skills
                  </h2>
                  <p>Ao longo da minha jornada, tive a oportunidade de explorar uma variedade de tecnologias, desde Unix e Bash até Git e GitHub, HTML, CSS, JavaScript, ReactJS, TypeScript, Docker, NodeJS, Express, Sequelize e MongoDB. Além disso, participei de projetos colaborativos, aplicando metodologias ágeis como Scrum e Kanban. Essas experiências me permitiram desenvolver habilidades em programação, controle de versão, desenvolvimento web e bancos de dados. Estou entusiasmado em continuar aprimorando minhas habilidades e enfrentar novos desafios na área de desenvolvimento de software.</p>
                  <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={iconTerminal} alt="icone de um terminal" />
                        <h5>Unix & Bash</h5>
                    </div>
                    <div className="item">
                        <img src={iconGitHub} alt="image2" />
                        <h5>Git & GitHub</h5>
                    </div>
                    <div className="item">
                        <img src={iconHtml5} alt="image3" />
                        <h5>Html</h5>
                    </div>
                    <div className="item">
                        <img src={iconCss3} alt="image4" />
                        <h5>CSS</h5>
                    </div>
                    <div className="item">
                        <img src={iconJavascript} alt="image5" />
                        <h5>JavaScript</h5>
                    </div>
                    <div className="item">
                        <img src={iconReact} alt="image5" />
                        <h5>ReactJs</h5>
                    </div>
                    <div className="item">
                        <img src={iconTypescript} alt="image5" />
                        <h5>TypeScript</h5>
                    </div>
                    <div className="item">
                        <img src={iconNodeJs} alt="image5" />
                        <h5>NodeJs</h5>
                    </div>
                    <div className="item">
                        <img src={iconDocker} alt="image5" />
                        <h5>Docker</h5>
                    </div>
                    <div className="item">
                        <img src={iconMongoDb} alt="image5" />
                        <h5>MongoDb</h5>
                    </div>
                    <div className="item">
                        <img src={iconScrum} alt="image5" />
                        <h5>Scrum</h5>
                    </div>
                    <div className="item">
                        <img src={iconKanban} alt="image5" />
                        <h5>Kanban</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
            <img className="background-image-left" src={colorSharp} alt="Image2" />
        </section>
    )
}