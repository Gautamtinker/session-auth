import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
export const Sidebardata=[
{
    title:'Home',
    path:'/',
    icons:<AiIcons.AiFillHome/>,
    cName:'nav-text'
},
{
    title:'Login',
    path:'/login',
    icons:<AiOutlineUserAdd/>,
    cName:'nav-text'
},
{
    title:'Signup',
    path:'/signup',
    icons:<AiOutlineLogin/>,
    cName:'nav-text'
},
{
    title:'Dashboard',
    path:'/Dashboard',
    icons:<AiIcons.AiFillHome/>,
    cName:'nav-text'
},
]