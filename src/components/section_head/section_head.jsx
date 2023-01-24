import './section_head.css'
import data from '../../Data/data.json'

function SectionHead(props) {
    return (
        <div className='section-head-wrapper'>
            <h1>{props.data.title}</h1>
            <div><a href="https://developer.mozilla.org/">{props.data.link}</a></div>
        </div>
    )
}

export default SectionHead