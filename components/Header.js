import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

import logo from '../public/images/logo.png'


const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <Navbar expand="lg" className={styles.navBar}>
                        <Link href="/">
                            <Image className={styles.logo}
                                src={logo}
                                alt='Amazon_Square' />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navMenu}>
                            <ul className={styles.menu}>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/">Home</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/services">Services</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/about">About Us</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/contact">Contact</Link>
                                </li>
                                <li className={`${styles.navLinks} ${styles.headerTel}`}>
                                    <Link className='btns btnTrans' href="tel:(302) 883-8877">
                                        (800) 781-9093
                                    </Link>
                                </li>
                                <li className={`${styles.navLinks} ${styles.headerTel}`}>
                                    <Link className='btns btnWhite' href="#">
                                        Get A Proposal
                                    </Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}

export default Header