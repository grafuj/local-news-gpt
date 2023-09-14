import React from "react"; // Import React
import Head from "next/head"; // Import Next.js's Head component
import styles from "./index.module.css";
import { useNewsContext } from "./NewsContext";

export const LocalNewsPage = (props) => {
  // console.log("props:", props)
  const { LNPCityInput, LNPResult } = useNewsContext;
  console.log("7 LocalNewsPage: city, res", LNPCityInput, LNPResult);
  // <LocalNewsPage LNPCityInput={newsCityInput} LNPResult={newsResult} /> //making sure the props passed in properly

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png" />
      </Head>
      <>
        <div className={styles["parent-div"]}>
          <div className={styles.nav}>
            <div className={styles.title}>
              {LNPCityInput ? (
                { LNPCityInput }
              ) : (
                <a>Loading...</a> // Show a loading indicator until the data is available
              )}
            </div>
            <div className={styles["nav-element-container"]}>
              <div className={styles["nav-element"]}>
                Home
              </div>
              <div className={styles["nav-element"]}>
                New
              </div>
              <div className={styles["nav-element"]}>
                Popular
              </div>
              <div className={styles["nav-element"]}>
                Trending
              </div>
              <div className={styles["nav-element"]}>
                Categories
              </div>
            </div>
          </div>

          <div className={styles["image-container"]}>
            <div className={styles["image-with-subtext"]}>
              <div className={styles["blocks-image"]}>
                <img src="assets/images/blocks.jpg" alt="Colourful Blocks" className={styles["limit-img-width"]} />
              </div>

              <div className={styles["image-subtext"]}>
                <div className={styles["catchy-title"]}>
                  The Bright Future
                </div>
                <div className={styles["read-more-container"]}>
                  <div className={styles["read-more-subtext"]}>
                    We dive into the next evolution of the web that claims
                    to put the power of the platforms back into the hands
                    of the people. But is it really fulfilling its promise?
                    {LNPResult && LNPResult[0].description}
                  </div>

                  <button className={styles["read-more-button"]}>READ MORE</button>
                </div>
              </div>
            </div>

            <div className={styles["new-items"]}>
              <div className={styles["new-items-header"]}>
                New
              </div>

              <div className={styles["new-item"]}>
                <h3 className={styles["bold-titles"]}>{LNPResult && LNPResult[0].title}</h3>
                <p> Will hydrogen-fueled cars ever catch up to EVs? </p>
              </div>

              <hr className={styles["hr-separator"]} />

              <div className={styles["new-item"]}>
                <h3 className={styles["bold-titles"]}>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
              </div>

              <hr className={styles["hr-separator"]} />

              <div className={styles["new-item"]}>
                <h3 className={styles["bold-titles"]}>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </div>
          </div>

          <div className={styles["story-tiles"]}>
            <div className={styles["story-tile"]}>
              <div className={styles["story-number"]}>
                Story 01
              </div>
              <h3 className={styles["bold-titles"]}>Reviving Retro PCs</h3>
              What happens when old PCs are given modern upgrades?
            </div>
            <div className={styles["story-tile"]}>
              <div className={styles["story-number"]}>
                Story 02
              </div>
              <h3 className={styles["bold-titles"]}>Top 10 Laptops of 2022</h3>
              Our best picks for various needs and budgets.
            </div>
            <div className={styles["story-tile"]}>
              <div className={styles["story-number"]}>
                Story 03
              </div>
              <h3 className={styles["bold-titles"]}>The Growth of Gaming</h3>
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>

          <hr className={styles["hr-separator"]} />

          <div className={styles["attribution"]}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Code by <a href="https://github.com/grafuj/news-homepage">grafuj</a>.
          </div>
        </div>
      </>
    </>
  );
};
