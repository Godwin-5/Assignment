import './index.css'
import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Header from "./header/header"
import Slide1 from '../assets/sliders/slide1.svg';
import Slide2 from '../assets/sliders/slide2.svg';
import Slide3 from '../assets/sliders/slide3.png';
import GirlPic from '../assets/girl.png';
import GroupIcon from '../assets/svgcomponents/GroupIcon';
import QualitativeIcon from '../assets/svgcomponents/QualitativeIcon'
import QuantitativeIcon from '../assets/svgcomponents/QuantitativeIcon'
import ArrowRight from '../assets/svgcomponents/Arrow';
import GreenBG from '../assets/summary/Green square.png'
import GreenBGOverlay from '../assets/summary/Green square 2.png'
import VioletBG from '../assets/summary/violet rectangle.png'
import VioletBGOverlay from '../assets/summary/violet rectangle 2.png'
import GreyBG from '../assets/summary/grey rectangle.png'
import GreyBGOverlay from '../assets/summary/grey rectangle 2.png'
import RedBG from '../assets/summary/red square.png'
import RedBGOverlay from '../assets/summary/red square 2.png'
import RedBGOverlay2 from '../assets/summary/red square 3.png'
import IndustrySlides from './industryslides';
import Eclipse from "../assets/Eclipse.png"
import RedEclipse from "../assets/red eclipse.png"
import { useEffect, useState } from 'react';
import Footer from './footer';

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
                      approach`,
        },
    ]

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [showSlider, setShowSlider] = useState(true)
    const [showSliderText, setShowSliderText] = useState(true)

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
            <Grid className='container-2' size={{ xs: 12, md: 6 }} sx={{ minHeight: '570px' }}>
                <Grid container className='slide-content' gap={10}>
                    <img
                        src={slides[activeSlideIndex]?.image}
                        alt='Picture'
                        style={{ height: activeSlideIndex === 2 ? '23%' : '30%', width: activeSlideIndex === 2 ? '23%' : '30%', visibility: !showSlider && 'hidden' }}
                    />

                    <Typography className='slide-text' sx={{ visibility: !showSliderText && 'hidden' }}>
                        {slides[activeSlideIndex]?.content}
                        <span className='dot-color'>.</span>
                    </Typography>
                </Grid>

                <Grid className='ellipse-container' gap={2}>
                    <img src={activeSlideIndex === 0 ? RedEclipse : Eclipse} alt='dot' className='eclipse' />
                    <img src={activeSlideIndex === 1 ? RedEclipse : Eclipse} alt='dot' className='eclipse' />
                    <img src={activeSlideIndex === 2 ? RedEclipse : Eclipse} alt='dot' className='eclipse' />
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
            <Grid className='container-4' container rowSpacing={2}>
                <Grid container size={{ xs: 12, md: 9, xl: 6 }}>
                    <Typography className='summary-title'>We’re a full-service B2B market research thought partner committed to strengthening your strategies with deep, subject matter expertise.</Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <div className='image-container'>
                            <Typography className='overlay-text-title'>Branding and Advertising Communication</Typography>
                            <Typography className='overlay-text-desc'>
                                We help brands resonate. From brand perception and awareness to message testing and ad effectiveness, our research empowers you to communicate with clarity and impact. Backed by qualitative insights and robust tracking, we ensure your brand voice connects with the right audience.
                            </Typography>
                            <img src={GreenBG} className='image' />
                            <img src={GreenBGOverlay} className='sub-image' />
                        </div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <div className='image-container'>
                            <Typography className='overlay-text-title'>Market Opportunity Research</Typography>
                            <Typography className='overlay-text-desc-2'>
                                Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility, and maps competitive dynamics. Whether you're planning a launch or exploring new segments, we provide the insights to make bold, informed moves.
                            </Typography>
                            <img src={VioletBG} className='image' />
                            <img src={VioletBGOverlay} className='sub-image' />
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <div className='image-container'>
                            <Typography className='overlay-text-title-2'>Customer Research and Segmentation</Typography>
                            <Typography className='overlay-text-desc-2'>
                                Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.
                            </Typography>
                            <img src={GreyBG} className='image' />
                            <img src={GreyBGOverlay} className='sub-image' />
                        </div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <div className='image-container'>
                            <Typography className='overlay-text-title-2'>Product Research</Typography>
                            <Typography className='overlay-text-desc-2'>
                                Build products that solve real problems. From concept testing and feature prioritization to in-use feedback, we support every phase of product development. Our insights help you align innovation with user expectations — minimizing risk and maximizing relevance.
                            </Typography>
                            <img src={RedBG} className='image' />
                            <img src={RedBGOverlay} className='sub-image-2' />
                            <img src={RedBGOverlay2} className='sub-image' style={{ paddingBottom: '10px', paddingRight: '40px' }} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            {/* container 5 */}
            <Grid container className='container-5' spacing={2}>
                <IndustrySlides />
            </Grid>

            {/* container 6 */}
            <Grid container className='container-6' spacing={2}>
                <Footer />
            </Grid>
        </Box>
    )
}

export default Home