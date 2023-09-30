import Image from "next/image"

export default function Home_facilities_card(props) {
    return (
        <>
            <div class="facilities-col">
                <img src={props.imgSrc} height={225} width={150} alt={props.imgAlt} />
                <h3>{props.title}</h3>
                <p>{props.description}
                </p>
            </div>
        </>
    )
}
