import './index.css'
import { Box, Grid, Typography } from "@mui/material"
import TitleIcon from '../../assets/footer/Group.svg'
import LinkedIn from '../../assets/footer/linkedin.svg'
import Twitter from '../../assets/footer/twitter.svg'
import VIcon from '../../assets/footer/Vicon.svg'

const Footer = () => {
    return (
        <>
            <Grid size={{ xs: 12, md: 1.8 }}>
                <Typography className="footer-header"><img src={TitleIcon} alt='pic' /> Thought Metrics</Typography>
                <div className='circle-container'>
                    <Box className='circle'>
                        <img src={LinkedIn} alt='pic' />
                    </Box>
                    <Box className='circle'>
                        <img src={Twitter} alt='pic' />
                    </Box>
                    <Box className='circle'>
                        <img src={VIcon} alt='pic' />
                    </Box>
                </div>
            </Grid>

            <Grid gap={12} size={{ xs: 12, md: 2.5 }}>
                <Typography className="footer-title">Research Methods</Typography>
                <Typography className='footer-subtitle'>Qualitative Research</Typography>
                <Typography className='footer-subtitle'>Quantitative Research</Typography>
                <Typography className='footer-subtitle'>Fieldwork</Typography>
                <Typography className='footer-subtitle'>Surveys</Typography>
                <Typography className='footer-subtitle'>Focus Group Discussions</Typography>
            </Grid>

            <Grid gap={12} size={{ xs: 12, md: 2.5 }}>
                <Typography className="footer-title">Capabilites</Typography>
                <Typography className='footer-subtitle'>Branding and Advertising Communication</Typography>
                <Typography className='footer-subtitle'>Market Opportunity Research</Typography>
                <Typography className='footer-subtitle'>Product Research</Typography>
                <Typography className='footer-subtitle'>Consumer Research and Segmentation</Typography>
            </Grid>

            <Grid gap={12} size={{ xs: 12, md: 2.5 }}>
                <Typography className="footer-title">Legal</Typography>
                <Typography className='footer-subtitle'>Privacy</Typography>
                <Typography className='footer-subtitle'>AI Policy</Typography>
                <Typography className='footer-subtitle'>Business Conduct and Ethics</Typography>
                <Typography className='footer-subtitle'>Site Disclaimer</Typography>
            </Grid>

            <Grid gap={12} size={{ xs: 12, md: 2.5 }}>
                <Typography className="footer-title">Connect</Typography>
                <Typography className='footer-subtitle'>Join Our Panel</Typography>
                <Typography className='footer-subtitle'>Request a Bid</Typography>
                <Typography className='footer-subtitle'>Careers</Typography>
                <Typography className='footer-subtitle'>Contact Us</Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} sx={{ position: 'relative' }}>
                <div style={{ border: '0.5px solid #fff', position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '100vw' }} />
                <Typography className='copyright-text'> &copy; Copyright 2025. All Rights Reserved.</Typography>
            </Grid>
        </>
    )
}

export default Footer