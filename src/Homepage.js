import { useState } from 'react';
import './App.css';
import $ from 'jquery';

function Homepage() {

  const [opacity, setOpacity] = useState(1);
  const [opacityContent, setOpacityContent] = useState(0);
  const [scrollPosition, setScrollPosition] = useState();
  const [scrollDirection, setScrollDirection] = useState();

  const startOpacity = 5/100 * $(window).height();
  const endOpacity = 35/100 * $(window).height();
  const pasOpacity = 1 / (endOpacity - startOpacity);

  let lastY = $(window).scrollTop();


  const handleScroll = event => {
    
    const currY = $(window).scrollTop();

    const direction = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');

    lastY = currY;
    setScrollPosition(lastY);

    if ($(window).scrollTop() < startOpacity) {
      setOpacity(1);
      setOpacityContent(0);

    } else if ($(window).scrollTop() > startOpacity && $(window).scrollTop() < endOpacity) {
      if (direction === "down") {
        setOpacity(opacity - ((lastY - startOpacity) * pasOpacity));
        setOpacityContent(opacityContent + ((lastY - startOpacity) * pasOpacity));
      } else {
        setOpacity(opacity + ((lastY - startOpacity) * pasOpacity));
        setOpacityContent(opacityContent - ((lastY - startOpacity) * pasOpacity));
      }

    } else if ($(window).scrollTop() > endOpacity) {
      setOpacity(0);
      setOpacityContent(1);
    }

    $('#root').css("background-color", "rgba(0, 0, 0, "+opacityContent+")");
    $('header > h1').css("opacity", opacity);
    $('section > h2').css("opacity", opacityContent);

    let titleSize = "min(10vw, "+ (46 + $(window).scrollTop()) +"px)";
    let backgroundSize = 100 + $(window).scrollTop() + '%';
    if ($('#root').css("background-size").indexOf('px') != -1) {
      backgroundSize = 130 + $(window).scrollTop() + '% '+(100 + $(window).scrollTop())+'vh';
    }
    $('#root').css("background-size", backgroundSize);
    $('header > h1').css("font-size", titleSize);
  
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <main className="app">
        <header>
          <h1 className="">Travel Agency</h1>
        </header>
      </main>
      <section>
        <h2>Cecie est mon agence</h2>
      </section>
    </>
  );
}

export default Homepage;
