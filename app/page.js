
     "use client"
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <div className={styles.homeContainer}>
   <h1 className={styles.title}>Welcome to <span className={styles.spanText}>MoleWeb</span> App!</h1>
    <div className={styles.pic} >
     <div className={styles.profilepic}>
        {/* <Image id='imgs'
        src={molepic} 
        width='20px'
        height="150px"
        alt="mole`s picture"
        placeholder="blur"
        /> */}
        <img id={styles.imgs} src="/smiley-woman-talking-phone-medium-shot.jpg" alt='mole pic' />
     </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.pageText}>
      <h1 className={styles.title}>Next. <span className={styles.spanText}>Js</span></h1>
        <p>This is a simple Next.js application.Which is use for learning coding.</p>
        <div className={styles.loginsButton}>
          <a href="login" className={styles.btn}>Login</a>
          <a href="signup" className={styles.btn}>Signup</a>
        </div>
      </div>
    </div>
    <div className={styles.information}>
      {/* <button id={styles.btn} > <a href='getinformation'>Get Users</a></button> */}
    </div>
    </div>
  );
}
