/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProListing = () => {
  const [prodata, prodatachange] = useState(null)
  const navigate = useNavigate()

  const LoadDetail = (id) => {
    navigate('/product/detail/' + id)
  }
  const LoadEdit = (id) => {
    navigate('/product/edit/' + id)
  }
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch('https://sam-livid.vercel.app/product/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed successfully.')
          window.location.reload()
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  useEffect(() => {
    fetch('https://sam-livid.vercel.app/product/')
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        prodatachange(resp)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <Heading as='h1' size='4xl' textAlign={"center"}>Admin Page</Heading>
          <Heading as='h1' size='1xl' textAlign={"center"}>Product Listing</Heading>
          
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/product/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Action</td>
                <td>Image</td>
              </tr>
            </thead>
            <tbody>
              {prodata &&
                prodata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                        <td>{item.desc}</td>
                        {/* <td></td> */}

                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id)
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id)
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id)
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                        </td>
                        <img src={item.img} />
                        
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProListing
