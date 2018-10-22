import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <header class="photo-header">
                <img src="static/big_spaceship.jpg" alt="An artist’s mockup of the ”Dragon” spaceship" />
                <div class="photo-header-plate">
                    <h1>SpaceX unveil the Crew Dragon</h1>
                    <p>Photo from SpaceX on <a href="https://www.flickr.com/photos/spacexphotos/16787988882/">Flickr</a></p>
                </div>
            </header>
        </body>

        <style jsx> {`
    body {
      margin: 0;
      font-family: Avenir, Franklin Gothic, sans-serif;
    }

    .photo-header {
      position: relative;
    }
    .photo-header img {
      max-width: 100%;
      display: block;
    }
    .photo-header h1 {
      font-size: 3em;
      margin: 0;
    }
    .photo-header p {
      font-size: 1.125em;
      margin: 0;
      color: #444;
    }
    .photo-header-plate {
      position: absolute;
      right: 4em;
      bottom: 4em;
      left: 4em;
      background-color: #fff;
      background-color: rgba(255,255,255,0.7);
      padding: 2em;
    }
`}  </style>

    </Layout>
)