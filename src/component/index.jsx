import './index.css'
import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import Header from "./header/header"
import Slide1 from '../assets/sliders/slide1.png';
import Slide2 from '../assets/sliders/slide2.png';
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

    const industrySlides = [
        {
            title: 'FMCG',
            subtitle: 'Meet Your Customers',
            desc: `Needs Every Time In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Sago can guide you to success:
                   Connect with the right people to make the right decisions even when you need to move quickly. Better understand not just what customers want and need, but why and how they make their
                   decisions. Gain feedback at every phase of product and ad development, from concept to execution with agile testing.`
        },
        {
            title: 'Retail and Merchandising',
            subtitle: 'Drive Smarter Decisions on the Shop Floor',
            desc: `In retail, every display, promotion, and product placement counts. Thought Metrics helps you:
                   Stay in tune with changing shopper behaviors and preferences.
                   Optimize in-store and online experiences based on real insights.
                   Test pricing, promotions, and layouts quickly to boost conversions.`
        },
        {
            title: 'Financial Services',
            subtitle: 'Build Trust with Every Transaction',
            desc: `In a space where confidence drives choices, our research gives you the edge to:
                   Understand what drives customer loyalty and defection.
                   Segment your audience to tailor services that truly resonate.
                   Refine messaging and product offerings to build long-term trust.`
        },
        {
            title: 'Insurance',
            subtitle: 'Simplify the Complex, Earn Customer Confidence',
            desc: `Insurance decisions are personal and complex — we help you:
                   Decode the motivations and anxieties behind insurance choices.
                   Test policy concepts, channels, and messaging before launch.
                   Build clarity and trust through research-led communication.`
        },
        {
            title: 'Investors',
            subtitle: 'See the Market Before It Moves',
            desc: `Whether you're sizing up a new market or evaluating a venture:
                   Use rigorous market assessments to make informed investment decisions.
                   Gauge brand traction and customer sentiment with real-time insights.
                   Back your thesis with evidence, not just instinct.`
        },
        {
            title: 'Media',
            subtitle: 'Create Content That Captures Minds',
            desc: `In media, engagement is everything. Our insights help you:
                   Understand audience preferences across platforms and formats.
                   Test content, characters, and story arcs before the launch.
                   Track media consumption shifts and stay ahead of trends.`
        },
        {
            title: 'Technology',
            subtitle: 'Design for Humans, Not Just Users',
            desc: `Innovation is only as good as its adoption. Thought Metrics enables you to:
                   Discover what real users want from your tools and platforms.
                   Uncover usability gaps through qualitative testing.
                   Optimize UX and messaging for clarity, trust, and adoption.`
        },
        {
            title: 'Automotive',
            subtitle: 'From Test Drive to Loyalty — Know the Journey',
            desc: `Buyers are evolving — from EV interest to digital-first expectations. We help you:
                   Understand the full decision-making journey, from research to purchase.
                   Test features, designs, and positioning for different segments.
                   Navigate category shifts and competitive dynamics with confidence.`
        },
        {
            title: 'Advertising and Marketing',
            subtitle: 'Make Every Message Matter',
            desc: `Creative is powerful when it connects. Our approach helps you:
                   Test campaign ideas, messages, and visuals before going live.
                   Track brand recall, perception, and effectiveness over time.
                   Measure emotional and cognitive response for deeper creative impact..`
        },
        {
            title: 'Human Resources',
            subtitle: 'Shape Cultures People Want to Belong To',
            desc: `Attracting and retaining talent starts with understanding people. We help you:
                   Explore employee motivations, engagement drivers, and pain points.
                   Test new HR initiatives before rollout.
                   Benchmark satisfaction and guide culture-building efforts.`
        },
        {
            title: 'Education',
            subtitle: 'Design Learning That Sticks',
            desc: `From students to institutions, we uncover insights that improve education outcomes:
                   Understand learner needs, habits, and barriers.
                   Test curricula, content, and platforms for effectiveness.
                   Track engagement and feedback to continuously improve learning delivery.`
        },
        {
            title: 'Healthcare and Life Sciences',
            subtitle: 'Build Empathy Into Every Innovation',
            desc: `Patients and providers each have unique needs — we help you listen better:
                   Understand patient journeys, behaviors, and gaps in care.
                   Test health communications and interventions for clarity and trust.
                   Equip R&D and marketing with real-world insights that save lives.`
        },
    ]

    const buttonNames = ["FMCG", "Retail and Merchandising", "Financial Services", "Insurance", "Investors", "Media",
        "Technology", "Automotive", "Advertising and Marketing", "Human Resources", "Education", "Healthcare and Life Sciences"
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
        </Box>
    )
}

export default Home