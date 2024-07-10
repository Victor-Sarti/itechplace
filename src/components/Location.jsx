import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div  className="mt-20 border-t py-10 border-neutral-700 ">
        <h2 id="loc" className=" text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"> 
            Localização
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> 
                {" "}  ItechPlace
             
            </span>
        </h2>
        <div className=" flex flex-wrap justify-center mt-10">
            <div className=" flex justify-center pt-6 w-full lg:w-1/2">
            <iframe  className=" rounded-xl  border border-blue-700 shadow-blue-400" width="520" height="500" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Av.%20Imperatriz%20Leopoldina,%20507%20-%20Vila%20Leopoldina,%20S%C3%A3o%20Paulo%20-%20SP,%2005305-010+(iTech%20Place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
        <div className=" pt-12 w-full lg:w-1/2">
        {checklistItems.map((item,index) => (
            <div key={index} className="flex mb-7">
                
                <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title} </h5>
                <p className="text-md text-neutral-500 flex flex-col "> {item.description} </p>
                </div>
           
            </div>
        ))}

        </div>
        </div>
    </div>
  );
};

export default WorkFlow
