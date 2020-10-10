import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header />
      
      <h3>XKCD</h3>
      <h2>{props.users.title}</h2>
      <img src={props.users.img} />
      <h4>Previous 10</h4>
      <Footer users={props.users.num}/>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://xkcd.com/info.0.json')
  const dataObj = await res.json();
  return {props: {users: dataObj}}
}