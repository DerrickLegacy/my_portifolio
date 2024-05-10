import React from 'react'

import './works.css'
import java from '../../assets/java.png'
import laravaelPHP from '../../assets/php-laravel.png'
import reactImg from '../../assets/react.png'
import codeIgnitImg from '../../assets/codeigniter.png'
import mysql from '../../assets/mysql.png'
import c_programming from '../../assets/c_programming.png'

function Works() {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Works</h2>
            <span className="worksDescription">I take this opportunity to pay attention to smallest details</span>
            <div className="worksImgs">
                <img src={reactImg} alt="react" className="worksImg" />
                <img src={laravaelPHP} alt="laravaelPHP" className="worksImg" />
                <img src={java} alt="java" className="worksImg" />
                <img src={codeIgnitImg} alt="codeIgnitImg" className="worksImg" />
                <img src={mysql} alt="mysql" className="worksImg" />
                <img src={c_programming} alt=" c programming" className="worksImg" />
            </div>
            <button className="worksBtn">See more</button>
        </section>
    )
}

export default Works