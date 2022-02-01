import React from "react";

import './single-grid.scss'

import comment1 from '../../img/comment1.jpg'
import comment2 from '../../img/comment2.jpg'
import comment3 from '../../img/comment3.jpg'
import singleImg from '../../img/singleImg.jpg'
import quotation from '../../img/quotation.svg'


const SingleGrid = () => {

    return (
        <div className="single">
            <div className="single-in4">
                <div className="single-in4__header">
                    <h1 className="single__title">Web design refers to the design of websites that are displayed on the internet.</h1>
                    <div className="single-in4__user">
                        <img src={comment1} alt="" />
                        <h6>Roel Aufderhar</h6>
                        <ul>
                            <li>
                                <i className="fa fa-calendar-alt"></i>
                                10 Feb 2023
                            </li>
                            <li>
                                <i class="fas fa-tags"></i>
                                Marketing
                            </li>
                            <li>
                                <i class="far fa-clock"></i>
                                5 min read
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={singleImg} alt="" className="single-in4__img" />

                <div className="single-in4__detail">
                    <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                    <ul className="single-in4__detail--list">
                        <li>
                            <i class="far fa-check-circle"></i>
                            For those of you who are serious about having more.
                        </li>
                        <li>
                            <i class="far fa-check-circle"></i>
                            There are a million distractions in every facet of our lives.
                        </li>
                        <li>
                            <i class="far fa-check-circle"></i>
                            The sad thing is the majority of people have no clue about what they truly want.
                        </li>
                        <li>
                            <i class="far fa-check-circle"></i>
                            Once you have a clear understanding of what you want.
                        </li>
                        <li>
                            <i class="far fa-check-circle"></i>
                            Focus is having the unwavering attention to complete what you set out to do.
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                    <div className="single-in4__detail--blockquote">                 
                        <div className="single-in4__detail--blockquote-icon">
                            <i class="fas fa-quote-right"></i>
                        </div>
                        <p>"Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well."</p>
                        <span>- Epictetus, The Enchiridion</span>
                    </div>
                    <h1 className="single__title">Setting the mood with incense</h1>
                    <p>Remove aversion, then, from all things that are not in our control, and transfer it to things contrary to the nature of what is in our control. But, for the present, totally suppress desire: for, if you desire any of the things which are not in your own control, you must necessarily be disappointed; and of those which are, and which it would be laudable to desire, nothing is yet in your possession. Use only the appropriate actions of pursuit and avoidance; and even these lightly, and with gentleness and reservation.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    <div className="single-in4__detail--share">
                        <h5 className="single-in4__detail--share__title">Social Share</h5>
                        <div>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-google"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-cmt">
                <div className="single__title">Post Comments</div>
                <div className="single-cmt__post">
                    <img src={comment1} alt="" />
                    <div className="single-cmt__post-in4">
                        <div className="single-cmt__post-in4--top">
                            <h6>Arista Williamson</h6>
                            <span>
                                <i class="fas fa-reply"></i>
                                Reply
                            </span>
                        </div>
                        <h4>19th May 2023</h4>
                        <p>Donec aliquam ex ut odio dictum, ut consequat leo interdum. Aenean nunc ipsum, blandit eu enim sed, facilisis convallis orci. Etiam commodo lectus quis vulputate tincidunt. Mauris tristique velit eu magna maximus condimentum.</p>
                    </div>
                </div>
                <div className="single-cmt__post">
                    <img src={comment2} alt="" />
                    <div className="single-cmt__post-in4">
                        <div className="single-cmt__post-in4--top">
                            <h6>Rosalina Kelian</h6>
                            <span>
                                <i class="fas fa-reply"></i>
                                Reply
                            </span>
                        </div>
                        <h4>15th May 2023</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                    </div>
                </div>
                <div className="single-cmt__post">
                    <img src={comment3} alt="" />
                    <div className="single-cmt__post-in4">
                        <div className="single-cmt__post-in4--top">
                            <h6>Alex Jemmi</h6>
                            <span>
                                <i class="fas fa-reply"></i>
                                Reply
                            </span>
                        </div>
                        <h4>12th May 2023</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                    </div>
                </div>
            </div>
            <div className="single-form">
                <h1 className="single__title">Leave A Comment</h1>
                <div className="single-form__wrapper">
                    <div className="single-form__input">
                        <input type="text" placeholder="Website URL"/>
                    </div>
                    <div className="single-form__input">
                        <input type="text" placeholder="Your Name"/>
                    </div>
                    <div className="single-form__input">
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div className="single-form__input">
                        <input type="text" placeholder="Phone Number"/>
                    </div>
                    <div className="single-form__textarea">
                        <textarea name="Comment" id="" cols="30" rows="10" placeholder="Your Comment"></textarea>
                    </div>
                </div>
                <div className="button">Post Comment</div>
            </div>
        </div>
    )
}

export default SingleGrid