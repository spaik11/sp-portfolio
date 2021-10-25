import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useBreakpoints } from './util/mediaQuery';

export default function Navbar() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const breakpoint = useBreakpoints();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);

      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  //   scrollToBottom = () => {
  //     scroll.scrollToBottom();
  //   };

  //   scrollTo = () => {
  //     scroll.scrollTo(100);
  //   };

  //   scrollMore = () => {
  //     scroll.scrollMore(100);
  //   };

  const handleSetActive = (to) => {
    console.log(to);
  };

  // Hide or show the menu.
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
  };

  return (
    <div
      className={classnames('navbar', {
        'navbar--hidden': !visible,
      })}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}>
        <h1
          className="logo"
          style={
            breakpoint.isMobileSmall
              ? { fontSize: '10px', color: 'black', marginLeft: '5px' }
              : { color: 'black', marginRight: '20px', marginLeft: '20px' }
          }>
          Dev Portfolio
        </h1>
      </Link>
      <nav>
        <div
          style={
            breakpoint.isMobileSmall
              ? { fontSize: '5px', color: 'black' }
              : null
          }>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
