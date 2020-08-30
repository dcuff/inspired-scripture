import { Container, Row, Nav, Navbar } from "react-bootstrap";
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">InspiredScripture</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/topics">Studies By Topic</Nav.Link>
            <Nav.Link href="/books">Studies By Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}