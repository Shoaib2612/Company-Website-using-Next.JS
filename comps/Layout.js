import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => { // the children is the content coming from _app.js file which is written b/w layout tag. ie ;<Component {...pageProps} />
    return ( 
        <div className = "content">
            <Navbar/>
            {children}
            <Footer/>

        </div>

     );
}
 
export default Layout;