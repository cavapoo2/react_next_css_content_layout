import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <h1>A fake article about spaceships</h1>

            <p>This is a fake article about spaceships. Remember when you did presentations in middle school, and you told the className about what your assignment was about, then read aloud from the paper you had written, including the title?
  ”My assignment is about spaceships. Spaceships. Spaceships are very large, and fly in space...”.</p>
            <aside className="comment" id="comment-1">
                I’ve never done this. Is that really true?
  </aside>
            <p>You may think that spaceships are fake, like this article, but they’re not. There are actual spaceships,
              flying in space right now, probably. For example, there’s the International Space Station, which is
    a spaceship of sorts. Well, actually it’s a space station, which is even cooler!</p>
            <figure>
                <img src="static/spaceship.jpg" alt="The Dragon spaceship in orbit around Earth." />
                <figcaption>The ”Dragon” spaceship, created by SpaceX. Image from <a href="https://www.flickr.com/photos/spacexphotos/16787988882/">Flickr.com</a></figcaption>
            </figure>
            <p>There’s various government organizations and companies that are building spaceships. One of them is
    SpaceX. An image of one of their spaceships appears on this very page.</p>
            <aside className="comment" id="comment-1">
                It’s only a mockup, actually.
  </aside>
            <p>I can't be bothered to write any more about spaceships so the rest of the text will just be
    nonsense. This isn’t a school assignment after all.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe harum, excepturi dolorum voluptatem hic amet nemo. Incidunt tenetur dignissimos laborum molestiae reiciendis ipsum quas temporibus nisi dolor, ea libero!</p>
            <p>A assumenda, et eius odit, rerum delectus placeat dolores eveniet quis. Iure neque deserunt mollitia impedit illo corporis odio quod, velit ducimus!</p>
        </body>
        <style jsx>{`
    body {
      font-family: Georgia, Times New Roman, serif;
      line-height: 1.5;
      padding: 2em 3em;
      max-width: 35em;
      margin: 0 auto;
    }
    h1 {
      font-family: Avenir, Franklin Gothic, sans-serif;
    }

    figure {
      background-color: #eee;
      margin: 0;
      padding: 1em;
      float: right;
      max-width: 17em;
      position: relative;
      right: -8em;
      margin-left: -7em;
    }
    figure img {
      width: 100%;
      display: block;
      margin-bottom: .5em;
    }
    figcaption {
      font-style: italic;
      font-size: .875em;
    }
    .comment {
      position: absolute;
      width: 7em;
      margin-left: -9.5em;
      margin-top: -2.5em;
      font-size: .875em;
      padding: .5em;
      border-radius: .25em;
      background-color: #dcf0ff;
      font-style: italic;
    }
    .comment:after {
      position: absolute;
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: .5em solid #dcf0ff;
      border-bottom-color: transparent;
      border-right-color: transparent;
      position: absolute;
      right: -1em;
      top: .5em;
    }
`}  </style>

    </Layout>
)