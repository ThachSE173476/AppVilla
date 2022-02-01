import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './features.scss'

const Features = () => {
    return (
        <section className="features">
            <SectionHeader
                name='Features'
                title='Your Experience Gets Better And Better Over Time'
                text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />

            <div className="features-wrapper">
                <div className="features-item">
                    <div className="features-item-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <h3>Push to Deploy</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                </div>
                <div className="features-item">
                    <div className="features-item-icon">
                    <i className="fas fa-lock"></i>
                    </div>
                    <h3>SSL Certificates</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                </div>
                <div className="features-item">
                    <div className="features-item-icon">
                        <i className="fas fa-sync-alt"></i>
                    </div>
                    <h3>Simple Queues</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                </div>
                <div className="features-item">
                    <div className="features-item-icon">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3>Advanced Security</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                </div>
                <div className="features-item">
                    <div className="features-item-icon">
                        <i className="fas fa-cog"></i>
                    </div>
                    <h3>Powerful API</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                </div>
                <div className="features-item">
                    <div className="features-item-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h3>Database backups</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                </div>
            </div>

        </section>
    )
}

export default Features
