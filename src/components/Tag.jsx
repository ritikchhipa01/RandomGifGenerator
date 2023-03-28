import UseGif from '../hooks/UseGif';
import Spinner from './Spinner';
import { useState } from 'react';

function Tag() {

    const [tag, setTag] = useState("");
    const {gif, loading, fetchData} = UseGif(tag);
    

const clickHandler = () =>{
  fetchData(tag);
}
  return (
    <div className=' bg-blue-500 w-1/2  rounded-lg  border-black border flex flex-col items-center gap-y-5'>
    <h1 className=' mt-[15px] font-bold text-2xl underline uppercase'>Random {tag} Gif</h1>
     {
        loading? <Spinner/> : <img src={gif} width="450" alt=""/>
     }

     <input
        className='bg-white bg-opacity-85 w-9/12 py-2 rounded-lg  text-center '
        onChange={(event) => setTag(event.target.value)}
     />
    
    <button onClick={clickHandler} className=" bg-white bg-opacity-70 text-lg rounded-lg py-2 w-9/12 mb-[20px]  ">
        Generate
    </button>


      
    </div>
  )
}

export default Tag
