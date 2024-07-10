import { resourcesLinks,platformLinks,communityLinks } from "../constants";
import whats from "../assets/profile-pictures/whatsapp2.png"
import inst from "../assets/profile-pictures/instagram2.png"
       
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 flex justify-center gap-12">
       
            
                <div className=" w-7 h-7  flex-col  gap-7 mt-8 lg: flex ">
                        <img src={whats} alt="" />
                        <img src={inst} alt="" />
                </div>
            <div >
                <h3 className="text-md font-semibold mb-4">Falem Conosco</h3>
                <ul className="space-y-6 ">
                    {platformLinks.map((link,index) => (
                        <li key={index}>
                            <a className="text-neutral-300  hover:text-white"
                             href=
                             {link.href}
                             >{link.text}
                             </a>
                             
                        </li>
                    ))}
                </ul>
            </div>
        
         
      
    </footer>
  );
 };

export default Footer
