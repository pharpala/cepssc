import React, { useRef } from 'react'
import blankpfp from '../../assets/blank-pfp.webp'
import michaela from '../../assets/michaela.jpg'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import me from '../../assets/me.jpeg'
import alex from '../../assets/alex.jpg'
import ellena from '../../assets/ellena.jpeg'
import marcus from '../../assets/marcus.jpg'
import noel from '../../assets/noel.jpg'


const Team = () => {

    const slider = useRef()
    let tx = 0

    const slideForward = () => {
        if(tx > -65){
            tx -= 16.67
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 16.67
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={nexticon} alt="next" className='next-btn' onClick={slideForward}/>
        <img src={backicon} alt="next" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={michaela} alt="user" />
                            <div>
                                <h3 className='michaela'>Michaela Hishon </h3>
                                <span>President</span>
                            </div>
                        </div>
                        <p>
                        As President, Michaela is responsible for overseeing 
                        the commitee and ensuring that all events run smoothly. 
                        </p>
                    </div>
                </li>

                

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={ellena} alt="user" />
                            <div>
                                <h3 className='elena'>Ellena Song</h3>
                                <span> VP of Communications </span>
                            </div>
                        </div>
                        <p>
                            Ellena is responsible for managing the club's social media
                            and answering all enqueries.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={me} alt="user" />
                            <div>
                                <h3 className='pranay'> Pranay Harpalani </h3>
                                <span> VP of Social Affairs </span>
                            </div>
                        </div>
                        <p>
                            Pranay runs all the events and ensures that everyone has a great time 
                            while advancing their career.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={noel} alt="user" />
                            <div>
                                <h3 className='noel-h3'> Noel Johnston </h3>
                                <span> VP of External Affairs </span>
                            </div>
                        </div>
                        <p>
                        Noel is responsible for building and maintaining 
                        relationships with external organizations. 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={marcus} alt="user" />
                            <div>
                                <h3> Marcus Aldred-Ganhao </h3>
                                <span> VP of Internal Affairs </span>
                            </div>
                        </div>
                        <p>
                            Marcus oversees all internal operations and 
                            ensures smooth communication within the organization.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={alex} alt="user" />
                            <div>
                                <h3 className='alex-h3'> Alex MacKay </h3>
                                <span> VP of Finance </span>
                            </div>
                        </div>
                        <p className='alex'>
                            Alex manages all the organizations finances and
                            makes sure we stay within budget.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Team
