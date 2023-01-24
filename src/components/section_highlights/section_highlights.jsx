import './section_highlights.css';

function SectionHighlights(props) {
    return (
        <div className='highlights-wrapper'>
            <div className='highlights-title'>{props.data.title}</div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_1.artist}</div>
                <div className='about'>{props.data.highlight_1.about}</div>
                <div className='when'>{props.data.highlight_1.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_2.artist}</div>
                <div className='about'>{props.data.highlight_2.about}</div>
                <div className='when'>{props.data.highlight_2.when}</div>
            </div>
            <div className='highlights-item'> 
                <div className='artist'>{props.data.highlight_3.artist}</div>
                <div className='about'>{props.data.highlight_3.about}</div>
                <div className='when'>{props.data.highlight_3.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_4.artist}</div>
                <div className='about'>{props.data.highlight_4.about}</div>
                <div className='when'>{props.data.highlight_4.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_5.artist}</div>
                <div className='about'>{props.data.highlight_5.about}</div>
                <div className='when'>{props.data.highlight_5.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_6.artist}</div>
                <div className='about'>{props.data.highlight_6.about}</div>
                <div className='when'>{props.data.highlight_6.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_7.artist}</div>
                <div className='about'>{props.data.highlight_7.about}</div>
                <div className='when'>{props.data.highlight_7.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_8.artist}</div>
                <div className='about'>{props.data.highlight_8.about}</div>
                <div className='when'>{props.data.highlight_8.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_9.artist}</div>
                <div className='about'>{props.data.highlight_9.about}</div>
                <div className='when'>{props.data.highlight_9.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_10.artist}</div>
                <div className='about'>{props.data.highlight_10.about}</div>
                <div className='when'>{props.data.highlight_10.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_11.artist}</div>
                <div className='about'>{props.data.highlight_11.about}</div>
                <div className='when'>{props.data.highlight_11.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_12.artist}</div>
                <div className='about'>{props.data.highlight_12.about}</div>
                <div className='when'>{props.data.highlight_12.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{props.data.highlight_13.artist}</div>
                <div className='about'>{props.data.highlight_13.about}</div>
                <div className='when'>{props.data.highlight_13.when}</div>
            </div>
        </div>
    )   
}

export default SectionHighlights