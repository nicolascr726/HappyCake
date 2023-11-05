import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">HappyCake</span> 
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img 
      src="https://emojitool.com/img/mozilla/firefox-os-2.5/birthday-cake-1247.png"
      alt="imagen de un pastel"
      />
    </Container>
  );
};
export default HomePage;
