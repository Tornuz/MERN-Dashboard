import React from "react";
import Intensity from "./charts/Intensity";
import Likelihood from "./charts/Likelihood";
import Relevance from "./charts/Relevance";
import Topics from "./charts/Topics";
import Year from "./charts/Year";
import Region from "./charts/Region";
import Country from "./charts/Country";

const Dashboard = (props) => {
  const { data } = props;
  const { withoutFilterData } = props;
  const { isOpen } = props;

  return (
    <div>
      <section className="statistics mt-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
              <i className="uil-envelope-shield fs-2 text-center bg-primary rounded-circle"></i>
              <div className="ms-3">
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">1,245</h3>{" "}
                  <span className="d-block ms-2">Emails</span>
                </div>
                <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
              <i className="uil-file fs-2 text-center bg-danger rounded-circle"></i>
              <div className="ms-3">
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">34</h3>{" "}
                  <span className="d-block ms-2">Projects</span>
                </div>
                <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex rounded-2 align-items-center p-3">
              <i className="uil-users-alt fs-2 text-center bg-success rounded-circle"></i>
              <div className="ms-3">
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">5,245</h3>{" "}
                  <span className="d-block ms-2">Users</span>
                </div>
                <p className="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="charts mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Intensity Chart</h3>
              <Intensity data={data} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Likelihood Chart</h3>
              <Likelihood data={data} />
            </div>
          </div>
        </div>
      </section>

      <section className="statis mt-4 text-center">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="box bg-primary p-3">
              <i className="uil-eye"></i>
              <h3>{withoutFilterData.length}</h3>
              <p className="lead">Data Length</p>
            </div>
          </div>
          <div className="  col-lg-4 mb-4">
            <div className="box bg-danger p-3">
              <i className="uil-user"></i>
              <h3>{data.length}</h3>
              <p className="lead">Filters Applied</p>
            </div>
          </div>

          <div className=" col-lg-4">
            <div className="box bg-success p-3">
              <i className="uil-feedback"></i>
              <h3>{isOpen ? "Open" : "Close"}</h3>
              <p className="lead">Sidebar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="charts mt-4">
        <div className="chart-container p-3">
          <h3 className="fs-6 mb-3">Relevance Chart</h3>
          <div style={{ height: "300px" }}>
            <Relevance data={data} />
          </div>
        </div>
      </section>

      <hr />

      <section className="charts mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Topics Chart</h3>
              <Topics data={data} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Years Chart</h3>
              <Year data={data} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <div className="statistics topics">
        <div className="box rounded-2 p-3">
          <div className="ms-3">
            <h2 className="">Titles</h2>
            <ul className="list-unstyled">
              {data.map((item, index) => (
                <li className="py-2" key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <section className="charts mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Region Chart</h3>
              <Region data={data} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Country Chart</h3>
              <Country data={data} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
