import Head from 'next/head'
import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { UserContext } from '../context/User';
import DriverCard from '../components/DriverCard';
// import styled from 'styled-components';

function DriverManagement() {
  const allDrivers = useContext(UserContext);
  const limit = 5;

  const [drivers, setDrivers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setDrivers(allDrivers);
  }, [allDrivers])

  const onFilterSubmit = (e) => {
    e.preventDefault();
    let arr = allDrivers.filter((el) => el.name.first.toLowerCase().includes(filter.toLowerCase()))
    setDrivers(arr);
    setPage(1);
  }

  const onPrevClick = () => {
    setPage((page) => (page - 1));
  }

  const onNextClick = () => {
    setPage((page) => (page + 1));
  }

  const isPrevDisabled = () => {
    if (page === 1) {
      return true
    } 
    return false
  }

  const isNextDisabled = () => {
    if (page >= drivers.length / limit) {
      return true
    } 
    return false
  }

  const renderDriver = () => {
    let start = (page - 1) * limit;
    let end = ((page - 1) * limit) + limit;
    let slicedDrivers = drivers.slice(start, end);

    return slicedDrivers.map((el) => {
      return (
        <DriverCard driver={el} key={el.email}/>
      )
    })
  }

  return (
    <>
      <Head>
        <title>Driver Management App</title>
        <meta name="description" content="Driver Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="driver-container">
        <Row className="driver-title">
          <Col md="7">
            <h4 className="shipper-color">
              <b>DRIVER MANAGEMENT</b>
            </h4>
            <div>
              Data driver yang bekerja dengan Anda.
            </div>
          </Col>
          <Col md="5">
            <Row className="mt-3">
              <Col md="6" sm="12" className="mb-2">
              <form onSubmit={(e) => onFilterSubmit(e)}>
                <Input
                  type="text"
                  onChange={e => setFilter(e.target.value)}
                  placeholder="Cari Driver" 
                />
              </form>
              </Col>
              <Col md="6" sm="12">
                <Button className="shipper-button-color" block>TAMBAH DRIVER +</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {renderDriver()}
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Button
              color="transparent"
              className="me-2"
              disabled={isPrevDisabled()}
              onClick={() => onPrevClick()}>
                &lt; Previous Page
            </Button>
            <Button
              color="transparent"
              disabled={isNextDisabled()}
              onClick={() => onNextClick()}>
                Next Page &gt;
            </Button>
          </Col>
        </Row>
      </main>
    </>
  )
}

export default DriverManagement;
