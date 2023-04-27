import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Banner = (props) => {
    return (
        <>
            <section className={`${styles[props.banner]}`}>
                <Container>
                    <Row className={styles.bannerRow}>
                        <Col lg={7}>
                            <div className={styles.bannerTxt}>
                                {props.title ?
                                    props.title
                                    :
                                    ''
                                }

                                {props.subtitle ?
                                    <h2 className='font-30 fw-500 font-second txt-white'>{props.subtitle}</h2>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-16 fw-300 font-second txt-white mb-3'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.subtext ?

                                    <p className='font-16 fw-300 font-second txt-white'>{props.subtext}</p>
                                    :
                                    ''
                                }

                                {props.subtext1 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext1}</p>
                                    :
                                    ''
                                }

                                {props.subtext2 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext2}</p>
                                    :
                                    ''
                                }

                                {props.subtext3 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext3}</p>
                                    :
                                    ''
                                }

                                {props.subtext4 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext4}</p>
                                    :
                                    ''
                                }

                                {props.discuss ?
                                    props.discuss
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner