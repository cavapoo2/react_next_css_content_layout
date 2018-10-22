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






  </div>
)

export default Header