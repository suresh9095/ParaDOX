import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NavTabs = () => {
  let [Home, setHome] = useState([]);
  let [Electronics, setElectronics] = useState([]);
  let [Dress, setDress] = useState([]);
  console.log(Home);

  useEffect(() => {
    axios
      .get('http://localhost:8000/homeAppliances')
      .then((d) => {
        console.log('Data Fetched');
        setHome(d.data);
      })
      .catch((e) => {
        // alert('Error fetching home appliances');
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/electronics')
      .then((d) => {
        console.log('Data Fetched');
        setElectronics(d.data);
      })
      .catch((e) => {
        // alert('Error fetching electronics');
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/dresses')
      .then((d) => {
        console.log('Data Fetched');
        setDress(d.data);
      })
      .catch((e) => {
        // alert('Error fetching dresses');
      });
  }, []);

  return (
    <div>
      {/* Nav tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#home">
            Home Appliance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#menu1">
            Electronics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#menu2">
            Dress
          </a>
        </li>
      </ul>

      {/* Tab panes */}
      <div className="tab-content">
        <div className="tab-pane container active" id="home">
          <div className="row g-4 mt-3">
            {Home.map((H) =>{ return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={H.id}>
                <div
                  className="card h-100"
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s',
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                    }}
                  >
                         <img src={H.img} alt="" srcset="" className='img-fluid' />

                    <h4 className="card-title" style={{ fontWeight: 'bold', color: '#333' }}>
                      {H.name}
                    </h4>
                    <p style={{ margin: '10px 0', color: '#007bff' }}>
                      Brand: <strong>{H.brand}</strong>
                    </p>
                    <p style={{ margin: '10px 0', color: '#555' }}>
                      Price: <strong>${H.price}</strong>
                    </p>
                    <p style={{ margin: '10px 0', color: H.stock > 0 ? 'green' : 'red' }}>
                      Stock: <strong>{H.stock > 0 ? H.stock : 'Out of Stock'}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ) })}
          </div>
        </div>
        <div className="tab-pane container fade" id="menu1">
          <div className="row g-4 mt-3">
            {Electronics.map((E) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={E.id}>
                <div
                  className="card h-100"
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s',
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                    }}
                  >
                    <img src={E.img} alt="" srcset="" className='img-fluid' />
                    <h4 className="card-title" style={{ fontWeight: 'bold', color: '#333' }}>
                      {E.name}
                    </h4>
                    <p style={{ margin: '10px 0', color: '#007bff' }}>
                      Brand: <strong>{E.brand}</strong>
                    </p>
                    <p style={{ margin: '10px 0', color: '#555' }}>
                      Price: <strong>${E.price}</strong>
                    </p>
                    <p style={{ margin: '10px 0', color: E.stock > 0 ? 'green' : 'red' }}>
                      Stock: <strong>{E.stock > 0 ? E.stock : 'Out of Stock'}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-pane container fade" id="menu2">
          <div className="row g-4 mt-3">
            {Dress.map((D) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={D.id}>
                <div
                  className="card h-100"
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s',
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                    }}
                  >
                    <h4 className="card-title" style={{ fontWeight: 'bold', color: '#333' }}>
                      {D.name}
                    </h4>
                    <p style={{ margin: '10px 0', color: '#007bff' }}>
                      Brand: <strong>{D.brand}</strong>
                    </p>
                    <p style={{ margin: '10px 0', color: '#555' }}>
                      Price: <strong>${D.price}</strong>
                    </p>
                    <p style={{ margin: '10px 0', color: D.stock > 0 ? 'green' : 'red' }}>
                      Stock: <strong>{D.stock > 0 ? D.stock : 'Out of Stock'}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
