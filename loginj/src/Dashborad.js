import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Dahboard.css';
import axios from 'axios';
function Dashboard() {
  const [name,setname]=useState([]);
  const navigate=useNavigate();
 useEffect(()=>
 {
  axios.post('http://localhost:3002/api/Dashboard')
  .then((res)=>
  {
    if(res.data.valid)
    {
      setname(res.data.user)
    }
    else
    {
      navigate('/login');
    }
  }).catch((e)=>
  {
    console.log(e);
  })
 },[])
  return (
    <div className='Dashboard'>
      <div>Dashboard {name[0]}</div>
      <form>
        <div className='button3'>
          <button type='submit' className='font-size-50'>
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
