import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import AddAuction from './AddAuction';

const Body = () => {
  const currentUser = useContext(AuthContext);
  return (
    <div className='user'>
      {currentUser && <AddAuction/>}
    </div>
  )
}

export default Body

