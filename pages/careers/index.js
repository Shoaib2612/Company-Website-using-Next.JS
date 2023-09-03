import Head from "next/head";
import styles from '../../styles/Jobs.module.css'
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // fetch is asynchronous thats y await is used.
  const data =  await res.json();

  return {
    props : {Names : data}
}

}

const jobs = ({Names}) => {
    return ( 
        <>
        <Head>
        <title>My company|careers</title>
        <meta name='Keywords' content='My company'/>
      </Head>
{/* inside json data there is a id so it is written inside key */}
        <div>
            <h1>Hiring Managers</h1>
            {Names.map(names => (
              <div key={names.id}>  
              <Link legacyBehavior href={'/careers/'+ names.id } key={names.id}>
                <a className={styles.single}>
                  <h3>{names.name}</h3>
                </a>
                </Link>

              </div>

            ))}
        </div>
        </>
     );
}
 
export default jobs ;