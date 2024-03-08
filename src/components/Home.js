import React, {  useEffect, useState } from "react";
import "./Home.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { FiAlignJustify } from "react-icons/fi";
import axios from 'axios';

import Intensity from "./charts/Intensity";
import Dashboard from "./Dashboard";
import Likelihood from "./charts/Likelihood";
import Relevance from "./charts/Relevance";
import Year from "./charts/Year";
import Country from "./charts/Country";
import Region from "./charts/Region";
import Topics from "./charts/Topics";
import {
  Button,
  Dropdown,
  Container,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import Loading from "./Loading";

const Home = (props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setData(response.data);
      setFilteredData(response.data)
    } catch (error) {
        console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
     }
    }
    fetchData()
}, [])


  const end_yrs = data.map((res) => res.end_year).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
  const topics = data.map((res) => res.topic).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
  const sectors = data.map((res) => res.sector).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
  const regions = data.map((res) => res.region).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
  const pestles = data.map((res) => res.pestle).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
  const source = data.map((res) => res.source).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
  const country = data.map((res) => res.country).filter((value, index, self) => {
      return self.indexOf(value) === index && value !== "";
    });
    

// Sidebar hook
  const [isOpen, setIsOpen] = useState(false);
// Filtered data hook
  const [filteredData, setFilteredData] = useState(data);
//Filter values hooks
  const [end_yrSelect, setEnd_yrSelect] = useState("");
  const [topicSelect, setTopicSelect] = useState("");
  const [sectorSelect, setSectorSelect] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [pestleSelect, setPestleSelect] = useState("");
  const [sourceSelect, setSourceSelect] = useState("");
  const [countrySelect, setCountrySelect] = useState("");

// Filter Button Handler
  const handleFilterButton = () => {

      const filterData = data.filter((item) => {
        return(

          (!end_yrSelect || end_yrSelect === item.end_year) &&
          (!topicSelect || topicSelect === item.topic) &&
          (!sectorSelect || sectorSelect === item.sector) &&
          (!regionSelect || regionSelect === item.region) &&
          (!pestleSelect || pestleSelect === item.pestle) &&
          (!sourceSelect || sourceSelect === item.source) &&
          (!countrySelect || countrySelect === item.country)
          )
      })
      if(filterData.length === 0) {
        alert("There are no records of the filters you have applied")
      }else {
        setFilteredData(filterData)
      }

      setEnd_yrSelect("")
      setTopicSelect("")
      setSectorSelect("")
      setPestleSelect("")
      setRegionSelect("")
      setCountrySelect("")
      setSourceSelect("")

  }
  

  // Sidebar Handler
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (loading || !data.length) {
    return <Loading />
  }

  return (
    <div>
    
      <div className="sidebar-container">
        <div
          className={`sidebar ${
            isOpen ? "sidebar--open" : ""
          } d-flex flex-column`}
        >
          <div className="sidebar-header ms-2 d-flex justify-content-center align-items-center px-3 py-4">
            <h5 className="fs-6 mb-0">
              <a className="text-decoration-none" href="#">
                Visualization Dashboard
              </a>
              <hr className="mb-0" />
            </h5>
          </div>
          <ul className=" list-unstyled">
            <LinkContainer to="/">
              <li>
                <a href="/">Dashboard</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/intensity">
              <li>
                <a href="/intensity">Intensity</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/likelihood">
              <li>
                <a href="/likelihood">Likelihood</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/relevance">
              <li>
                <a href="/relevance">Relevance</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/year">
              <li>
                <a href="/year">Year</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/country">
              <li>
                <a href="/country">Country</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/topics">
              <li>
                <a href="/topics">Topics</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/region">
              <li className="justify-content-space-between">
                <a href="/region">Region</a>
              </li>
            </LinkContainer>
          </ul>
        </div>
      </div>

      <section className={`side ${isOpen ? "" : "fullwidth"}`} id="wrapper">
        <Navbar fixed="top" expand="lg" className={`navbar `}>
          <Container fluid className="mx-2">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <a className="navbar-brand" href="#">
                  black<span className="main-color">Coffer</span>
                </a>
              </Nav>
              <Form className="py-1">
                <FiAlignJustify
                  style={{ fontSize: "40px", cursor: "pointer" }}
                  onClick={toggleSidebar}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="p-4">
          <div className="welcome dash">
            <div className="content rounded-3 p-3">
              <h1 className="fs-3">Welcome to Dashboard</h1>
              <p className="mb-0">
                Hello Jone Doe, welcome to your awesome dashboard!
              </p>
            </div>
          </div>
          <div className="welcome">
            <div className="content rounded-3 my-3 p-3">
              <h1 className="fs-3 mb-3">Filter Your Data</h1>

              <div className="dropdowns">
                <label>
                  End_Year
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setEnd_yrSelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {end_yrSelect || "End_Year"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {end_yrs.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>

                <label>
                  Topics
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setTopicSelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success">
                      {topicSelect || "Topics"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {topics.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>

                <label>
                  Sector
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setSectorSelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {sectorSelect || "Sector"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {sectors.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>

                <label>
                  Region
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setRegionSelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {regionSelect || "Region"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {regions.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>
              </div>

              <div className="dropdowns">
                <label>
                  Pestles
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setPestleSelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {pestleSelect || "Pestles"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {pestles.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>

                <label>
                  Source
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setSourceSelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success">
                      {sourceSelect || "Source"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {source.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>

                <label>
                  Country
                  <Dropdown
                    className="my-1"
                    onSelect={(eventKey) => setCountrySelect(eventKey)}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {countrySelect || "Country"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {country.map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </label>
              </div>
              <div className="d-grid gap-2 mx-3 my-3 mt-5">
      <Button onClick={handleFilterButton} variant="secondary" size="lg">
        Filter
      </Button>
    </div>
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<Dashboard data={filteredData} withoutFilterData={data} isOpen={isOpen} {...props}/>} />
            <Route exact path="/intensity" element={<Intensity data={filteredData} {...props}/>} />
            <Route exact path="/likelihood" element={<Likelihood data={filteredData} {...props}/>} />
            <Route exact path="/relevance" element={<Relevance data={filteredData} {...props}/>} />
            <Route exact path="/year" element={<Year data={filteredData} {...props}/>} />
            <Route exact path="/country" element={<Country data={filteredData} {...props}/>} />
            <Route exact path="/topics" element={<Topics data={filteredData} {...props}/>} />
            <Route exact path="/region" element={<Region data={filteredData} {...props}/>} />
            <Route exact path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default Home;
