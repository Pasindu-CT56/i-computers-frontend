import { useEffect, useState } from "react";
import { useLocation, useParams} from "react-router-dom";
import api from "../lib/api";
import LoadingAnimation from "../components/loadingAnimation";
import toast from "react-hot-toast";
import ImageSlideShow from "../components/imageSlideShow";

export default function ProductOverview() {

    const params = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(location.state);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            if (loading) {
                api.get("/products/"+params.productID).then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                }).catch(
                    () => {
                        toast.error("Error fetching product details");
                        setProduct(null);
                        setLoading(false);
                    }
                )
            }
        }

    )

    //parameter related product should be retrieved from the backend and displayed here.

    //const location = useLocation();
    return (
        <div className="w-full h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] ">
            {
                loading&&<LoadingAnimation />
            }
            {
                product!==null&&
                <div className="w-full h-full min-h-full flex">
                    <div className="w-1/2 h-full flex justify-center items-center  ">
                        <ImageSlideShow images={product.images} />
                    </div>
                    <div className="w-1/2 h-full  ">
                    </div>
                    
                </div>
            }
            {
                product===null&&!loading&&
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-3xl font-bold">Product not found</h1>
                </div>
            }
        </div>
    )
}