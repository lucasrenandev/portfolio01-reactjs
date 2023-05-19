import { Home, HomeText, H4, H1, H3,
Form, InputEmail, InputSubmit } from "./styled";

export default function home() {
    return(
        <Home>
            <HomeText>
                <H4>Hello, my name is</H4>
                <H1>Tahmid <span>Ahmed</span></H1>
                <H3>I'am a Web Developer</H3>

                <Form action="#">
                    <InputEmail 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email"
                    autoComplete="none"
                    required />

                    <InputSubmit 
                    type="submit" 
                    name="submit" 
                    value={"Let's start"} />
                </Form>
            </HomeText>
        </Home>
    )
}