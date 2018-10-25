import Link from 'next/link'

const linkStyle = {
  /*  marginRight: 15*/
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
    <Link href="/flexboxNavbarJustifyCenter">
      <a style={linkStyle}>flexboxNavbarJustifyCenter</a>
    </Link>
    <Link href="/flexboxNavbarJustifySpaceBetween">
      <a style={linkStyle}>flexboxNavbarJustifySpaceBetween</a>
    </Link>
    <Link href="/flexboxNavbarJustifySpaceAround">
      <a style={linkStyle}>flexboxNavbarJustifySpaceAround</a>
    </Link>
    <Link href="/flexboxNavbarMarginAuto">
      <a style={linkStyle}>flexboxNavbarMarginAuto</a>
    </Link>
    <Link href="/flexboxNavbarAlignStretch">
      <a style={linkStyle}>flexboxNavbarAlignStretch</a>
    </Link>
    <Link href="/flexboxNavbarAlignStart">
      <a style={linkStyle}>flexboxNavbarAlignStart</a>
    </Link>
     <Link href="/flexboxNavbarAlignBaseline">
      <a style={linkStyle}>flexboxNavbarAlignBaseline</a>
    </Link>
     <Link href="/flexboxVerticalCentering">
      <a style={linkStyle}>flexboxVerticalCentering</a>
    </Link>
    <Link href="/flexboxVerticalCenteringAuthorInfo">
      <a style={linkStyle}>flexboxVerticalCenteringAuthorInfo</a>
    </Link>
    <Link href="/flexboxNavbarFlexSizeGrow">
      <a style={linkStyle}>flexboxNavbarFlexSizeGrow</a>
    </Link>
    <Link href="/flexboxTagListWrap">
      <a style={linkStyle}>flexboxTagListWrap</a>
    </Link>
    <Link href="/flexboxColumnOrderTeaser">
      <a style={linkStyle}>flexboxColumnOrderTeaser</a>
    </Link>









    <style jsx> {`
   display: inline-block;
   padding: 0.25em;
   `}</style>
  </div>
)

export default Header