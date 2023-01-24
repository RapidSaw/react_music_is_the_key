import data from './Data/data.json'
import Header from './components/header/header';
import SectionHead from './components/section_head/section_head';
import SectionList from './components/section_list/section_list';
import SectionArtists from './components/section_artists/section_artists';
import SectionHighlights from './components/section_highlights/section_highlights';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header data={data.header}/>
      <SectionHead data={data.section_head}/>
      <SectionList data={data.section_list}/>
      <SectionArtists data={data.section_artists}/>
      <SectionHighlights data={data.section_highlights}/>
      <Footer data={data.footer}/>
    </>
  );
}

export default App;
