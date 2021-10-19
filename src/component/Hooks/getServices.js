import {useEffect, useState} from 'react'

const GetServices=()=>{
    const [services,setService]=useState([])

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/Dev-Arif-sys/medicalApi/main/medicalServices.json` )
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    

    return{
        services
    }
}

export default GetServices;