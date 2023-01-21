/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ProDetail = () => {
    const { proid } = useParams();

    const [prodata, prodatachange] = useState({});

    useEffect(() => {
        fetch("https://sam-livid.vercel.app/product/" + proid).then((res) => {

            return res.json();
        }).then((resp) => {
            prodatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Product Create</h2>
                </div>
                <div className="card-body"></div>

                {prodata &&
                    <div>
                        <h2>The Product name is : <b>{prodata.name}</b>  ({prodata.id})</h2>
                        <h3>Product Details</h3>
                        <h5>Price is : {prodata.price}</h5>
                            <h5>Description  : {prodata.desc}</h5>
                            <img src={prodata.img} alt="" />
                        <Link className="btn btn-danger" to="/prolisting">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default ProDetail;