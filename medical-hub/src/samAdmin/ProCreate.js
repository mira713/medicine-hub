import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProCreate = () => {
  // eslint-disable-next-line no-unused-vars
  const [id, idchange] = useState('')
  const [name, namechange] = useState('')
  const [price, pricechange] = useState('')
  const [desc, descchange] = useState('')
  const [img, imgchange] = useState('')
  const [active, activechange] = useState(true)
  const [validation, valchange] = useState(false)

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    const prodata = { name, price, desc, active, img }

    fetch('https://sam-livid.vercel.app/product/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(prodata),
    })
      .then((res) => {
        alert('Saved successfully.')
        navigate('/prolisting')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: 'left' }}>
              <div className="card-title">
                <h2>Product Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Product Price</label>
                      <input type={"number"}
                        value={price}
                        onChange={(e) => pricechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Product Description</label>
                      <input
                        value={desc}
                        onChange={(e) => descchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Product Image</label>
                      <input
                        value={img}
                        onChange={(e) => imgchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/prolisting" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProCreate
