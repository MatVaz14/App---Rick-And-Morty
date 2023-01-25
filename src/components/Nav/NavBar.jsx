import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export default function NavBar (props) { // Este app es como el div principal
    return (
      <nav className={styles.navContainer}>
  
        <div>
          <Link to='/home'>
            <span className={styles.navBar}>
              MatVaz - Rick And Morty App
            </span>
          </Link>
          <Link to='/about'>
            <span className={styles.navBar}>About</span>
          </Link>
          <SearchBar onSearch={props.onSearch} />
        </div>

  
      </nav>
    )
  }