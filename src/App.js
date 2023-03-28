
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="background overflow-x-hidden w-[100vw] h-screen flex flex-col relative items-center">
      <h1 className=" bg-white rounded-sm  text-center mt-[40px] w-11/12
       text-4xl  font-bold py-2">Random Gifs</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
