import { useState } from "react";
import  uploadMedia  from "../lib/uploadMedia";
import toast from "react-hot-toast";






export default function TestPage() {

    const [file, setFiles] = useState(null)


    function uploadFiles() {

        uploadMedia(file).then(
            (res) => {
                console.log(res);
            }
        ).catch(
            (err) => {
                console.log(err);
                toast.error("Error uploading file");
            })

    
    }

    /*async function uploadFilesAsync() {

        try {
            const res = await uploadMedia(file);
            console.log(res);
        } catch (err) {
            console.log(err);
            toast.error("Error uploading file");
        }
    }*/

    return (
        <div className="w-full h-full flex items-center justify-center">
            <input type="file" 
            multiple={true}
            onChange={
                (e) => {
                    setFiles(e.target.files[0]);
                }
            } />
            <button onClick={uploadFiles} className="p-2 bg-green-600 text-white rounded-lg">Submit</button>

        </div>
    )
}







































































/*import { useState } from "react";
import toast from "react-hot-toast";


export default function TestPage() {

    const [status, setStatus] = useState("off");
    const [level, setLevel] = useState("1");
    const [loading, setLoading] = useState(false);


    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{status}</h1>
            <div className="flex items-center justify-center w-75 h-[50px]">
                <button onClick={
                    () => {
                        setStatus("on");
                        console.log(status)
                        toast.success("The system is now on")
                    }
                } className="p-2 text-white m-2 bg-green-600">Turn on</button>
                <button onClick={
                    () => {
                        setStatus("off");
                        console.log(status)
                        toast.error("The system is now off")
                    }
                } className="p-2 text-white m-2 bg-red-600 ">Turn off</button>
                <button onClick={
                    () => {
                        setStatus("idle");
                        console.log(status)
                    }
                } className="p-2 text-white m-2 bg-yellow-600">Idle</button>

            </div>
            <h1 className="text-3xl font-bold">{level}</h1>
            <div className="w-75 h-[50px] flex justify-center items-center">
                <button onClick={
                    () => {
                        setLevel("1")
                    }
                } className="p-2 text-white m-2 bg-green-600">1</button>
                <button onClick={
                    () => {
                        setLevel("2")
                    }
                } className="p-2 text-white m-2 bg-red-600">2</button>
                <button onClick={
                    () => {
                        setLevel("3")
                        setLoading(true);
                    }
                } className="p-2 text-white m-2 bg-yellow-600">3</button>
            </div>
            {loading && <h1 className="text-3xl font-bold">Loading...</h1>}
        </div>
    )
}
















export default function TestPage() {
    return (
        <div className="w-full h-full">
            <div className="m-4 w-[280px] h-[280px] p-[10px] bg-yellow-300 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur esse ullam, nostrum accusamus quia rerum quam reprehenderit perspiciatis odit facere iusto atque natus provident reiciendis, nisi dolor ratione possimus id. Maiores iusto amet ducimus ipsum obcaecati enim ex error quas placeat odio.

            </div>
            <div className="mb-[30px] w-[280px] h-[280px] bg-yellow-300 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur esse ullam, nostrum accusamus quia rerum quam reprehenderit perspiciatis odit facere iusto atque natus provident reiciendis, nisi dolor ratione possimus id. Maiores iusto amet ducimus ipsum obcaecati enim ex error quas placeat odio.

            </div>
            <div className="w-[280px] h-[280px] bg-yellow-300 ]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur esse ullam, nostrum accusamus quia rerum quam reprehenderit perspiciatis odit facere iusto atque natus provident reiciendis, nisi dolor ratione possimus id. Maiores iusto amet ducimus ipsum obcaecati enim ex error quas placeat odio.

            </div>
            <div className="w-[280px] h-[280px] bg-yellow-300 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur esse ullam, nostrum accusamus quia rerum quam reprehenderit perspiciatis odit facere iusto atque natus provident reiciendis, nisi dolor ratione possimus id. Maiores iusto amet ducimus ipsum obcaecati enim ex error quas placeat odio.

            </div>
        </div>
    )
}
*/





//Alighnment and positioning in css
/*export default function TestPage() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col relative w-[600px] h-[600px] items-center justify-center bg-yellow-300">
                <div className="w-[100px] h-[100px] bg-red-600">
                </div>
                <div className="fixed right-10 bottom-10  w-[100px] h-[100px] bg-green-600">
                </div>
                <div className="absolute right-0 top-0 w-[100px] h-[100px] bg-blue-600">
                </div>
                <div className="w-[100px] h-[100px] bg-white">
                </div>
                <div className="w-[100px] h-[100px] bg-black">
                </div>
            </div>

        </div>
    )
}*/
