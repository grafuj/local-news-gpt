import React from "react"; // Import React
import Head from "next/head"; // Import Next.js's Head component

export const LocalNewsPage = (props) => {
  console.log("props:", props);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png" />
        <link href="style.css" rel="stylesheet" />
      </Head>
      <body>

        <div class="nav">
          <div class="title">
            Aurosbordshire
          </div>
          <div class="nav-element-container">
            <div class="nav-element">
              Home
            </div>
            <div class="nav-element">
              New
            </div>
            <div class="nav-element">
              Popular
            </div>
            <div class="nav-element">
              Trending
            </div>
            <div class="nav-element">
              Categories
            </div>
          </div>
        </div>

        <div class="image-container">
          <div class="image-with-subtext">
            <div class="blocks-image">
              <img src="assets/images/image-web-3-desktop.jpg" alt="Colourful Blocks" class="limit-img-width" />
            </div>

            <div class="image-subtext">
              <div class="catchy-title">
                The Bright Future of Web 3.0?
              </div>
              <div class="read-more-container">
                <div class="read-more-subtext">
                  We dive into the next evolution of the web that claims
                  to put the power of the platforms back into the hands
                  of the people. But is it really fulfilling its promise?
                </div>


                <button class="read-more-button">READ MORE</button>

              </div>
            </div>
          </div>

          <div class="new-items">
            <div class="new-items-header">
              New
            </div>

            <div class="new-item">
              <h3 class="bold-titles"> Hydrogen VS Electric Cars </h3>
              <p> Will hydrogen-fueled cars ever catch up to EVs? </p>
            </div>

            <hr class="hr-separator" />

            <div class="new-item">
              <h3 class="bold-titles">The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>

            <hr class="hr-separator" />

            <div class="new-item">
              <h3 class="bold-titles">Is VC Funding Drying Up?</h3>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>

          </div>
        </div>


        <div class="story-tiles">
          <div class="story-tile">
            <div class="story-number">
              Story 01
            </div>
            <h3 class="bold-titles">Reviving Retro PCs</h3>
            What happens when old PCs are given modern upgrades?
          </div>
          <div class="story-tile">
            <div class="story-number">
              Story 02
            </div>
            <h3 class="bold-titles">Top 10 Laptops of 2022</h3>
            Our best picks for various needs and budgets.
          </div>
          <div class="story-tile">
            <div class="story-number">
              Story 03
            </div>
            <h3 class="bold-titles">The Growth of Gaming</h3>
            How the pandemic has sparked fresh opportunities.
          </div>
        </div>

        <hr class="hr-separator" />

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Code by <a href="https://github.com/grafuj/news-homepage">grafuj</a>.
        </div>
      </body>
    </>
  );
};