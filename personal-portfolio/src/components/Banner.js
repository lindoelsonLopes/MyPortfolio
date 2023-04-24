import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/headerImg2.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web developer', 'Full Stack'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
    }, delta);

    return () => { clearInterval(ticker) };
})

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello, I'm Lindoelson   `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nisi soluta veniam nobis necessitatibus sequi ipsum ipsam ea tempora asperiores repellat, blanditiis repudiandae id assumenda ab suscipit atque culpa placeat.</p>
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