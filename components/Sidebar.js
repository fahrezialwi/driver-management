import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-selection">
        <FontAwesomeIcon icon={faHouse} className="me-2" />
        Beranda
      </div>
      <div className="shipper-color sidebar-selection-selected">
        <FontAwesomeIcon icon={faUser} className="me-2" />
        Driver Management
      </div>
      <div className="sidebar-selection">
        <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
        Pickup
      </div>
    </div>
  )
}

export default Sidebar;
