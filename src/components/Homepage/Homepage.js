import React, { useState, useContext, useEffect } from 'react';
import './Homepage.css';
import $ from 'jquery';
import FlightIcon from '@mui/icons-material/Flight';
import GeneralContext from "../../contexts/GeneralContext.js";

const Homepage = () => {
  const {scrollPosition} = useContext(GeneralContext);

  const [opacity, setOpacity] = useState(0);
  const [opacityContent, setOpacityContent] = useState(1);
  const [homePageScrollPosition, setHomePageScrollPosition] = useState(scrollPosition);

  const startOpacity = 5/100 * $(window).height();
  const endOpacity = 35/100 * $(window).height();
  const pasOpacity = 1 / (endOpacity - startOpacity);

  let lastY = $(window).scrollTop();

  useEffect(() => {
    $('header > h1').css("opacity", 1);
  }, []);

  const handleScroll = () => {
    const currY = $(window).scrollTop();

    const upOrNone = (currY === lastY) ? 'none' : 'up';

    const direction = (currY > lastY) ? 'down' : upOrNone;

    lastY = currY;
    setHomePageScrollPosition(lastY);

    if (homePageScrollPosition < startOpacity && homePageScrollPosition !== undefined) {
      setOpacity(1);
      setOpacityContent(0);
    } else if (homePageScrollPosition > startOpacity && homePageScrollPosition < endOpacity) {
      if (direction === "down") {
        setOpacity(opacity - ((lastY - startOpacity) * pasOpacity));
        setOpacityContent(opacityContent + ((lastY - startOpacity) * pasOpacity));
      } else {
        setOpacity(opacity + ((lastY - startOpacity) * pasOpacity));
        setOpacityContent(opacityContent - ((lastY - startOpacity) * pasOpacity));
      }
    } else if (homePageScrollPosition > endOpacity) {
      setOpacity(0);
      setOpacityContent(1);
    }

    $('#homepageContainer').css("background-color", "rgba(0, 0, 0, "+opacityContent+")");
    $('header > h1').css("opacity", opacity);
    $('section > h2').css("opacity", opacityContent);
    $('nav').css("opacity", opacityContent);

    let titleSize = "min(10vw, "+ (46 + $(window).scrollTop()) +"px)";
    let backgroundSize = 100 + $(window).scrollTop() + '%';
    if ($('#homepageContainer').css("background-size") && $('#homepageContainer').css("background-size").indexOf('px') !== -1) {
      backgroundSize = 130 + $(window).scrollTop() + '% '+(100 + $(window).scrollTop())+'vh';
    }
    $('#homepageContainer').css("background-size", backgroundSize);
    $('header > h1').css("font-size", titleSize);
  
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div id="homepageContainer">
      <main className="app">
        <header>
          <h1 className="">Travel Agency</h1>
        </header>
      </main>
      <section>
        <h2>Notre Concept</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias repudiandae repellendus eveniet porro ab ad natus, amet iusto, quia vel labore. Odit aspernatur rem nemo amet error nisi, recusandae officia eveniet aliquam eaque?</p>
        <FlightIcon className="planeIcon"></FlightIcon>
      </section>
    </div>
  );
}

export default Homepage;
