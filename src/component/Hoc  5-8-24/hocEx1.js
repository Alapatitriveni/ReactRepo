import axios from "axios";
import { useEffect, useState } from "react";



const withProfileData =(Component)=>{
    return ()=>{
        // const profileData={
        //     name:"triveni"
        // };
        const[profileData,setProfileData]=useState({});
        useEffect(()=>{
            fetchData();
        },[]);
        const fetchData=async()=>{
            try{
                const {data,status}=await axios.get("https://dummyjson.com/products/1");
                if(status===200){
                    setProfileData(data);
                }
            }catch(err){}
        };
        return <Component data={profileData}/>;
    };
};
export default withProfileData;