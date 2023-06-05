import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/headerImg2.png';

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem vindo ao meu Portfolio</span>
                        <h1>Olá, Eu sou Lindoelson</h1>
                        <p>Sou formado em Ciências Contábeis com mais de 10 anos de experiência financeira. Após empreender e administrar uma loja virtual, decidi fazer uma transição de carreira, estudando Desenvolvimento Web Fullstack na Trybe. Com habilidades em Front-End e Back-End. Estou entusiasmado em aplicar minha paixão pela tecnologia e minhas habilidades em liderança, resiliência e trabalho em equipe em desafios no mercado de tecnologia.</p>
                        <a href="https://www.linkedin.com/in/joselindoelsonlopes/" target="_blank" rel="noreferrer">Let's connect <ArrowRightCircle size={25}/></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}