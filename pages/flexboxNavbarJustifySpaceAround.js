import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
    <div>
        <HeaderLayout />
        <Layout>
            <body>
                <nav className="navbar">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/spaceships">Spaceships</a></li>
                        <li><a href="/planets">Planets</a></li>
                        <li><a href="/stars">Stars</a></li>
                    </ul>
                </nav>
            </body>

            <style jsx>{`
  nav {
    display: block;
  }
  .navbar ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    font-family: 'Avenir Next', Avenir, Corbel, 'Franklin Gothic', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
    list-style: none;
    padding: 0;
    background-color: #486a8e;
  }
  .navbar li {
    text-transform: uppercase;
    text-align: center;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
    background-color: #12459e;
    outline: 1px solid #fff;
  }
  .navbar li a {
    display: block;
    text-decoration: none;
    line-height: 1.75em;
    padding: 1em;
    color: #fff;
  }

    `}</style>
        </Layout>

    </div>
)