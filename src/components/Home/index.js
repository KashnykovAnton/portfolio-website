import { Link } from "react-router-dom"
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm 
                Anton
                <br/>
                web developer</h1>
                <h2>Frontend / JavaScript / React Developer</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home