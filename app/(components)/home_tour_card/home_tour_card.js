import Image from "next/image"
export default function Home_tour_card(props) {
    return (
        <>
            <div className="campus-col">
                <img src={props.ImgSrc} alt={props.imgAlt} height={230} width={250} />
                <div className="layer">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </>
    )
}
