import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Convinced.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image
import foldImg from '../public/images/folds/convinced.png'


const Convinced = () => {
    return (
        <>
            <section className={`${styles.convinced} secTion`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className={`${styles.convincedHead} me-0 me-lg-5`}>
                                <h2 className='font-36 fw-700 font-second txt-white mb-4'>
                                    Why Our Amazon <br /> Services Are Excellent?
                                </h2>
                                <p className='font-16 fw-300 font-second txt-white mb-4'>
                                    Our clients love working with us because of our professionalism, guaranteed results, and affordable Amazon marketing services. If you are still not convinced, consider the following statistics:
                                </p>
                                <div className='bttns mt-4'>
                                    <Link className={`${styles.btnP} btns btnPrime`} href="#">
                                        Get A Quote
                                    </Link>
                                    <Link className={`${styles.btnW} btns btnWhite`} href="#">
                                        +1 (408) 689-7746
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.convincedImg} mb-4`}>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Convinced