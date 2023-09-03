import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
const notfound = () => {
    const router = useRouter();
    useEffect(() => {  //it takes function as parameter.
        setTimeout(()=>{
            // router.back() its redirects to previous page
            router.push('/');

        },3000) //it takes function as parameter and that function activates after the second parameter( time in mili seconds) gets completed.
    },[]);
    return (  
        <div className="not-found">
            <h1>Ooooops.....</h1>
            <p>Page not found. Please go back to<Link href='/' className={styles.btn}>home page.</Link></p>
        </div>
    );
}
 
export default notfound;