import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
    <div>
    <HeaderLayout/>
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

        <style jsx> {`
    /* force the nav-element to display as block in older non-HTML5 supporting
    browsers (like IE8) */
    nav {
      display: block;
    }

    .navbar ul {
      font-family: 'Avenir Next', Avenir, Corbel, 'Franklin Gothic', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
      list-style: none;
      padding: 0;
      background-color: #486a8e;
    }

    .navbar li {
      text-transform: uppercase;
      display: inline-block;
      text-align: center;
      width: 25%;
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
`}  </style>

    </Layout>
    </div>
)