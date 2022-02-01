import React, {useEffect} from 'react'

import './contact.scss'

import testiPatern from './testi-patern.svg'
import brand1 from './brand1.svg'
import brand2 from './brand2.svg'
import brand3 from './brand3.svg'


import testi1 from './testi1.jpg'
import testi2 from './testi2.jpg'
import testi3 from './testi3.jpg'


const Contact = () => {    
    React.useEffect(()=> {
        const contactBullets = document.querySelectorAll('.contact-bullet')
        const setActive = (ele) => {
            ele.classList.add('active')
        }
        const removeActive = (ele) => {
            ele.classList.remove('active')
        }
        
        const transformList = [0, 576, 1152]
        let currentIndex = 0
        contactBullets.forEach((bullet, i) => {
            bullet.addEventListener('click', () => {
                contactBullets.forEach((bullet) => removeActive(bullet))
                setActive(bullet)

                const contactSlider = document.querySelector('.contact-slider')
                const contactItems = document.querySelectorAll('.contact-item')
                const contactItemNow = document.querySelector(`.contact-item-${i+1}`)

                contactItems.forEach((contactItem) => {
                    removeActive(contactItem)
                })
                setActive(contactItemNow)

                contactSlider.style.cssText = `transform: translateX(-${transformList[i]}px);`
                console.log(i - currentIndex)
                currentIndex = i
            })
        })
    }, [])

    return (
        <section className="contact">
            <img src={testiPatern} alt="" className='contact-bg-1' />
            <img src={testiPatern} alt="" className='contact-bg-2' />

            <div className="contact-container">
                <div className="contact-slider">
                <div className="contact-item-1 contact-item active">
                    <img src={brand1} alt="" className="contact-item-img" />
                    <p>""It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has""</p>
                    <img src={testi1} alt="" className="contact-item-ava" />
                    <h3>Mushaof Chowdhury</h3>
                    <span>CEO - GrayGrids</span>
                </div>
                <div className="contact-item-2 contact-item">
                    <img src={brand2} alt="" className="contact-item-img" />
                    <p>""It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has""</p>
                    <img src={testi2} alt="" className="contact-item-ava" />
                    <h3>Mushaof Chowdhury</h3>
                    <span>CEO - Ayro UI</span>
                </div>
                <div className="contact-item-3 contact-item">
                    <img src={brand3} alt="" className="contact-item-img" />
                    <p>""It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has""</p>
                    <img src={testi3} alt="" className="contact-item-ava" />
                    <h3>Mushaof Chowdhury</h3>
                    <span>CEO - Themes Grid</span>
                </div>
                </div>
                
            </div>

            <div className="contact-bullets">
                <div className="contact-bullet contact-bullet-1 active"></div>
                <div className="contact-bullet contact-bullet-2"></div>
                <div className="contact-bullet contact-bullet-3"></div>
            </div>
        </section>
    )
}

export default Contact
