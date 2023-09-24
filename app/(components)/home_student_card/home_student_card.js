import Image from 'next/image'

export default function Home_student_card(props) {
    return (
        <>
            <div class="testimonials-col">
                <Image src={props.studentImgSrc} width={100} height={100} alt="oo.." />
                <div>
                    <p>{props.studentDescription}</p>
                    <h3>{props.studentName}</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class={`fa ${props.star_className}`}></i>
                </div>
            </div>
        </>
    )
}
