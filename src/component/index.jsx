import './index.css'
import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Header from "../header/header"
import Slide1 from '../assets/slide1.png';
import Slide2 from '../assets/slide2.png';
import Slide3 from '../assets/slide3.png';
import Girl from '../assets/girl.png';
import Rectangle from '../assets/Rectangle.png';

const Home = () => {

    const slides = [
        {
            image: Slide1,
            content: `A Fresh Approach to Market\nResearch`
        },
        {
            image: Slide2,
            content: `From Data to Decisions:
                      Tailored research as unique as your brand`
        },
        {
            image: Slide3,
            content: `Your customers don't fit in a 
                      box, and neither does our 
                      approach`
        },
    ]

    return (
        <Box>
            {/* container 1 */}
            <Grid className='container-1'>
                <Header />
            </Grid>

            {/* container 2 */}
            <Grid className='container-2' size={12}>
                <Grid className='slide-content' gap={10}>
                    <img src={slides[0]?.image} alt='Picture' />
                    <Typography className='slide-text'>
                        {slides[0]?.content}
                        <span className='dot-color'>.</span>
                    </Typography>
                </Grid>
            </Grid>

            {/* container 3 */}
            <Grid className='container-3' size={12}>
                <Grid>
                    <Box sx={{ bottom: -15, zIndex: 100, left: 40}}>
                        <img src={Girl} alt='Picture' />
                    </Box>
                    <img src={Rectangle} alt='Picture' style={{position: 'absolute', top: 60}} />
                </Grid>

                <Grid>
                    <Grid>

                    </Grid>

                    <Grid>

                    </Grid>
                </Grid>
            </Grid>

            {/* container 4 */}
            <Grid>

            </Grid>
        </Box>
    )
}

export default Home