import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header';
import SectionHead from './components/section_head/section_head';
import SectionList from './components/section_list/section_list';
import SectionArtists from './components/section_artists/section_artists';
import SectionHighlights from './components/section_highlights/section_highlights';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <SectionHead/>
    <SectionList/>
    <SectionArtists/>
    <SectionHighlights/>
    <Footer/>
  </React.StrictMode>
);
