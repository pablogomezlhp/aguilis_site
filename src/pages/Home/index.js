import React from "react";


import "./styles.css";

import about from "../../assets/about.png";
import arrow from "../../assets/arrow.svg";
import arrowl from "../../assets/arrowl.svg";

import cd from "../../assets/cd.png"



export default function Home() {
  return (
    <>
      <div className="titlee">
        <h1>OFF</h1>
        <h1 id="hov">ON</h1>
        <h1>OFF</h1>
        <p className="scroll">
          SCROLL <img id="arrow" src={arrow} alt="" />
        </p>
      </div>
      <div id="about">
        <img id="about-image" src={about} alt="" />
        <p className="about">about</p>
        <p className="about-text">
          duo appeared in the scene august 2015 with the album mood. part of the
          south korean hiphop crew clubeskimo, 2015. joined highgrnd in march
          2016.
        </p>
        <table>
          <tr>
            <p className="text-table">ig</p> <p className="text-table">sc</p>{" "}
            <p className="text-table">yt</p>
          </tr>
        </table>
      </div>
      <section className="banner">
      <div id="banner-image1" >
        <div className="item-block">
        <p className="banner-text">//[boy.] Colde kim heesoo (김희수) 19940510 singer ig @wavycolde</p>
        </div>
      </div>
      < div id="banner-image2">
      <div className="item-block">
        <p className="banner-text">//[boy.] 0channel seo jiho (서지호) 19940416 dj/producer @0_channel</p>
        </div>
      </div>
      </section>
      <section className="disc">
      <p className="music">musics</p>
      <img className="cd" src={cd} alt=""/>
      <p className="music-text">// [mood.] 2015 <br /><br /><br /><br />first album<br /> 1. Dreamgirl<br />2. Cloud <br />3. Pink Ocean / Bambada<br />4. 메모 (interlude)<br />5. midnight<br />6. blu<br /><br />To know more click here.</p>
      </section>
      <section className="korean-word">
      <img id="arrowl" src={arrowl} alt="" />
        <p className="korean-text">하늘의 달은 나의 맘처럼 떠 있어<br />우리의 사랑은</p>
      </section>
      <section className="credits">
      <p className="creditss">credits</p>
        <div className="credit-image"></div>
        <div className="credit-div">
          <p className="credit-text">I would like to express my admiration to this duo.<br />This website is a fanmade version<br />designed by Aguilis in 2020.<br />All text is set in Inter (Rasmus<br />Andersson) and Courier (Howard<br />Kettler).<br />All the images are from HIGHGRNDR<br />and the texts are from @colde0channel</p>
        </div>
      </section>
      <footer>2020 @PABLO GOMES</footer>
    </>
  );
}
