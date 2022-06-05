import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ', 'A', 'n', 't', 'o', 'n']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]


      useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                {/* <span className='tags top-tags'>&lt;h1&gt;</span> */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _10`}>i</span>
                    <span className={`${letterClass} _11`}>,</span>

                    <br/>
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _13`}>'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>
                </h1>
                {/* <span className='bottom-tag-html'>&lt;/h1&gt;</span> */}
                <h2>Frontend / JavaScript / React Developer</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home