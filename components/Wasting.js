import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Wasting.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/wasting.png'


const Wasting = () => {
    return (
        <>
            <section className={`${styles.wasting} secTion`}>
                <Container>
                    <Row className={styles.wastingRow}>
                        <Col lg={6}>
                            <div className='py-0 py-lg-0'>
                                <h3 className='font-18 fw-400 font-prime txt-second'>
                                    Save Your Money from Wasting on Unnecessary Ads
                                </h3>
                                <h2 className='font-36 fw-700 font-prime txt-prime my-3'>
                                    Amazon A++ Marketing
                                </h2>
                                <p className='font-14 fw-300 font-prime txt-second'>
                                    The digital era is reviving and energizing the business, inspiring new concepts that help people by satisfying their needs and aspirations for success. The current hottest digital media trend is A++ Marketing, a plan emphasizing social responsibility while simultaneously aiming for long-term sustainability. A++ Marketing’s primary goal is to maintain and enhance the bonds between customers and sellers. To elevate your brand, use our unique Amazon A++ marketing services and solutions. In order to provide product merchandising the biggest possible boost, our knowledgeable team provides product information, 360-degree spin images, videos, and listings.
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
                            <div className={styles.wastingImg}>
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

export default Wasting