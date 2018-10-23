import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/absoluteComments">
      <a style={linkStyle}>absolute comments</a>
    </Link>
    <Link href="/absoluteOverlay">
      <a style={linkStyle}>absolute overlay</a>
    </Link>
    <Link href="/floatedImageNudge">
      <a style={linkStyle}>floated image nudge</a>
    </Link>
    <Link href="/floatedImageSideBySide">
      <a style={linkStyle}>floated image side by side</a>
    </Link>
    <Link href="/inlineBlockArticle">
      <a style={linkStyle}>inline block article</a>
    </Link>
    <Link href="/inlineBlockNavbar">
      <a style={linkStyle}>inline block navbar</a>
    </Link>
    <Link href="/tabledisplayNavbar">
      <a style={linkStyle}>table display navbar</a>
    </Link>
    <Link href="/flexboxNavbarNoWidth">
      <a style={linkStyle}>flexboxNavbarNoWidth</a>
    </Link>
    <Link href="/flexboxNavbarRowReverse">
      <a style={linkStyle}>flexboxNavbarRowReverse</a>
    </Link>
    <Link href="/flexboxNavbarJustifyFlexEnd">
      <a style={linkStyle}>flexboxNavbarJustifyFlexEnd</a>
    </Link>














  </div>
)

export default Header