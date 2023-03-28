
import UseGif from '../hooks/UseGif';
import Spinner from './Spinner';

function Random() {

    
    // const [loading, setLoading] = useState(false);
    
    // const [gif, setGif] = useState("");

    // const fetchData = async () =>{   
    //     setLoading(true)
    //      const url = `https://api.giphy.com/v1/gifs/random?api_key=voZ5QgEkXo9jm73pzgipYfFPKyf3MpT0`;
    //      const {data} = await axios.get(url);
    //     //  console.log(data)
    //      const imageSource = data.data.images.downsized_large.url;
    //      console.log(imageSource);
         
    //      setGif(imageSource);
    //      setLoading(false);

    // }

    // useEffect(() => {
    //    fetchData();
    // },[]);


    const {gif, loading ,fetchData} = UseGif();
    

const clickHandler = () =>{
  fetchData();
}
  return (
    <div className=' bg-green-500 w-1/2  rounded-lg  border-black border flex flex-col items-center gap-y-5'>
    <h1 className=' mt-[15px] font-bold text-2xl underline uppercase'>A Random Gif</h1>
     {
        loading? <Spinner/> : <img src={gif} width="450" alt=""/>
     }
    
    <button onClick={clickHandler} className=" bg-white bg-opacity-70 text-lg rounded-lg py-2 w-9/12 mb-[20px]  ">
        Generate
    </button>


      
    </div>
  )
}

export default Random
