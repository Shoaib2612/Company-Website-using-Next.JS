export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json(); // writing await is important because otherwise this 'data.map is not a function' error will occur.

    const paths = data.map(details => {
        return {
            params : {id:details.id.toString()}
        }
    })
    return {
        paths,
        fallback : false // this is used to redirect the user to 404 page when there is no detail of that id.
    }
}

export const getStaticProps  = async (contents) => {
    const id = contents.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data=  await res.json(); // writing await is very important. otherwise some error will come .
    return {
        props :{content : data }
    }
}

const Details = ({content}) => {
    return ( 
        <div>
            <h1>Details Page</h1>
            <p>{content.name}</p>
            <p>{content.email}</p>
            <p>{content.phone}</p>
            <p>{content.email}</p>
            <p>{content.address.street}</p>
            <p>{content.address.suite}</p>
            <p>{content.address.city}</p>
            <p>{content.address.zipcode}</p>
        </div>
     );
}
 
export default Details;