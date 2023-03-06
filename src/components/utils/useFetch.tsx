import { useEffect, useState } from 'react'

export default function useFetch(url:any) {
  let  [loading,setLoading] = useState(true)
  let  [data,setData] = useState<any>('')


  useEffect(()=>{
    const fetchData =  async () => {
        const response = await fetch(url);
        const json = await response.json();
       setData(json.message)
       setLoading(false)
    }
    fetchData()
  },[url])


  return {data, loading}
}
