import './section_artists.css';
function SectionArtists(props) {
    return (
        <div className='section-artists-wrapper'>
            <div className='title'>
                {props.data.title}
            </div>
            <div className='artists-wrapper'>
                <div className='artist-item'>
                    <div className='artists-content-wrapper'>
                        <h2>{props.data.artist_1.title}</h2>
                        <p>{props.data.artist_1.description}</p>
                    </div>
                </div>
                <div className='artist-item'>
                    <div className='artists-content-wrapper'>
                        <h2>{props.data.artist_2.title}</h2>
                        <p>{props.data.artist_2.description}</p>
                    </div>
                </div>
                <div className='artist-item'>
                    <div className='artists-content-wrapper'>
                        <h2>{props.data.artist_3.title}</h2>
                        <p>{props.data.artist_3.description}</p>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <div className='left-button'></div>
                <div className='right-button'></div>
            </div>
        </div>
    )
}

export default SectionArtists;