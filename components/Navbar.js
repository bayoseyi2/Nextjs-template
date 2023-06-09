import Link from 'next/link'
import styles from '../src/styles/Navbar.module.css'


const Navbar = () =>{
    return(

    <div className={styles.navbar}>
        <div className={styles.link}>
            <Link href="/">    Home     </Link>
            <Link href="/about">      About </Link>
            <Link href="/profile">     Profile </Link>
            <Link href="/coins">     CoinList </Link>
        </div>
    </div>
    
    )
}

export default Navbar;