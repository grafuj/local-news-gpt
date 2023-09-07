import React from "react"; // Import React
import Head from "next/head"; // Import Next.js's Head component
import "./index.module.css"


export const LocalNewsPage = (props) => {
  const { result } = props;

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png" />
        <link href="style.css" rel="stylesheet" />
      </Head>
      <body>
        <div className="parent-div">
          <div className="nav">
            <div className="title">
              Aurosbordshire
            </div>
            <div className="nav-element-container">
              <div className="nav-element">
                Home
              </div>
              <div className="nav-element">
                New
              </div>
              <div className="nav-element">
                Popular
              </div>
              <div className="nav-element">
                Trending
              </div>
              <div className="nav-element">
                Categories
              </div>
            </div>
          </div>

          <div className="image-container">
            <div className="image-with-subtext">
              <div className="blocks-image">
                <img src="assets/images/image-web-3-desktop.jpg" alt="Colourful Blocks" className="limit-img-width" />
              </div>

              <div className="image-subtext">
                <div className="catchy-title">
                  The Bright Future
                </div>
                <div className="read-more-container">
                  <div className="read-more-subtext">
                    We dive into the next evolution of the web that claims
                    to put the power of the platforms back into the hands
                    of the people. But is it really fulfilling its promise?
                    {result && result[3]}
                  </div>


                  <button className="read-more-button">READ MORE</button>

                </div>
              </div>
            </div>

            <div className="new-items">
              <div className="new-items-header">
                New
              </div>

              <div className="new-item">
                <h3 className="bold-titles"> Hydrogen VS Electric Cars </h3>
                <p> Will hydrogen-fueled cars ever catch up to EVs? </p>
              </div>

              <hr className="hr-separator" />

              <div className="new-item">
                <h3 className="bold-titles">The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
              </div>

              <hr className="hr-separator" />

              <div className="new-item">
                <h3 className="bold-titles">Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>

            </div>
          </div>


          <div className="story-tiles">
            <div className="story-tile">
              <div className="story-number">
                Story 01
              </div>
              <h3 className="bold-titles">Reviving Retro PCs</h3>
              What happens when old PCs are given modern upgrades?
            </div>
            <div className="story-tile">
              <div className="story-number">
                Story 02
              </div>
              <h3 className="bold-titles">Top 10 Laptops of 2022</h3>
              Our best picks for various needs and budgets.
            </div>
            <div className="story-tile">
              <div className="story-number">
                Story 03
              </div>
              <h3 className="bold-titles">The Growth of Gaming</h3>
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>

          <hr className="hr-separator" />

          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Code by <a href="https://github.com/grafuj/news-homepage">grafuj</a>.
          </div>
        </div>
      </body>
    </>
  );
};