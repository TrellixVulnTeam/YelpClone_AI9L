import React from "react"
import nechromatic from "../gifs/nechrogif.gif"

export default function About() {
    return (
        <div>
            <section className={"about"} id={"about-project"}>
                <img className={"about-img"} src={nechromatic} alt={"about image"}/>
                <h3 className={"about-text"}>
                    Nechromatics is a NFT on the Cardano network
                    agaerga
                    asergarg ggggggggggg gggggggg ggggggg
                    ggggggg gggggggggg ggggggggggg gggggggg gggggggg
                    gggggggg ggggggggggg ggggggggggg ggggggg gggggg
                </h3>
            </section>
        </div>
    )
}