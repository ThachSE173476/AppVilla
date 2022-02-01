import React from 'react'
import './faq.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

const FAQ = () => {
    React.useEffect(() => {
        const faqAccordions = document.querySelectorAll('.faq-accordion')
        faqAccordions.forEach((faqAccordion) => {
            faqAccordion.addEventListener('click', () => {
                faqAccordion.classList.toggle('active')
            })
        })
        console.log(faqAccordions)
    }, [])

    return (
        <section className="faq">
            <SectionHeader
                name='FAQ'
                title='Frequently Asked Questions'
                text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
            />

            <div className="faq-container">
                <div className="faq-accordion">
                    <div className="faq-accordion__title">
                        <div className="faq-accordion__title--bullet">
                            <span>01</span>
                            <h1>How do I contact with customer services?</h1>
                        </div>
                        <i class="fas fa-plus faq-accordion--plus"></i>
                        <i class="fas fa-minus faq-accordion--minus"></i>
                    </div>
                    <div className="faq-accordion__body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus</p>
                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                    </div>
                </div>
                <div className="faq-accordion">
                    <div className="faq-accordion__title">
                        <div className="faq-accordion__title--bullet">
                            <span>02</span>
                            <h1>Material types can you work with?</h1>
                        </div>
                        <i class="fas fa-plus faq-accordion--plus"></i>
                        <i class="fas fa-minus faq-accordion--minus"></i>
                    </div>
                    <div className="faq-accordion__body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus</p>
                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                    </div>
                </div>
                <div className="faq-accordion">
                    <div className="faq-accordion__title">
                        <div className="faq-accordion__title--bullet">
                            <span>03</span>
                            <h1>Can I have multiple activities in a single features?</h1>
                        </div>
                        <i class="fas fa-plus faq-accordion--plus"></i>
                        <i class="fas fa-minus faq-accordion--minus"></i>
                    </div>
                    <div className="faq-accordion__body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus</p>
                    </div>
                </div>
                <div className="faq-accordion">
                    <div className="faq-accordion__title">
                        <div className="faq-accordion__title--bullet">
                            <span>04</span>
                            <h1>How clients can consult with online?</h1>
                        </div>
                        <i class="fas fa-plus faq-accordion--plus"></i>
                        <i class="fas fa-minus faq-accordion--minus"></i>
                    </div>
                    <div className="faq-accordion__body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus</p>
                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                    </div>
                </div>
                <div className="faq-accordion">
                    <div className="faq-accordion__title">
                        <div className="faq-accordion__title--bullet">
                            <span>05</span>
                            <h1>Can I share resource between features?</h1>
                        </div>
                        <i class="fas fa-plus faq-accordion--plus"></i>
                        <i class="fas fa-minus faq-accordion--minus"></i>
                    </div>
                    <div className="faq-accordion__body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default FAQ
