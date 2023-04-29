import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Solutions.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/cater.png'


const Solutions = () => {
    return (
        <>
            <section className={`${styles.solutions} bg-prime`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={styles.solutionsImg}>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={7} className='mt-5 mt-lg-0'>
                            <div className={styles.solutionsTxt}>
                                <h3 className='font-18 fw-500 font-prime text-black mb-0'>
                                    We have the best
                                </h3>
                                <h2 className='font-40 fw-600 font-prime text-white'>
                                    Amazon A++ <br /> Marketing Specialists
                                </h2>
                                <p className='font-16 fw-500 font-prime text-black mb-4'>
                                    who provide ready-made solutions that cater to the needs of our clients.
                                </p>
                                <h5 className='font-18 fw-500 font-prime text-white'>Melanie Joshua</h5>
                                <p className='font-14 fw-500 font-prime text-black mb-4'>
                                    Lead Amazon Consultant
                                </p>
                            </div>
                            <div className='bttns mt-4'>
                                <Link className={`${styles.btnW} btns btnWhite`} href="#">
                                    Get A Quote
                                </Link>
                                <Link className={`${styles.btnS} btns btnSecond`} href="#">
                                    +1 (408) 689-7746
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solutions