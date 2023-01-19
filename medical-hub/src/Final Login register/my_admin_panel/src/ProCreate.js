import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProCreate = () => {
  const [id, changeid] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [validation, setValidation] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const proData = { name, price, imageUrl };

    fetch('http://localhost:8000/product', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body:JSON.stringify(proData)
    })
      .then((res) => {
        alert('Saved Successfully')
        navigate('/')
      })
      .catch((err) => {
      console.log(err.message)
    })
  }








  return <div>ProCreate</div>
}

export default ProCreate
