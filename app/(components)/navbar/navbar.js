"use client"

import Link from 'next/link'

import { client } from '@/sanity/lib/client'

const fetchNavLinks = async () => {
    const navLinks = await client.fetch(`*[_type == 'navLinks']`, {}, { cache: 'no-cache' });
    // console.log('NavLinks', navLinks);
    return navLinks
}
const Navbar = async (props) => {

    // navbar toggle menu start
    function showMenu() {
        document.getElementById("navLinks").style.right = "0";
    }

    function hideMenu() {
        document.getElementById("navLinks").style.right = "-200px";
    }
    // navbar toggle menu end

    const navLinks = await fetchNavLinks();

    return (
        <>
            <section className="Sub-header">
                <nav>
                    <Link href="/" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </Link>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times" onClick={hideMenu}></i>
                        <ul>

                            {
                                navLinks.map((link) => {
                                    return (
                                        <>
                                            <li><Link href={link.href}>{link.link}</Link></li>
                                        </>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <i className="fa fa-bars" onClick={showMenu}></i>
                </nav>
                <h1>{props.header_title}</h1>
            </section>
        </>

    )
}

export default Navbar
