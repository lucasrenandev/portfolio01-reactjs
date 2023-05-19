import { About, AboutImage, Image,
AboutText, H2, H3, Paragraph, Button } from "./styled";
import mainImg from "../../assets/main-img.png"

export default function about() {
    return(
        <About>
            <AboutImage>
                <Image src={mainImg} alt="About image"/>
            </AboutImage>

            <AboutText>
                <H2>About me</H2>
                <H3>Developer & Designer</H3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ratione quod consectetur aspernatur! Magnam amet voluptatum nesciunt ducimus ab eius aut maiores officiis, quam incidunt porro unde voluptate nobis earum minus nostrum. Fuga, porro.</Paragraph>
                <Button type="button" className="button">Let's talk</Button>
            </AboutText>
        </About>
    )
}