import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GetApi } from './GetApi';
import Nabtav from './Nabtav';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [trainingName, setTrainingName] = useState();
  const navigate = useNavigate();

  const trainingNameHandler = async () => {
    const data = await GetApi('api/v3/training/find');
    setTrainingName(data);
  }

  useEffect(() => {
    trainingNameHandler();
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">XYZ TRAINING CENTER</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {
                trainingName?.map((data, index) => (
                  <Nav.Link href={`/${data.trainingName}`}>{data.trainingName}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header