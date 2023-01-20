import data from '../../Data/data.json'
import './footer.css'

function Footer() {
    return (
        <footer>
            <h1>{data.footer.title}</h1>
            <button>{data.footer.button}</button>
        </footer>
    )
}

export default Footer