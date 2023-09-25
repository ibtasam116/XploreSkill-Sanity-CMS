import Image from "next/image";
import Navbar from "../(components)/navbar/navbar";
import img from "../../public/img/about.png"
import Button from "../(components)/button/button";
import { client } from "@/sanity/lib/client";

const fetcAboutUsHeader = async () => {
    const aboutUsHeader = await client.fetch(`*[_type == 'aboutUsHeader']`, {}, { cache: 'no-cache' });
    // console.log("About Us Header", aboutUsHeader);
    return aboutUsHeader
}

const fetchAboutUsContent = async () => {
    const aboutUsContent = await client.fetch(`*[_type == 'aboutUsContent']`, {}, { cache: 'no-cache' });
    // console.log("About Us Content", aboutUsContent);
    return aboutUsContent
}

export default async function About() {

    const aboutUsHeader = await fetcAboutUsHeader();
    const aboutUsContent = await fetchAboutUsContent();

    return (
        <>

            {
                aboutUsHeader.map((content) => {
                    return (
                        <>
                            <Navbar header_title={content.heading} />
                        </>
                    )
                })
            }

            <section className="about-us">
                <div className="row">
                    {
                        aboutUsContent.map((content) => {
                            return (
                                <>
                                    <div className="about-col">
                                        <h1>{content.heading}</h1>
                                        <p>{content.description}</p>
                                        <Button btnHref={content.btnHref} btnClass="btn" btnTitle={content.btnText} />
                                    </div>
                                    <div className="about-col">
                                        <Image src={img} width={1000} height={340} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}
