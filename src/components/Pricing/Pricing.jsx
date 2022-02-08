import React from 'react'
import './pricing.scss'

import SectionHeader from '../SectionHeader/SectionHeader'

import { Fade } from 'react-reveal'

const Pricing = props => {
    return (
        <section className='pricing'>
            <SectionHeader
                name='PRICING'
                title='Pricing Plan'
                text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />

            <Fade cascade bottom>
                <div className="pricing-container">
                    <div className="pricing-item">
                        <h1 className="pricing-item__name">Hobby</h1>
                        <p className="pricing-item__des">All the basics for starting a new business</p>
                        <p className="pricing-item__price">$12<span>/mo</span></p>
                        <div className="button pricing-item__button">Buy Hobby</div>
                        <div className="pricing-item__list">
                            <h3>WHAT'S INCLUDED</h3>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Cras justo odio.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Dapibus ac facilisis in.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Morbi leo risus.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Potenti felis, in cras ligula.</span>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-item">
                        <h1 className="pricing-item__name">Freelancer</h1>
                        <p className="pricing-item__des">All the basics for starting a new business</p>
                        <p className="pricing-item__price">$24<span>/mo</span></p>
                        <div className="button pricing-item__button">Buy Hobby</div>
                        <div className="pricing-item__list">
                            <h3>WHAT'S INCLUDED</h3>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Cras justo odio.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Dapibus ac facilisis in.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Morbi leo risus.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Potenti felis, in cras ligula.</span>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-item">
                        <h1 className="pricing-item__name">Startup</h1>
                        <p className="pricing-item__des">All the basics for starting a new business</p>
                        <p className="pricing-item__price">$32<span>/mo</span></p>
                        <div className="button pricing-item__button">Buy Hobby</div>
                        <div className="pricing-item__list">
                            <h3>WHAT'S INCLUDED</h3>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Cras justo odio.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Dapibus ac facilisis in.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Morbi leo risus.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Potenti felis, in cras ligula.</span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-item">
                        <h1 className="pricing-item__name">Enterprises</h1>
                        <p className="pricing-item__des">All the basics for starting a new business</p>
                        <p className="pricing-item__price">$48<span>/mo</span></p>
                        <div className="button pricing-item__button">Buy Hobby</div>
                        <div className="pricing-item__list">
                            <h3>WHAT'S INCLUDED</h3>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Cras justo odio.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Dapibus ac facilisis in.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Morbi leo risus.</span>
                            </div>
                            <div className="pricing-item__list-item">
                                <i class="far fa-check-circle"></i>
                                <span>Potenti felis, in cras ligula.</span>
                            </div>
                        </div>
                    </div>
                </div>         
            </Fade>
        </section>
    )
}

export default Pricing  