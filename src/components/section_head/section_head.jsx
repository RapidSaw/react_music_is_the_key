import './section_head.css'
import data from '../../Data/data.json'

function SectionHead() {
    return (
        <div className='section-head-wrapper'>
            <h1>{data.section_head.title}</h1>
            <div><a href="https://developer.mozilla.org/">{data.section_head.link}</a></div>
        </div>
    )
}

export default SectionHead