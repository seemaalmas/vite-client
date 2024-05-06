import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';


//import logo from "logo.png";
const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'News', href: '/news', current: false }
  // { name: 'Login', href: '/login', current: false },
  // { name: 'Register', href: '/register', current: false },
]

const news = [
  { name: 'General', href: '/news/general', current: true },
  { name: 'Technology', href: '/news/technology', current: false },
  { name: 'Business', href: '/news/business', current: true },
  { name: 'Entertainment', href: '/news/entertainment', current: false },
  { name: 'Health', href: '/news/health', current: false },
  { name: 'Science', href: '/news/science', current: true },
  { name: 'Sports', href: '/news/sports', current: false },

  // { name: 'Login', href: '/login', current: false },
  // { name: 'Register', href: '/register', current: false },
]


export default function Navigation() {

  return (
    <>
      <div className="navbarBar">
        <Link to="/" className="link">Dashboard</Link>
        {/* <Link to="/poll" className="link">Poll</Link> */}
        <div className="subnav">

          <button className="subnavbtn">News<i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            {news.map((item) =>
              <Link
                key={item.name}
                to={item.href}
              >{item.name}</Link>
            )
            }
          </div>

        </div>


      </div>

    </>

  )
}
