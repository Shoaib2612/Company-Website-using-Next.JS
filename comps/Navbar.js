import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1 className="Heading">My Company</h1> */}
                <Image src= "/company.jpg" width={120} height={70} />
                
            </div>
           <Link href="/">Home</Link> 
           <Link href="/about">About</Link> 
           <Link href="/careers">careers</Link> 
        </nav>
     );
}
 
export default Navbar;