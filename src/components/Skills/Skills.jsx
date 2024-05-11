import React from 'react'

import './skills.css'
import backEndImg from '../../assets/backend_dev.png'
import frontEndImg from '../../assets/frontend.jpeg'
import UIDesignerImg from '../../assets/UI.jpeg'

function Skills() {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDescription">
                Seasoned full-stack developer adept at building robust web applications from concept to deployment. Proficient in both front-end and back-end development, with a focus on delivering scalable and user-centric solutions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesignerImg} alt="UI Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI Designer</h2>
                        <p>This is demo text, write your own perhaps</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={frontEndImg} alt="Front End designer" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>ront End Developer</h2>
                        <p>This is demo text, write your own perhaps</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={backEndImg} alt="Backend dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Back Ender Dev</h2>
                        <p>This is demo text, write your own perhaps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills