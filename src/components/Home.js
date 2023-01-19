import React, { useState } from 'react'
import search from '../assets/search.png'
import folder from '../assets/folder.png'
import dots from '../assets/dots.png'
import file3 from '../assets/file3.png'
import '../styles/home.css'
import data from '../data/home.json'

const Home = () => {

  const [connOne] = useState(data.connection1);
  const [connTwo] = useState(data.connection2);
  const [descData, setDescData] = useState({});
  const [dataFiles, setDataFiles] = useState([]);

  const handleClick = (id) => {
    if (id.includes("c1")) {
      let itemData = connOne.find(item => item.id === id);
      setDescData(itemData);
      setDataFiles(itemData.dataFiles)
    } else {
      let itemData = connTwo.find(item => item.id === id);
      setDescData(itemData);
      setDataFiles(itemData.dataFiles)
    }
  }

  // console.log(dataFiles);
  const showTableData = dataFiles
    .map((i, item) => {
      return (
        <tr key={i}>
          <td>{dataFiles[item].dataFileName}</td>
          <td>{dataFiles[item].dataSentDate}</td>
        </tr>
      )
    })


  return (
    <div className='mt-5'>
      <div className='row'>
        <div id='col9' className='col-9'>
          <h3>ADMIN PANEL /<span className='fs-5'> List of Data</span></h3>
          <div id='searchBox'>
            <img id='searchImg' alt='search' src={search} />
            <input id='searchText' type='text' placeholder='Search...' />
          </div>
          <div className='connections mt-4'>
            <h5>Connection 1</h5>
            <div className="row row-cols-3">
              {connOne.map((item, i) => (
                <div key={i} className="card mb-3" onClick={() => handleClick(item.id)}>
                  <div className="row g-0">
                    <div className="col-md-4 p-2">
                      <img src={folder} className="img-fluid rounded-start" alt="folder" />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h6 className="card-title">{item.fileName}</h6>
                        <p className="card-text text-muted">{item.numOfFiles} files, {item.fileSize}mb</p>
                      </div>
                    </div>
                    <div className='col-md-1'>
                      <img className='dots' src={dots} alt='dots' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='connections'>
            <h5>Connection 2</h5>
            <div className="row row-cols-3">
              {connTwo.map((item, i) => (
                <div key={i} className="card mb-3" onClick={() => handleClick(item.id)}>
                  <div className="row g-0">
                    <div className="col-md-4 p-2">
                      <img src={folder} className="img-fluid rounded-start" alt="folder" />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h6 className="card-title">{item.fileName}</h6>
                        <p className="card-text text-muted">{item.numOfFiles} files, {item.fileSize}mb</p>
                      </div>
                    </div>
                    <div className='col-md-1'>
                      <img className='dots' src={dots} alt='dots' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id='col3' className='col-3'>
          <button className='btn btn-primary'>Upload Data</button>
          <hr />
          {Object.keys(descData).length === 0
            ? <></>
            :
            <>
              <div className='row'>
                <div className='col'>
                  <img id='file3' src={file3} alt='file2' />
                </div>
                <div className='col' id='desc'>
                  <h6>{descData.fileName}</h6>
                  <p>Connection {descData.connection}</p>
                  <p>Size: {descData.fileSize} MB</p>
                  <p>No. of File: {descData.numOfFiles}</p>
                  <p>Rows: {descData.numOfRows} L</p>
                </div>
              </div>
              <h5 className='mt-4'>Data Files</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">File Name</th>
                    <th scope="col">Sent Date</th>
                  </tr>
                </thead>
                <tbody>
                  {showTableData}
                </tbody>
              </table>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Home;