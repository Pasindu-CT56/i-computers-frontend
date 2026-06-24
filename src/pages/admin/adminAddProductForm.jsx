import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import uploadMedia from "../../lib/uploadMedia";

export default function AddProductForm() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState("");
    const [labeledPrice, setLabeledPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCategory] = useState("Laptop");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const navigate = useNavigate();

    async function handleSave() {
        const token = localStorage.getItem("token")
        if(token === null) {
            toast.error("You are not logged in")
            navigate("/login")
            return
        }

        try {

            const imageUploadPromises = []

            //toast.success(images.length)

            for(let i=0; i<images.length; i++){

                imageUploadPromises[i] = uploadMedia(images[i])

            }

            console.log(imageUploadPromises)

            const imageUrls =  await Promise.all(imageUploadPromises)
            //const fastestUploadImageUrl = await Promise.race(imageUploadPromises)

        }catch(err){
            console.log(err)
            toast.error("Failed to add product")
        }


    }
    return (
        <div className="w-full max-h-full flex flex-wrap p-4 items-start gap-0 overflow-y-scroll">
            <div className="w-full h-[100px] bg-white shadow-md rounded-md flex items-center justify-between mb-8 ">
                <h1 className="text-2xl font-semibold text-secondary ml-4">Add New Product</h1>
                
                <div className="flex gap-2">
                    <Link to="/admin/products" className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700">Cancel</Link>
                    <button className="p-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700" onClick={handleSave}>
                        Save
                    </button>
                </div>

        
                </div>

                <div className="w-[15%] h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Product ID</label>
                    <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-[40%] h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-[45%] h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Alternative Names</label>
                    <input type="text" value={altNames} onChange={(e) => setAltNames(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-full  flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-[100px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-[40%] h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Images</label>
                    <input type="file" multiple={true} onChange={(e) => setImages(e.target.files[0])} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-[30%] h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-[30%] h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Labeled Price</label>
                    <input type="number" value={labeledPrice} onChange={(e) => setLabeledPrice(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-1/4 h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Stock</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-1/4 h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Availability</label>
                    <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4">
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>
                <div className="w-1/2 h-[100px] flex flex-col p-2">
                </div>
                <div className="w-1/4 h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4">
                        <option value="Laptop">Laptop</option>
                        <option value="Desktop">Desktop</option>
                        <option value="Monitor">Monitor</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Graphics Card">Graphics Card</option>
                        <option value="Processor">Processor</option>
                        <option value="Motherboard">Motherboard</option>
                        <option value="Power Supply">Power Supply</option>
                        <option value="RAM">RAM</option>
                    </select>
                </div>
                <div className="w-1/4 h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Brand</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>
                <div className="w-1/4 h-[100px] flex flex-col p-2">
                    <label className="text-secondary text-lg font-semibold mb-2">Model</label>
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-md mb-4" />
                </div>

                
        </div>
    )
}

//productId name altNames description images price  labeledPrice stock isAvailable category   brand  model