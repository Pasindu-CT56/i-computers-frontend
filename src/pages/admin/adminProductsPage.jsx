import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../lib/api";
import { CiEdit, CiTrash } from "react-icons/ci";



export default function AdminProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        api.get("/products").then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
    } , [])

    //make a backend call to get all products
    //update the product variable's value with response from backend

    return (
        <div className="w-full max-h-full  flex flex-col p-4 items-start gap-0 overflow-y-scroll ">

            {
            /*products.map(
                    (item, index)=>{
                        
                        return <div key={index} className="w-">
                        <h1>{item.name}</h1>
                        </h1>{item.price}</h1>
                        </div>

                    }
                )*/
            }

            <div className="w-full h-[100px] bg-white shadow-md rounded-md flex items-center p-4 justify-between mb-8">
                <h1 className="text-2xl font-semibold text-secondary">Add Product</h1>
            
                <div className="flex gap-2">
                    {products.length} Products
                    
                </div>
            
            </div>



            <table className = "w-full bg-white shadow-md rounded-md overflow-hidden text-center">
                <thead className="bg-accent text-white h-[60px]">

                    <tr>
                        <th>Image</th>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Labeled Price</th>
                        <th>Stock</th>
                        <th>Availability</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map(
                            (item)=>{
                                return (
                                    <tr key={item.productID} className = "odd:bg-gray-200  ">
                                        <td>
                                            <img src={item.images[0]} alt={item.name} className="w-[50px] h-[50px] object-cover rounded-md" />
                                        </td>
                                        <td>{item.productID}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.labeledPrice}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.isAvailable ? "Available" : "Not Available"}</td>
                                        <td>{item.category}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.model}</td>
                                        <td>
                                            {/*icon only*/}
                                            <div className="flex gap-2 justify-center items-center">
                                                <CiEdit/>
                                                <CiTrash/>
                                            </div>
                                        </td>
                                    
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>


            </table>
            
            <Link to="/admin/add-product" className="w-[80px] h-[80px] bg-accent text-white rounded-full text-2xl flex items-center justify-center fixed right-[35px] bottom-[35px] ">
                <FaPlus />
            </Link>
        
        </div>
    )
}


