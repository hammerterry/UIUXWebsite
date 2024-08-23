import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Form, Button, Accordion } from 'react-bootstrap';
import { FaSearch,FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Content: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<{ category: string[]; price: number }>({
    category: [],
    price: 100,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category: string) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      category: prevOptions.category.includes(category)
        ? prevOptions.category.filter((cat) => cat !== category)
        : [...prevOptions.category, category],
    }));
  };

  const handlePriceFilter = (price: number) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      price,
    }));
  };

  const filteredCards = [
    // Your card data
    { id: 1, title: 'Card 1', category: 'Category A', price: 50 },
    { id: 2, title: 'Card 2', category: 'Category B', price: 75 },
    { id: 3, title: 'Card 3', category: 'Category A', price: 100 },
    { id: 4, title: 'Card 4', category: 'Category C', price: 125 },
  ].filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterOptions.category.length === 0 || filterOptions.category.includes(card.category)) &&
      card.price <= filterOptions.price
  );

  return (
    <div className="d-flex flex-column h-100">
      <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <FaBars />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button variant="outline-success">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <Button variant="primary">Add New</Button>
        </Navbar.Brand>
      </Navbar>

      <div className="d-flex flex-grow-1">
        <div className="search-filter-sidebar p-4">
          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filters</Accordion.Header>
              <Accordion.Body>
                <h6>Category</h6>
                <Form.Check
                  type="checkbox"
                  id="category-a"
                  label="Category A"
                  checked={filterOptions.category.includes('Category A')}
                  onChange={() => handleCategoryFilter('Category A')}
                />
                <Form.Check
                  type="checkbox"
                  id="category-b"
                  label="Category B"
                  checked={filterOptions.category.includes('Category B')}
                  onChange={() => handleCategoryFilter('Category B')}
                />
                <Form.Check
                  type="checkbox"
                  id="category-c"
                  label="Category C"
                  checked={filterOptions.category.includes('Category C')}
                  onChange={() => handleCategoryFilter('Category C')}
                />
                <h6 className="mt-3">Price</h6>
                <Form.Range
                  min={0}
                  max={200}
                  value={filterOptions.price}
                  onChange={(e) => handlePriceFilter(parseInt(e.target.value))}
                />
                <div className="text-end">Max Price: ${filterOptions.price}</div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="flex-grow-1 card-grid-container">
          <Row xs={1} sm={2} md={3} lg={3} className="g-4">
            {filteredCards.map((card) => (
              <Col key={card.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>Category: {card.category}</Card.Text>
                    <Card.Text>Price: ${card.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Content;
