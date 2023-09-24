"use client"
import Link from 'next/link';
import Button from '../button/button';
import { client } from '@/sanity/lib/client';

const fetchNavLinks = async () => {
  const navLinks = await client.fetch(`*[_type == 'navLinks']`, {}, { cache: 'no-cache' });
  // console.log("NavLinks", navLinks);
  return navLinks
}

const fetchHomeHeader = async () => {
  const homeHeader = await client.fetch(`*[_type== 'homeHeader']`, {}, { cache: 'no-cache' });
  // console.log("Home Header", homeHeader);
  return homeHeader
}

export default async function Home_header() {

  // navbar toggle menu start
  function showMenu() {
    document.getElementById("navLinks").style.right = "0";
  }

  function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
  }
  // navbar toggle menu end

  const navLinks = await fetchNavLinks();
  const homeHeader = await fetchHomeHeader();

  return (
    <>
      <section class="header">
        <nav>
          <Link href="/" class="logo">Xplore
            <i class="fab fa-staylinked"></i>kill
          </Link>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onClick={hideMenu}></i>
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
          <i class="fa fa-bars" onClick={showMenu}></i>
        </nav >

        <div class="text_box">

          {
            homeHeader.map((content) => {
              return (
                <>
                  <h2>{content.heading}</h2>
                  <p id="headtext">{content.subHeading}</p>
                  <p>{content.description}</p>
                  {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                    <br /> esse blanditiis in quae perspiciatis quo. */}
                  <Button btnHref={content.btnHref} btnTitle={content.btnText} />
                </>
              )
            })
          }
         
        </div>
      </section >
    </>
  )
}
