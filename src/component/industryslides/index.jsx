import './index.css'
import { Box, Button, Grid, Typography } from "@mui/material"

const IndustrySlides = () => {

    const industrySlides = [
        {
            title: 'FMCG',
            subtitle: 'Meet Your Customers Needs Every Time',
            desc: `In the ever-evolving world of consumer packaged\ngoods, staying ahead of the curve is not just an\noption—it's a necessity. Here's how Sago can guide\nyou to success:\n
                   • Connect with the right people to make the right decisions even when you need to move quickly.\n• Better understand not just what customers want and need, but why and how they make their
                   decisions.\n• Gain feedback at every phase of product and ad development, from concept to execution with agile testing.`
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
        <>
            <Grid size={{ xs: 12, md: 6 }} className='industry-slide-container'>
                <Box className='container'>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className='title'>{industrySlides[0]?.title}</Typography>
                        <Typography className='sub-title'>{industrySlides[0]?.subtitle}</Typography>
                        <Typography className='desc'>{industrySlides[0]?.desc}</Typography>
                    </Grid>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} className='button-nav-container' gap={2.5}>
                {buttonNames?.map((item) => (
                    <Box className='button'>
                        <Typography>{item}</Typography>
                    </Box>
                ))}
            </Grid>
        </>
    )
}

export default IndustrySlides