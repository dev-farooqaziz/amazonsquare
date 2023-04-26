import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
//images
import logo from '../public/images/logo.png'


const Header = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <Navbar expand="lg" className={styles.navBar}>
                        <Link href="/">
                            <Image className={`${styles.logo} img-fluid`}
                                src={logo}
                                alt='Amazon_Square' />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navMenu}>
                            <ul className={styles.menu}>
                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/"
                                        ? "active" : "menuLinks"} href="/">Home</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/services"
                                        ? "active" : "menuLinks"} href="/services">Services</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/about"
                                        ? "active" : "menuLinks"} href="/about">About Us</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/contact"
                                        ? "active" : "menuLinks"} href="/contact">Contact</Link>
                                </li>
                                <li className={`${styles.headerTel}`}>
                                    <Link className={`${styles.btnT} btns btnTrans`} href="tel:(302) 883-8877">
                                        (800) 781-9093
                                    </Link>
                                </li>
                                <li className={`${styles.headerTel}`}>
                                    <Link className={`${styles.btnW} btns btnWhite`} href="#">
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