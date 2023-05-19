import { Contact, ContactContent, H4, Paragraph,
Icons, Icon } from "./styled";
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

export default function contact() {
    return(
        <Contact>
            <ContactContent>
                <H4>Tahmid Ahmed</H4>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cumque ab accusamus impedit voluptate praesentium atque enim expedita rem quisquam.</Paragraph>
                <Icons>
                    <Icon>
                        <FaFacebook/>
                    </Icon>
                    <Icon>
                        <FaInstagram/>
                    </Icon>
                    <Icon>
                        <FaWhatsapp/>
                    </Icon>
                </Icons>
            </ContactContent>
        </Contact>
    )
}