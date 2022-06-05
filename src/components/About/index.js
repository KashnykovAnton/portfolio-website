import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
                    If you are looking to hire a Junior Developer to be involved in your
                    burning projects or you're just looking opportunities for company
                    growth and ways of staff improvement - I'm the person to you
                    might be wanna chat first.
                </p>
                <p>
                    Because I've got deeply understanding of
                    how things going on in business processes, and I bet - my TECH
                    skills would optimally meet your requirements.
                </p>
                <p>
                    And if not - I can
                    easily deal with trainings and studies, because I really love coding!
                </p>

            </div>
            <div className='stage-cube-cont' >
            {/* <div class="stage" style={{width: "120px", height: "120px"}}> */}
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        {/* 1 */}
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        {/* 2 */}
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faSass} color='#DD0031'/>
                        {/* 3 */}
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        {/* 4 */}
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        {/* 5 */}
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                        {/* 6 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About