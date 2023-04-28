import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Runner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Runner = () => {
    return (
        <>
            <section className={`${styles.runner} secTion bg-second`}>
                <Container>
                    <Row className='align-items-start justify-content-between text-center'>
                        <Col lg={10} className='mx-auto'>
                            <div className={`${styles.runnerHead}`}>
                                <h2 className='font-36 fw-500 font-prime txt-white mb-2'>
                                    use high runner strategy to market products with our amazon brand marketing services
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-white mb-0 mb-lg-4'>
                                    Our proven methods grow sales and revenues, transforming your store into a stable and robust business. Hire our Amazon specialists to achieve positive outcomes. Consult now!
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.runnerCol}>
                            <div className={`${styles.runnerCard} ${styles.runerCard}`}>
                                <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>01</h5>
                                <h3 className='font-22 fw-600 font-prime txt-white mb-3'>
                                    Marketing Techniques
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-white'>
                                    AMZ Profs develops custom marketing plans for businesses. Amazon SEO, PPC, and other Amazon Marketing services ensure greater brand exposure and online presence.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.runnerCol}>
                            <div className={`${styles.runnerCard} ${styles.runerCard}`}>
                                <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>02</h5>
                                <h3 className='font-22 fw-600 font-prime txt-white mb-3'>
                                    Product Descriptions
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-white'>
                                    We guarantee that a product description has all the information a client needs to make an informed purchase choice. After researching the competition, we carefully craft product descriptions.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.runnerCol}>
                            <div className={`${styles.runnerCard}`}>
                                <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>03</h5>
                                <h3 className='font-22 fw-600 font-prime txt-white mb-3'>
                                    Boost Sales Instantly
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-white'>
                                    AMZ Profs develops a customized marketing plan for businesses to increase traffic, sales, and revenues. We assist businesses in increasing sales through our effective marketing tactics.
                                </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={`${styles.bttns} mt-5`}>
                                <Link className={`${styles.btnL} btns btnPrime`} href="#">
                                    Get A Quote
                                </Link>
                                <Link className={`${styles.btnW} btns btnWhite`} href="#">
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

export default Runner