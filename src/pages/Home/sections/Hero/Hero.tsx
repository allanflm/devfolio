import { Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <StyledImg src={Avatar} />
                            xs = 4
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color="primary" variant="h1">Allan Felipe</Typography>
                            <Typography color="primary" variant="h2">I`m a Software Enginner</Typography>
                        </Grid>

                    </Grid>
                </Container>


            </StyledHero>
        </>
    )
}

export default Hero
