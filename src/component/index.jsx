import './index.css'
import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Header from "../header/header"
import Slide1 from '../assets/slide1.png';
import Slide2 from '../assets/slide2.png';
import Slide3 from '../assets/slide3.png';
import GirlPic from '../assets/girl.png';
import Arrow from '../assets/arrow-right.png';
import GroupIcon from '../assets/svgcomponents/GroupIcon';
import QualitativeIcon from '../assets/svgcomponents/QualitativeIcon'
import QuantitativeIcon from '../assets/svgcomponents/QuantitativeIcon'
import ArrowRight from '../assets/svgcomponents/Arrow';

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

    const cardDatas = [
        {
            icon: <GroupIcon />,
            title: 'Audience',
            desc: 'Tap into a wide panel of respondents for any of your market research needs.'
        },

        {
            icon: <QualitativeIcon />,
            title: 'Qualitative Research.',
            desc: 'Tap into a wide panel of respondents for any of your market research needs.'
        },
        {
            icon: <QuantitativeIcon />,
            title: 'Quantitative Research',
            desc: 'Tap into a wide panel of respondents for any of your market research needs.'
        },
        {
            icon: <QualitativeIcon />,
            title: 'Quality Checks',
            desc: 'Tap into a wide panel of respondents for any of your market research needs.'
        },
    ]

    return (
        <Box>
            {/* container 1 */}
            <Grid className='container-1'>
                <Header />
            </Grid>

            {/* container 2 */}
            <Grid className='container-2' size={{ xs: 12, md: 6 }}>
                <Grid container className='slide-content' gap={10}>
                    <img src={slides[0]?.image} alt='Picture' />
                    <Typography className='slide-text'>
                        {slides[0]?.content}
                        <span className='dot-color'>.</span>
                    </Typography>
                </Grid>
            </Grid>

            {/* container 3 */}
            <Grid container className="container-3" spacing={2}>
                <Grid size={{ xs: 12, md: 6 }} className='image-subcontainer' gap={5}>
                    <Box className="image-wrapper">
                        <img src={GirlPic} alt="Picture" className="bounded-image" />
                    </Box>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography className='badge'>Unlock in-depth market insights</Typography>
                        <Typography className='badge-title'>Everything You Need, All in One Place</Typography>
                        <Typography className='badge-desc'>Harness our comprehensive solutions to unearth valuable insights that drive innovation, improve customer connections, and boost efficiency</Typography>
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container gap={3} className='card-container'>
                        {cardDatas.map((item, index) => (
                            <Box className="card" key={index}>
                                {item.icon}
                                <Typography variant="h6" className='card-title'>{item.title}</Typography>
                                <Typography variant="body2" className='card-desc'>{item.desc}</Typography>

                                <Box className='arrow-container'>
                                    <ArrowRight />
                                </Box>
                            </Box>
                        ))}
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