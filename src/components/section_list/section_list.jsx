import data from '../../Data/data.json'
import './section_list.css'

function SectionList() {
    return (
        <div className="list-wrapper">
            <div className="list-item">
                <div className='list-item-wrapper'>
                    <h2>{data.section_list.experience.title}</h2>
                    <p>{data.section_list.experience.text}</p>
                    <button>{data.section_list.experience.button}</button>
                </div>
            </div>
            <div className="list-title">
                <p>{data.section_list.experience.main_title}</p>
            </div>
            <div className="list-title">
            <p>{data.section_list.exchange.main_title}</p>
            </div>
            <div className="list-item">
                <div className='list-item-wrapper'>
                    <h2>{data.section_list.exchange.title}</h2>
                    <p>{data.section_list.exchange.text}</p>
                    <button>{data.section_list.exchange.button}</button>
                </div>
            </div>
            <div className="list-item">
                <div className='list-item-wrapper'>
                    <h2>{data.section_list.support.title}</h2>
                    <p>{data.section_list.support.text}</p>
                    <button>{data.section_list.support.button}</button>
                </div>
            </div>
            <div className="list-title">
            <p>{data.section_list.support.main_title}</p>
            </div>
        </div>
    )
}

export default SectionList