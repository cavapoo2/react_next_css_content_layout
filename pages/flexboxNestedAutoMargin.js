import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
  <div>
  <HeaderLayout/>
  <Layout>
  <body>
  <div class="article-teaser-group">
    <div class="article-teaser">
      <h2>The Dragon and other spaceships</h2>
      <div class="article-teaser-text">
        <p>There are actual spaceships,
          flying in space right now, probably. For example, there’s the International Space Station, which is 
          a spaceship of sorts. Well, actually it’s a space station, which is even cooler!</p>
        </div>
     {/*   <!-- image from SpaceX on Flick: https://flic.kr/p/rzuQdb -->*/}
        <img src="static/medium_spaceship.jpg" alt="The Dragon spaceship in orbit around Earth."/>
        <p class="article-teaser-more">
          <a href="/spaceships">Read the whole Spaceship article</a>
        </p>
      </div>
      <div class="article-teaser">
        <h2>Mission to mars</h2>
        <div class="article-teaser-text">
          <p>This is a pretty cool article about spaceships flying to Mars.</p>
        </div>
       {/* <!-- image from SpaceX on Flick: https://flic.kr/p/xGdh8d -->*/}
        <img src="static/medium_mars.jpg" alt="A spaceship about to land on Mars."/>
        <p class="article-teaser-more">
          <a href="/spaceships">Read the whole Mars article</a>
        </p>
      </div>
    </div>
    
  </body>

    <style jsx>{`
    body {
      font-family: Georgia, Times New Roman, serif;
      line-height: 1.5;
      max-width: 70em;
      margin: 0 auto;
      padding: 1em;
    }
    
    .article-teaser-group {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -moz-box;
      display: flex;
    }

    .article-teaser {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -moz-box;
      display: flex;
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
                 -moz-box-orient: vertical;
                 -moz-box-direction: normal;
              flex-direction: column;
      max-width: 20em;
      padding: 1em;
      margin: 1em;
      border: 1px solid #ccc;
    }
    .article-teaser h2 {
      font-family: Avenir, SegoeUI, Franklin Gothic, sans-serif;
      font-size: 1.25em;
      margin: 0 0 .5em 0;
    }
    .article-teaser-text {
      margin: .5em 0;
    }

    .article-teaser-text p {
      margin: 0 0 .5em;
    }
    /**
    * 1. This is a fix for a peculiar sizing bug on images in flexbox columns
    *    that appears to only happen in Chrome. The intrinsic dimensions of the
    *    image are taken to mean the main-axis size, and are interpreted as
    *    the minimum size. This distorts the aspect ratio of the image.
    *    Setting an explicit min-height value counters this problem.
    */
    .article-teaser img {
      width: 100%;
      min-height: 0; /* [1] */
      order: -1;
      margin: 0 0 .5em 0;
    }
    .article-teaser-more {
      margin-top: auto;
    }
    .article-teaser-more a {
      display: block;
      border-radius: .5em;
      background-color: #3372a0;
      font-family: Avenir, SegoeUI, Franklin Gothic, sans-serif;
      color: #fff;
      text-decoration: none;
      text-align: center;
      padding: .25em;
    }

`}  </style>

  </Layout>
  </div>
)