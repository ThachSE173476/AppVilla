import React from 'react'
import './team.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import img1 from './team1.jpg'
import img2 from './team2.jpg'
import img3 from './team3.jpg'


const Team = props => {
    return (
        <section className="team">
            <SectionHeader
                name='TEAM'
                title='Meat Our Team'
                text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />

            <div className="team-container">
                <div className="team-card">
                    <img src={img1} alt="" />
                    <div className="team-card__text">
                        <div className="team-card__text--info">
                            <h3>Leonard Krasner</h3>
                            <h5>Senior Designer</h5>
                        </div>
                        <div className="team-card__text--icon">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <img src={img2} alt="" />
                    <div className="team-card__text">
                        <div className="team-card__text--info">
                            <h3>Leonard Krasner</h3>
                            <h5>Senior Designer</h5>
                        </div>
                        <div className="team-card__text--icon">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <img src={img3} alt="" />
                    <div className="team-card__text">
                        <div className="team-card__text--info">
                            <h3>Leonard Krasner</h3>
                            <h5>Senior Designer</h5>
                        </div>
                        <div className="team-card__text--icon">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
