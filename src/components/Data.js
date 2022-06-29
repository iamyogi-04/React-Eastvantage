import React from 'react'
import { useState, useEffect } from 'react'
import './data.css'
import axios from 'axios'

const Data = () => {

    const [data, setData] = useState([])


    // using Axios getting data fetched
    // const [profile, setProfile] = useState([])

    // const getData=()=>{
    //   axios.get('https://randomuser.me/api')
    //   .then((response)=>
    //     // console.log(response.data.results[0]),
    //     setProfile(response.data.results[0]),
        
    //     // localStorage.setItem('title',response.data.results[0].name.title),
    //     // localStorage.setItem('first',response.data.results[0].name.first),
    //     // localStorage.setItem('last',response.data.results[0].name.last)
    //   )
      
        
    // }


    /// using async await & fecth to fetch the data from api and saving it to local storage 
    const fetchdata= async ()=>{
        const response= await fetch('https://randomuser.me/api')
        const result =await response.json()
        console.log(result.results[0])
        setData(result.results[0])
        localStorage.setItem('title',result.results[0].name.title)
        localStorage.setItem('first',result.results[0].name.first)
        localStorage.setItem('last',result.results[0].name.last)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    const title= localStorage.getItem('title')
    const first = localStorage.getItem('first')
    const last = localStorage.getItem('last')
    //for refreshing the data and preventing page reloading
    const refresh = () => {
      fetchdata()
      // getData()
    }
  return (
   

    <>
    <div className="container">
      <div className="profile">
      <div className="centeritem">
        
      <span>Name:{title}. {first} {last} </span>
        <p>Email: {data.email}</p>
      </div>
      <button  className='refreshbutton'onClick={refresh}>Refresh</button>  
        
      </div>
      
        
    </div>

    </>
  )
}

export default Data