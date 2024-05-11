import React, { useState } from 'react'

import './works.css'
import java from '../../assets/java.png'
import laravaelPHP from '../../assets/php-laravel.png'
import reactImg from '../../assets/react.png'
import codeIgnitImg from '../../assets/codeigniter.png'
import mysql from '../../assets/mysql.png'
import c_programming from '../../assets/c_programming.png'
import github from '../../assets/github.png'

function Works() {

    const [showMore, setShowMore] = useState(false)

    return (
        <section id='works'>
            <h2 className="worksTitle">Technologies</h2>
            <span className="worksDescription">I take this opportunity to pay attention to smallest details</span>
            <div className="worksImgs">
                <figure className="figureCaption">
                    <a href="https://react.dev/">
                        <img src={reactImg} alt="React" className="worksImg" />
                    </a>
                    <figcaption className="caption">
                        <a href="https://react.dev/">React</a>
                    </figcaption>
                </figure>

                <figure className="figureCaption">
                    <a href="https://laravel.com/">
                        <img src={laravaelPHP} alt="Laravel PHP" className="worksImg" />
                    </a>
                    <figcaption className="caption">
                        <a href="https://laravel.com/">Laravel PHP</a>
                    </figcaption>
                </figure>

                <figure className="figureCaption">
                    <a href="https://www.java.com/en/">
                        <img src={java} alt="Java" className="worksImg" />
                    </a>
                    <figcaption className="caption">
                        <a href="https://www.java.com/en/">Java</a>
                    </figcaption>
                </figure>

                <figure className="figureCaption">
                    <a href="https://codeigniter.com/">
                        <img src={codeIgnitImg} alt="CodeIgniter" className="worksImg" />
                    </a>
                    <figcaption className="caption">
                        <a href="https://codeigniter.com/">CodeIgniter</a>
                    </figcaption>
                </figure>

                <figure className="figureCaption">
                    <a href="https://www.mysql.com/">
                        <img src={mysql} alt="MySQL" className="worksImg" />
                    </a>
                    <figcaption className="caption">
                        <a href="https://www.mysql.com/">MySQL</a>
                    </figcaption>
                </figure>

                <figure className="figureCaption">
                    <a href="https://en.cppreference.com/w/">
                        <img src={c_programming} alt="C Programming" className="worksImg" />
                    </a>
                    <figcaption className="caption">
                        <a href="https://en.cppreference.com/w/">C Programming</a>
                    </figcaption>
                </figure>
                {showMore ?

                    <figure className="figureCaption">
                        <a href="https://github.com/">
                            <img src={github} alt="GitHub" className="worksImg" />
                        </a>
                        <figcaption className="caption">
                            <a href="https://github.com/">GitHub</a>
                        </figcaption>
                    </figure>
                    : null}

            </div>
            <button className="worksBtn" onClick={() => {
                setShowMore(!showMore)

            }}>
                {showMore ? "Show Less" : "See more"}
            </button>
        </section>
    )
}

export default Works