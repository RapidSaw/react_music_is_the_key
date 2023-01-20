import data from '../../Data/data.json';
import './section_highlights.css';

function SectionHighlights() {
    return (
        <div className='highlights-wrapper'>
            <div className='highlights-title'>{data.section_highlights.title}</div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_1.artist}</div>
                <div className='about'>{data.section_highlights.highlight_1.about}</div>
                <div className='when'>{data.section_highlights.highlight_1.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_2.artist}</div>
                <div className='about'>{data.section_highlights.highlight_2.about}</div>
                <div className='when'>{data.section_highlights.highlight_2.when}</div>
            </div>
            <div className='highlights-item'> 
                <div className='artist'>{data.section_highlights.highlight_3.artist}</div>
                <div className='about'>{data.section_highlights.highlight_3.about}</div>
                <div className='when'>{data.section_highlights.highlight_3.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_4.artist}</div>
                <div className='about'>{data.section_highlights.highlight_4.about}</div>
                <div className='when'>{data.section_highlights.highlight_4.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_5.artist}</div>
                <div className='about'>{data.section_highlights.highlight_5.about}</div>
                <div className='when'>{data.section_highlights.highlight_5.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_6.artist}</div>
                <div className='about'>{data.section_highlights.highlight_6.about}</div>
                <div className='when'>{data.section_highlights.highlight_6.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_7.artist}</div>
                <div className='about'>{data.section_highlights.highlight_7.about}</div>
                <div className='when'>{data.section_highlights.highlight_7.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_8.artist}</div>
                <div className='about'>{data.section_highlights.highlight_8.about}</div>
                <div className='when'>{data.section_highlights.highlight_8.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_9.artist}</div>
                <div className='about'>{data.section_highlights.highlight_9.about}</div>
                <div className='when'>{data.section_highlights.highlight_9.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_10.artist}</div>
                <div className='about'>{data.section_highlights.highlight_10.about}</div>
                <div className='when'>{data.section_highlights.highlight_10.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_11.artist}</div>
                <div className='about'>{data.section_highlights.highlight_11.about}</div>
                <div className='when'>{data.section_highlights.highlight_11.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_12.artist}</div>
                <div className='about'>{data.section_highlights.highlight_12.about}</div>
                <div className='when'>{data.section_highlights.highlight_12.when}</div>
            </div>
            <div className='highlights-item'>
                <div className='artist'>{data.section_highlights.highlight_13.artist}</div>
                <div className='about'>{data.section_highlights.highlight_13.about}</div>
                <div className='when'>{data.section_highlights.highlight_13.when}</div>
            </div>
        </div>
    )   
}

export default SectionHighlights