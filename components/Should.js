import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Should.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/traffic.png'
import foldImg2 from '../public/images/folds/enhance.png'


const Should = () => {
    return (
        <>
            <section className={`${styles.should} secTion`}>
                <Container>
                    <Row className={styles.shouldRow}>
                        <Col lg={12}>
                            <div className='text-center'>
                                <h2 className='font-36 fw-700 font-prime txt-second mb-0 mb-lg-5'>
                                    Why Should You Choose Us?
                                </h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='py-0 py-md-5'>
                                <h3 className='font-18 fw-400 font-prime txt-second'>
                                    Increase Traffic with Our Custom Amazon
                                </h3>
                                <h2 className='font-36 fw-700 font-prime txt-prime my-3'>
                                    A++ Marketing Solutions
                                </h2>
                                <p className='font-14 fw-300 font-prime txt-second'>
                                    Our Amazon A++ marketing agency assists thousands of sellers globally to make sustainable profits via steady sales. We take pride in promoting your brand, product, and services via social networking sites like Facebook, Linked In, Twitter, Pinterest, and other channels. This technique presents products to a targeted audience on these platforms. By providing you with A++ Marketing, Amazon Square emphasizes the specific requirements of the target audience.
                                </p>
                            </div>
                            <div className='bttns mt-4'>
                                <Link className='btns btnPrime' href="#">
                                    Get A Quote
                                </Link>
                                <Link className='btns btnSecond' href="#">
                                    +1 (408) 689-7746
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.shouldImg}>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.should} secTion`}>
                <Container>
                    <Row className={styles.shouldRow}>
                        <Col lg={6}>
                            <div className={styles.shouldImg}>
                                <Image className='img-fluid'
                                    src={foldImg2}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='py-0 py-md-5'>
                                <h3 className='font-18 fw-400 font-prime txt-second'>
                                    You Enhance Sales Ultimately When You
                                </h3>
                                <h2 className='font-36 fw-700 font-prime txt-prime my-3'>
                                    Hire Amazon A++ Marketing Solutions from Us
                                </h2>
                                <p className='font-14 fw-300 font-prime txt-second mb-3'>
                                    Think again if you're planning to get your sales through Amazon adverts. These adverts are quite expensive and yield no results. However, at A++ Marketing, we can assist you in saving money on such adverts.
                                </p>
                                <p className='font-14 fw-300 font-prime txt-second'>
                                    Our Amazon A++ marketing experts, by utilizing optimum techniques, ensure that the product is visible to more onlookers and work on your brand to improve sales. Our Amazon A++ marketing firm helps the audience know your brand and make an informed decision to purchase your business.
                                </p>
                            </div>
                            <div className='bttns mt-4'>
                                <Link className='btns btnPrime' href="#">
                                    Get A Quote
                                </Link>
                                <Link className='btns btnSecond' href="#">
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

export default Should