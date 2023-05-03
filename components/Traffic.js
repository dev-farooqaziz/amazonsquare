import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Should.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Traffic = (props) => {
    return (
        <>
            <section className={`${styles[props.should]} secTion`}>
                <Container>
                    <Row className={styles.shouldRow}>
                        <Col lg={12}>
                            <div className='text-center'>
                                {props.maintitle ?

                                    <h2 className='font-36 fw-700 font-prime text-black mb-0 mb-lg-5'>
                                        {props.maintitle}
                                    </h2>
                                    :
                                    ''
                                }

                                {props.maintitle2 ?

                                    <h4 className='font-14 fw-500 font-prime text-black mb-0 mb-lg-5'>
                                        {props.maintitle2}
                                    </h4>
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>

                                {props.subtitle ?
                                    <h3 className='font-18 fw-400 font-prime text-black'>{props.subtitle}</h3>
                                    :
                                    ''
                                }

                                {props.title ?
                                    <h2 className='font-36 fw-700 font-prime txt-prime my-3'>{props.title}</h2>
                                    :
                                    ''
                                }

                                {props.subtitle2 ?
                                    <h3 className='font-18 fw-500 font-prime text-black'>{props.subtitle2}</h3>
                                    :
                                    ''
                                }

                                {props.subtitle3 ?
                                    <h3 className='font-18 fw-300 font-prime text-black'>{props.subtitle3}</h3>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-14 fw-300 font-prime text-black mb-2'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.text1 ?
                                    <p className='font-14 fw-400 font-prime text-black mb-2'>{props.text1}</p>
                                    :
                                    ''
                                }

                                {props.text2 ?
                                    <p className='font-14 fw-400 font-prime text-black mb-2'>{props.text2}</p>
                                    :
                                    ''
                                }

                            </div>

                            {props.foldDiscuss ?
                                <div className='bttns mt-5'>
                                    <Link className='btns btnPrime' href="#">{props.foldDiscuss}</Link>
                                    <Link className='btns btnSecond' href="tel:+1 (408) 689-7746"> {props.foldnumber}</Link>
                                </div>
                                :
                                ''
                            }

                        </Col>
                        <Col lg={6} className={`${styles[props.alignclass]}`}>
                            <div className={styles.shouldImg}>
                                <Image className='img-fluid'
                                    src={props.imagfold}
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

export default Traffic