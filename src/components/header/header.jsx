import './header.css';
import data from '../../Data/data.json'
import logo from './assets/Frame.png'
import fb from './assets/fb.png'
import inst from './assets/inst.png'
import tw from './assets/tw.png'

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt=""/>
      </div>
      <nav className='navigation'>
        <a href="https://developer.mozilla.org/">{data.header.nav.link_1}</a>
        <a href="https://developer.mozilla.org/">{data.header.nav.link_2}</a>
        <a href="https://developer.mozilla.org/">{data.header.nav.link_3}</a>
        <a href="https://developer.mozilla.org/">{data.header.nav.link_4}</a>
      </nav>
      <div className='login-wrapper'>
        <div className='login'>
          <a href="https://developer.mozilla.org/">{data.header.login.button_1}</a>
          <a href="https://developer.mozilla.org/">{data.header.login.button_2}</a>
          <a href="https://developer.mozilla.org/">{data.header.login.button_3}</a>
        </div>
        <div className='socials'>
          <a href="https://developer.mozilla.org/"><img src={fb} alt="" /></a>
          <a href="https://developer.mozilla.org/"><img src={inst} alt="" /></a>
          <a href="https://developer.mozilla.org/"><img src={tw} alt="" /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;