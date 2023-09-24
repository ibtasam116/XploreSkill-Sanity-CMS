import Link from 'next/link'

import { client } from '@/sanity/lib/client'

const fetchFooter = async () => {
    const footerData = await client.fetch(`*[_type == "footer"]`, {}, { cache: 'no-cache', });
    // console.log("FooterData", footerData);
    return footerData
}

export default async function Footer() {

    const footerData = await fetchFooter();

    return (
        <>
            <section className="footer">
                <hr />
                {
                    footerData.map((data) => {
                        return (
                            <>
                                <h4>{data.title}</h4>
                                <p>{data.description}</p>
                            </>
                        )
                    })
                }

                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by <Link href="/">Sagar Developer</Link></p>
                <p>Copyright © 2021 <Link href="/">Xplore Skill</Link>. All Rights Reserved</p>
            </section>
        </>
    )
}
