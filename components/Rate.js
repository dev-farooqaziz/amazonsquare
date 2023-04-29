import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Rate.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Rate = () => {
    return (
        <>
            <section className={`${styles.rate} secTion`}>
                <div className={`${styles.divBef} mx-auto`}></div>
                <Container>
                    <Row className='align-items-start justify-content-between text-center'>
                        <Col lg={10} className='mx-auto'>
                            <div className={`${styles.rateHead}`}>
                                <h2 className='font-36 fw-500 font-prime txt-second mb-2'>
                                    Get A Higher Conversion Rate & More Sales with Our Amazon A++ Marketing Services
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-second mb-0 mb-lg-5'>
                                    We adopt a business-friendly strategy to ensure concrete results and profits in real-time for our clients. Keeping in view the buyers, we provide to building long-term relationships that benefit our clients and us.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.rateCol}>
                            <div className={`${styles.rateCard} ${styles.ratCard}`}>
                                <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>01</h5>
                                <h3 className='font-22 fw-600 font-prime txt-second mb-3'>
                                    Marketing Techniques
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-second'>
                                    AMZ Profs develops custom marketing plans for businesses. Amazon SEO, PPC, and other Amazon Marketing services ensure greater brand exposure and online presence.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.rateCol}>
                            <div className={`${styles.rateCard} ${styles.ratCard}`}>
                                <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>02</h5>
                                <h3 className='font-22 fw-600 font-prime txt-second mb-3'>
                                    Product Descriptions
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-second'>
                                    We guarantee that a product description has all the information a client needs to make an informed purchase choice. After researching the competition, we carefully craft product descriptions.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.rateCol}>
                            <div className={`${styles.rateCard}`}>
                                <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>03</h5>
                                <h3 className='font-22 fw-600 font-prime txt-second mb-3'>
                                    Boost Sales Instantly
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-second'>
                                    AMZ Profs develops a customized marketing plan for businesses to increase traffic, sales, and revenues. We assist businesses in increasing sales through our effective marketing tactics.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Rate