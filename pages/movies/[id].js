import Header from '../../components/Header'
import styles from '../../styles.module.css'


export default function ComicDetails(props){
    return (
        <>
            <div className={styles.hello}>
                <Header />
                <h1>{props.user.title}</h1>
                <img src={props.user.img}></img>
            </div>
        </>
    )
}

export async function getServerSideProps(context){
    const id = context.query.id
    console.log(id);
    const res = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: {user: dataObj} };
}