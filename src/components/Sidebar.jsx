import React from 'react';
import { useState, useEffect } from 'react';
import Moon from '../images/moon.png';
import Profile from '../images/profile.jpg';
import DarkModeToggle from './DarkModeToggle';
import '../css/sidebar.css'


function Sidebar() {
const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const arrowElements = document.querySelectorAll(".arrow");
    arrowElements.forEach((arrow) => {
      arrow.addEventListener("click", toggleMenu);
    });

    return () => {
      arrowElements.forEach((arrow) => {
        arrow.removeEventListener("click", toggleMenu);
      });
    };
  }, []);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
  };

    return ( 
        <div>
        <div className={`sidebar ${showMenu ? "showMenu" : ""}`}>
          <div className="logo-details">
            <i className='bx bx-code' ></i>
            <span className="logo_name">SNE</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="index.html">
                <i className="bx bx-grid-alt"></i>
                <span className="link_name">Anasayfa</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="">Anasayfa</a></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-collection"></i>
                  <span className="link_name">Yazılarım</span>
                </a>
              </div>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-book-alt"></i>
                  <span className="link_name">Haber Köşesi</span>
                </a>
              </div>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-plug"></i>
                  <span className="link_name">Projelerim</span>
                </a>
              </div>
            </li>
            <li>
              <div className="iocn-link">
                <a href="iletisim.html">
                  <i className='bx bxs-contact' ></i>
                  <span className="link_name">İletişim</span>
                </a>
              </div>
            </li>
            <li>
              <div className="profile-details">
                <div className="profile-content">
                    <img src={Profile} alt="profileImg" />
                </div>
                <div className="name-job">
                  <div className="profile_name">Sema Nur Ekmekci</div>
                  <div className="job">Bilgisayar Mühendisliği Öğrencisi</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <div className="home-content">
            <i className="bx bx-menu" onClick={toggleSidebar}></i>
            <DarkModeToggle />
          </div>
        </section>
        </div>
     );
}

export default Sidebar;