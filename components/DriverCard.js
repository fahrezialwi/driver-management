import React from 'react';
import Image from 'next/image'
import { Row, Col } from 'reactstrap';
import moment from 'moment'
import blankPicture from '../public/blank-profile-picture.png'

const DriverCard = ({driver}) => {
  return (
    <Col 
      lg="2"
      md="4"
      sm="12"
      className="driver-card p-0"
    >
      <div className="p-3 driver-card-title">
        <Row>
          <Col md="10" xs="10">
            <div className="d-inline-block me-1">
              Driver ID
            </div>
            <div className="d-inline-block text-break shipper-color">
              {driver.id.value ? driver.id.value : '-'}
            </div>
          </Col>
          <Col md="2" xs="2">
            <div className="text-right">
              ...
            </div>
          </Col>
        </Row>
      </div>
      <hr/>
      <Row className="p-3">
        <Col>
          <div className="driver-card-image">
            <Image
              src={driver.picture.large ? driver.picture.large : blankPicture}
              alt={`${driver.name.first} ${driver.name.last}`} 
              width={150}
              height={150}
              layout="responsive"
              priority
            />
          </div>
        </Col>
        <Col>
          <div className="my-2">
            <div>Nama Driver</div>
            <b>{`${driver.name.first} ${driver.name.last}`}</b>
          </div>
          <div className="my-2">
            <div>
              Telepon
            </div>
            <b>
              {driver.phone}
            </b>
          </div>
          <div className="my-2"> 
            <div>
              Email
            </div>
            <b className="text-break">
              {driver.email}
            </b>
          </div>
          <div className="my-2">
            <div>
              Tanggal Lahir
            </div>
            <b>
              {moment(driver.registered.date).format('DD-MM-YYYY')}
            </b>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default DriverCard;