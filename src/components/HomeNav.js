import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setData, setLoading } from '../redux/actions';

const HomeNav = () => {
  const [ search, setSearch ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(setLoading(true))
    e.preventDefault()
    const encodedSearch = encodeURIComponent(search)
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setLoading(false))
      dispatch(setData(data.Search))
    })
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={handleChange}/>
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default HomeNav
