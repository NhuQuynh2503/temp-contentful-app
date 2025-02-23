import { createClient } from "contentful";
import { useEffect, useState } from "react";
//Tạo client để kết nối với Contentful
const client = createClient({
    space:'4t3fs10unuiv', //Mã định danh duy nhất 
    environment:'master', // Tên môi trường trong Contentful
    accessToken: import.meta.env.VITE_API_KEY, //Mã thông báo API để xác thực và lấy dữ liệu.
})
console.log(import.meta.env.VITE_API_KEY);
// Giúp bạn tạo một kết nối với API Contentful để fetch dữ liệu.

 export const useFetchProjects =()=>{
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const getData = async()=>{
        try {
            const response = await client.getEntries({content_type:'projects'});
            const projects = response.items.map((item)=>{
                const {title,url,image} = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return{
                    title,url,id,img
                }
            })
            setProjects(projects);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return{
        loading,projects
    }
}
// client
// .getEntries({content_type:'projects'})
// .then((response)=>console.log(response));
