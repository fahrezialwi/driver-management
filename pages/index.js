import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UserProvider } from '../context/User';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DriverManagement from '../components/DriverManagement';

function Home() {
  return (
    <UserProvider>
      <Header/>
      <Container fluid={true}>
        <Row className="main-container">
          <Col md="2" className="p-0">
            <Sidebar/>
          </Col>
          <Col md="10" className="p-0">
            <DriverManagement/>
          </Col>
        </Row>
      </Container>
    </UserProvider>
  )
}

export default Home;
