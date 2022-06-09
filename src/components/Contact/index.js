import {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_rv8x45m',
            'template_857dbbs',
            form.current,
            'iAtnDTL6IENaKC8F_'
            
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters  letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}></AnimatedLetters>
                    </h1>
                    <p>
                    I am open to any project that will allow your business to grow and me to develop. 
                    If you have any questions or suggestions, contact me using below form.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Kashnykov Anton,
                    <br />
                    Slovakia, Kosice
                    <br />
                    +421-905-156-629
                    <br />
                    <a href="mailto:kashnykov.anton@gmail.com">kashnykov.anton@gmail.com</a>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[48.720081, 21.258346]} zoom={15}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[48.720081, 21.258346]}>
                            <Popup>Center of Kosice</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact