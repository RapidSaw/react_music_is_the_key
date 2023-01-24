import data from '../../Data/data.json'
import './section_list.css'

function SectionList(props) {
    return (
        <div className="list-wrapper">
            <div className="list-item list-order">
                <div className='list-item-wrapper'>
                    <h2>{props.data.experience.title}</h2>
                    <p>{props.data.experience.text}</p>
                    <button>{props.data.experience.button}</button>
                </div>
            </div>
            <div className="list-title list-order">
                <p>{props.data.experience.main_title}</p>
            </div>
            <div className="list-title list-order">
            <p>{props.data.exchange.main_title}</p>
            </div>
            <div className="list-item list-order">
                <div className='list-item-wrapper'>
                    <h2>{props.data.exchange.title}</h2>
                    <p>{props.data.exchange.text}</p>
                    <button>{props.data.exchange.button}</button>
                </div>
            </div>
            <div className="list-item list-order">
                <div className='list-item-wrapper'>
                    <h2>{props.data.support.title}</h2>
                    <p>{props.data.support.text}</p>
                    <button>{props.data.support.button}</button>
                </div>
            </div>
            <div className="list-title list-order">
            <p>{props.data.support.main_title}</p>
            </div>
        </div>
    )
}

export default SectionList