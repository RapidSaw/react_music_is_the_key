
import './footer.css'

function Footer(props) {
    return (
        <footer>
            <h1>{props.data.title}</h1>
            <button>{props.data.button}</button>
        </footer>
    )
}

export default Footer