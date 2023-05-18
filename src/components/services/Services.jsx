import { Services, Title, H2, ServicesContent,
Box, Icon, H4, Paragraph, Button } from "./styled";
import { FaBars } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { FaBell } from "react-icons/fa"

export default function services() {
    return(
        <Services id="services">
            <Title>
                <H2>Our services</H2>
            </Title>

            <ServicesContent>
                <Box>
                    <Icon>
                        <FaBars/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi fugiat iste temporibus vero, tempora quam nam possimus modi eligendi repudiandae ipsa similique explicabo rem ut? Officia quo accusantium recusandae?</Paragraph>
                    <Button type="button" className="button">Read more</Button>
                </Box>

                <Box>
                    <Icon>
                        <FaUser/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi fugiat iste temporibus vero, tempora quam nam possimus modi eligendi repudiandae ipsa similique explicabo rem ut? Officia quo accusantium recusandae?</Paragraph>
                    <Button type="button" className="button">Read more</Button>
                </Box>

                <Box>
                    <Icon>
                        <FaBell/>
                    </Icon>
                    <H4>Web development</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi fugiat iste temporibus vero, tempora quam nam possimus modi eligendi repudiandae ipsa similique explicabo rem ut? Officia quo accusantium recusandae?</Paragraph>
                    <Button type="button" className="button">Read more</Button>
                </Box>
            </ServicesContent>
        </Services>
    )
}