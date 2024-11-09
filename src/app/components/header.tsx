import Link from 'next/link';
import './header.css';
export default function Header(){
    return(
        <ul className='header'>
            <li className='header-content'>
         <Link href="/">Home</Link>
            </li>
            <li >
                <Link href='/about'>About</Link>
            </li>

            <li>
            <Link href='/contact'>Contact</Link>
            </li>
            
         
        </ul>
    )
}