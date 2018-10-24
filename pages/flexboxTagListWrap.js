import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
  <div>
  <HeaderLayout/>
  <Layout>
  <body>
  <ul className="tags">
    <li><a href="/Binary_planet">Binary planet</a></li>
    <li><a href="/Carbon_planet">Carbon planet</a></li>
    <li><a href="/Coreless_planet">Coreless planet</a></li>
    <li><a href="/Desert_planet">Desert planet</a></li>
    <li><a href="/Dwarf_planet">Dwarf planet</a></li>
    <li><a href="/Earth_analog">Earth analog</a></li>
    <li><a href="/Exoplanet">Exoplanet</a></li>
    <li><a href="/Gas_giant">Gas giant</a></li>
    <li><a href="/Helium_planet">Helium planet</a></li>
    <li><a href="/Ice_giant">Ice giant</a></li>
    <li><a href="/Lava_planet">Lava planet</a></li>
    <li><a href="/Mesoplanet">Mesoplanet</a></li>
    <li><a href="/Ocean_planet">Ocean planet</a></li>
    <li><a href="/Pulsar_planet">Pulsar planet</a></li>
    <li><a href="/Rogue_planet">Rogue planet</a></li>
    <li><a href="/Terrestrial_planet">Terrestrial planet</a></li>
    <li><a href="/Sub-brown_dwarf">Sub-brown dwarf</a></li>
  </ul>
</body>

    <style jsx>{`
    body {
      font-family: 'Avenir Next', Avenir, Corbel, 'Franklin Gothic', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
    }
    .tags {
      border: 1px solid #c9e1f4;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: -moz-box;
      display: flex;
      -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
              flex-wrap: wrap;
      margin: 0;
      padding: 1em;
      list-style: none;
    }
    .tags li {
      display: inline-block;
      margin: .5em;
    }
    .tags a {
      display: block;
      padding: .25em .5em .25em .25em;
      background-color: #c9e1f4;
      border-radius: 0 .25em .25em 0;
      line-height: 1.5;
      text-decoration: none;
      color: #28448f;
      position: relative;
      text-align: center;
    }
    .tags a:before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border: 1em solid transparent;
      border-right-width: .5em;
      border-right-color: #c9e1f4;
      left: -1.5em;
      top: 0;
    }
`}  </style>
  </Layout>
  </div>
)