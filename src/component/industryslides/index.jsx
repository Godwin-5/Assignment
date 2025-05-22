import './index.css'
import { Box, Grid, Typography } from "@mui/material"
import FMCG from '../../assets/industryslides/FMCG.png'
import Retail from '../../assets/industryslides/Retail and merchandising.png'
import Financial from '../../assets/industryslides/Financial Services.png'
import Insurance from '../../assets/industryslides/Insurance.png'
import Investors from '../../assets/industryslides/Investors.png'
import Media from '../../assets/industryslides/Media.png'
import Tech from '../../assets/industryslides/Tech.png'
import Automobile from '../../assets/industryslides/Automobile.png'
import Advertising from '../../assets/industryslides/Advertising.png'
import HR from '../../assets/industryslides/HR.png'
import MaskGroup from '../../assets/industryslides/Mask Group.png'
import Pharma from '../../assets/industryslides/Pharma.png'
import { useState } from 'react'

const IndustrySlides = () => {

    const [selectedSlide, setSelectedSlide] = useState(0)

    const industrySlides = [
        {
            title: 'FMCG',
            subtitle: 'Meet Your Customers Needs Every Time',
            desc: `In the ever-evolving world of consumer packaged\ngoods, staying ahead of the curve is not just an\noption—it's a necessity. Here's how Sago can guide\nyou to success:\n
                   • Connect with the right people to make the right decisions even when you need to move quickly.\n
                   • Better understand not just what customers want and need, but why and how they make their
                     decisions.\n
                   • Gain feedback at every phase of product and ad development, from concept to execution with agile testing.`,
            image: FMCG
        },
        {
            title: 'Retail and Merchandising',
            subtitle: 'Drive Smarter Decisions on the Shop Floor',
            desc: `In retail, every display, promotion, and product\nplacement counts. Thought Metrics helps you:\n
                    • Stay in tune with changing shopper behaviors and preferences.\n
                    • Optimize in-store and online experiences based on real insights.\n
                    • Test pricing, promotions, and layouts quickly to boost conversions.`,
            image: Retail
        },
        {
            title: 'Financial Services',
            subtitle: 'Build Trust with Every Transaction',
            desc: `In a space where confidence drives choices, our research gives you the edge to:\n
                    • Understand what drives customer loyalty and defection.\n
                    • Segment your audience to tailor services that truly resonate.\n
                    • Refine messaging and product offerings to build long-term trust.`,
            image: Financial
        },
        {
            title: 'Insurance',
            subtitle: 'Simplify the Complex, Earn Customer Confidence',
            desc: `Insurance decisions are personal and complex — we help you:\n
                    • Decode the motivations and anxieties behind insurance choices.\n
                    • Test policy concepts, channels, and messaging before launch.\n
                    • Build clarity and trust through research-led communication.`,
            image: Insurance
        },
        {
            title: 'Investors',
            subtitle: 'See the Market Before It Moves',
            desc: `Whether you're sizing up a new market or evaluating a venture:\n
                    • Use rigorous market assessments to make informed investment decisions.\n
                    • Gauge brand traction and customer sentiment with real-time insights.\n
                    • Back your thesis with evidence, not just instinct.`,
            image: Investors
        },
        {
            title: 'Media',
            subtitle: 'Create Content That Captures Minds',
            desc: `In media, engagement is everything. Our insights help you:\n
                    • Understand audience preferences across platforms and formats.\n
                    • Test content, characters, and story arcs before the launch.\n
                    • Track media consumption shifts and stay ahead of trends.`,
            image: Media
        },
        {
            title: 'Technology',
            subtitle: 'Design for Humans, Not Just Users',
            desc: `Innovation is only as good as its adoption. Thought Metrics enables you to:\n
                    • Discover what real users want from your tools and platforms.\n
                    • Uncover usability gaps through qualitative testing.\n
                    • Optimize UX and messaging for clarity, trust, and adoption.`,
            image: Tech
        },
        {
            title: 'Automotive',
            subtitle: 'From Test Drive to Loyalty — Know the Journey',
            desc: `Buyers are evolving — from EV interest to digital-first expectations. We help you:\n
                    • Understand the full decision-making journey, from research to purchase.\n
                    • Test features, designs, and positioning for different segments.\n
                    • Navigate category shifts and competitive dynamics with confidence.`,
            image: Automobile
        },
        {
            title: 'Advertising and Marketing',
            subtitle: 'Make Every Message Matter',
            desc: `Creative is powerful when it connects. Our approach helps you:\n
                    • Test campaign ideas, messages, and visuals before going live.\n
                    • Track brand recall, perception, and effectiveness over time.\n
                    • Measure emotional and cognitive response for deeper creative impact..`,
            image: Advertising
        },
        {
            title: 'Human Resources',
            subtitle: 'Shape Cultures People Want to Belong To',
            desc: `Attracting and retaining talent starts with understanding people. We help you:\n
                    • Explore employee motivations, engagement drivers, and pain points.\n
                    • Test new HR initiatives before rollout.\n
                    • Benchmark satisfaction and guide culture-building efforts.`,
            image: HR
        },
        {
            title: 'Education',
            subtitle: 'Design Learning That Sticks',
            desc: `From students to institutions, we uncover insights that improve education outcomes:\n
                    • Understand learner needs, habits, and barriers.\n
                    • Test curricula, content, and platforms for effectiveness.\n
                    • Track engagement and feedback to continuously improve learning delivery.`,
            image: MaskGroup
        },
        {
            title: 'Healthcare and Life Sciences',
            subtitle: 'Build Empathy Into Every Innovation',
            desc: `Patients and providers each have unique needs — we help you listen better:\n
                    • Understand patient journeys, behaviors, and gaps in care.\n
                    • Test health communications and interventions for clarity and trust.\n
                    • Equip R&D and marketing with real-world insights that save lives.,`,
            image: Pharma
        },
    ]

    const buttonNames = [
        {
            id: 1,
            name: "FMCG"
        },
        {
            id: 2,
            name: "Retail and Merchandising"
        },
        {
            id: 3,
            name: "Financial Services"
        },
        {
            id: 4,
            name: "Insurance"
        },
        {
            id: 5,
            name: "Investors"
        },
        {
            id: 6,
            name: "Media"
        },
        {
            id: 7,
            name: "Technology"
        },
        {
            id: 8,
            name: "Automotive"
        },
        {
            id: 9,
            name: "Advertising and Marketing"
        },
        {
            id: 10,
            name: "Human Resources"
        },
        {
            id: 11,
            name: "Education"
        },
        {
            id: 12,
            name: "Healthcare and Life Sciences"
        }
    ]

    const handleSlideShow = (index) => {
        setSelectedSlide(index)
    }

    const handleSeeMore = () => {
        setSelectedSlide((prev) => prev + 1)

        if (selectedSlide === industrySlides?.length - 1) {
            setSelectedSlide(0)
        }
    }

    return (
        <>
            <Grid container size={12}>
                <Typography className='industry-title'>Designed to meet your unique needs.​</Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }} className='industry-slide-container'>
                <Box className='container'>
                    <Grid size={{ xs: 12, md: 7 }} className='text-container'>
                        <Typography className='title'>{industrySlides[selectedSlide]?.title}</Typography>
                        <Typography className='sub-title'>{industrySlides[selectedSlide]?.subtitle}</Typography>
                        <Typography className='desc'>{industrySlides[selectedSlide]?.desc}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }} sx={{ marginTop: '40px' }}>
                        <img src={industrySlides[selectedSlide]?.image} className='industry-image' />
                    </Grid>

                    <Box>
                        <Typography className='page'>{`${selectedSlide?.length > 1 ? `0${selectedSlide + 1}` : selectedSlide + 1}`}</Typography>
                        <Typography className='see-more' onClick={handleSeeMore}>See more</Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} className='button-nav-container' gap={2}>
                {buttonNames?.map((item, index) => (
                    <Box key={index} className='button' onClick={() => handleSlideShow(index)} sx={{ backgroundColor: selectedSlide === index && '#E8505E' }}>
                        <Typography className='button-name'>{item?.name}</Typography>
                    </Box>
                ))}
            </Grid>
        </>
    )
}

export default IndustrySlides