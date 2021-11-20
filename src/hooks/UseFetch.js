import { useEffect, useRef, useState } from "react"


export const UseFetch = (url) => {

   const ref = useRef(true);
   const [state, setState] = useState({data:null, loading:true, error:null});

    useEffect(() => {
        return()=>{
            ref.current=false;
        }

    }, [])

    useEffect(() => {
        setState({data:null,loading:true,error:null})

        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                setTimeout(()=>{

                    if(ref.current){
                        setState({
                            loading:false,error:null, data
                        });
                        
                    }else{
                        console.log("setState No se llamo")
                    }
                },2000);
           
            });

    }, [url])

    return state;


}

