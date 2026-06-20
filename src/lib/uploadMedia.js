import {createClient} from "@supabase/supabase-js";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzc2d0cGdhdXdlb2Zwb215bGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MjcyMTgsImV4cCI6MjA5NzUwMzIxOH0.gFcxoCs9-yeE9fVrSy5WDk78Fa48RV9bqgdIKFggsOU";
const url = "https://bssgtpgauweofpomylky.supabase.co";

const supabase = createClient(url, key)


export default function uploadMedia(file) {

    return new Promise(
        (resolve, reject) => {

            if(file === null) {
                reject("No file selected");
            }else{

                const timestamp =new Date().getTime()

                const fileName = timestamp + "_" + file.name;

                supabase.storage.from("images").upload(fileName, file)
                .then(
                    () => {
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl

                    resolve(publicUrl);

                
            }
        ).catch(
            (err) => {
                reject(err);
            }
        )
            }
    })

}