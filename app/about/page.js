import Image from "next/image";
import Navbar from "../(components)/navbar/navbar";
import img from "../../public/img/about.png"
import Button from "../(components)/button/button";

export default function About() {
    return (
        <>
            <Navbar header_title="ABOUT US" />

            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are the world's largest University</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                        <Button btnHref="/blog" btnClass="btn" btnTitle="EXPLORE NOW" />
                    </div>
                    <div className="about-col">
                        <Image src={img} width={1000} height={340} />
                    </div>
                </div>
            </section>

        </>
    )
}
