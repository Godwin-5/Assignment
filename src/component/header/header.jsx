import './header.css'
import { Box, Button, Grid, Typography } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";

const Header = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false)
    const [selectedDropdown, setSelectedDropdown] = useState({})

    const headerNames = [
        {
            id: 1,
            name: 'Research Methods',
        },
        {
            id: 2,
            name: 'Capabilities',
        },
        {
            id: 3,
            name: 'Industries',
        },
        {
            id: 4,
            name: 'Resources',
        },
    ]

    const handleToggleDropdown = (id) => {
        const selectedDropdown = headerNames?.find((item) => item?.id === id)
        setSelectedDropdown((prev) => prev?.id === id ? {} : selectedDropdown)
        setToggleDropdown(!toggleDropdown)
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Grid className='header' gap={1}>
                {headerNames?.map((item) => (
                    <Box key={item?.id} sx={{ display: 'flex' }} onClick={() => handleToggleDropdown(item?.id)}>
                        <Typography className="header-font">{item?.name}</Typography>
                        <Box>
                            {selectedDropdown?.id === item?.id && toggleDropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </Box>
                    </Box>
                ))}

                <Box
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: '#E8505E',
                        zIndex: 10,
                        width: '100%'
                    }}
                >
                    {/* Dropdown 1 */}
                    {selectedDropdown?.id === 1 && (
                        <Grid container sx={{ display: 'flex', padding: '40px 200px 40px 40px' }} gap={5}>
                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-overview'>Understand our approach to B2B and B2C research.</Typography>
                                <Typography className='dropdown-overview2'>OVERVIEW</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Quantitative Research</Typography>
                                <Typography className='dropdown-1-title'>Quantitative Research</Typography>
                                <Typography className='dropdown-1-title'>Recruitment and Fieldwork</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Online and Offline Surveys </Typography>
                                <Typography className='dropdown-1-title'>Focus Group Discussions</Typography>
                                <Typography className='dropdown-1-title'>Quality Checks</Typography>
                            </Grid>
                        </Grid>
                    )}

                    {/* Dropdown 2 */}
                    {selectedDropdown?.id === 2 && (
                        <Grid container sx={{ display: 'flex', padding: '40px 200px 40px 40px' }} gap={5}>
                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-overview'>Understand our approach to B2B and B2C research.</Typography>
                                <Typography className='dropdown-overview2'>OVERVIEW</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Branding and Advertisement Communication</Typography>
                                <Typography className='dropdown-1-title'>Brand Perception Research</Typography>
                                <Typography className='dropdown-1-title'>Brand Awareness Research</Typography>
                                <Typography className='dropdown-1-title'>Brand Tracking Research</Typography>
                                <Typography className='dropdown-1-title'>Message Testing</Typography>
                                <Typography className='dropdown-1-title'>Advertising Effectiveness Research</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Market Opportunity Research</Typography>
                                <Typography className='dropdown-1-title'>Go-to-market Research</Typography>
                                <Typography className='dropdown-1-title'>Market Feasibility Study</Typography>
                                <Typography className='dropdown-1-title'>Market Entry Research</Typography>
                                <Typography className='dropdown-1-title'>Competitive Research</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Product Research</Typography>
                                <Typography className='dropdown-1-title'>Concept Tesing Research</Typography>
                                <Typography className='dropdown-1-title'>Conjoint Analysis</Typography>
                                <Typography className='dropdown-1-title'>MaxDiff Analysis</Typography>
                                <Typography className='dropdown-1-title'>Product Validation Testing</Typography>
                                <Typography className='dropdown-1-title'>UI/UX Research</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Customer Research and Segmentation</Typography>
                                <Typography className='dropdown-1-title'>Customer Journey Research</Typography>
                                <Typography className='dropdown-1-title'>Customer Loyalty Research</Typography>
                                <Typography className='dropdown-1-title'>Customer Satisfaction Research</Typography>
                                <Typography className='dropdown-1-title'>Persona Research</Typography>
                                <Typography className='dropdown-1-title'>Pricing Research</Typography>
                            </Grid>
                        </Grid>
                    )}

                    {/* Dropdown 3 */}
                    {selectedDropdown?.id === 3 && (
                        <Grid container sx={{ display: 'flex', padding: '40px 200px 40px 40px' }}>
                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-overview'>Understand our approach to B2B and B2C research.</Typography>
                                <Typography className='dropdown-overview2'>OVERVIEW</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>FMCG</Typography>
                                <Typography className='dropdown-1-title'>Retail and Merchandising</Typography>
                                <Typography className='dropdown-1-title'>Healthcare and Life Sciences</Typography>
                                <Typography className='dropdown-1-title'>Advertising and Marketing</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Financial Services and Institutions</Typography>
                                <Typography className='dropdown-1-title'>Insurance</Typography>
                                <Typography className='dropdown-1-title'>Investors</Typography>
                                <Typography className='dropdown-1-title'>Automotive</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Education</Typography>
                                <Typography className='dropdown-1-title'>Human Resources</Typography>
                                <Typography className='dropdown-1-title'>Media and Internet Publishers</Typography>
                                <Typography className='dropdown-1-title'>Technology</Typography>
                            </Grid>
                        </Grid>
                    )}

                    {/* Dropdown 4 */}
                    {selectedDropdown?.id === 4 && (
                        <Grid container sx={{ display: 'flex', padding: '40px 200px 40px 40px' }} gap={4}>
                            <Grid size={{ xs: 12, md: 2 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-overview'>Understand our approach to B2B and B2C research.</Typography>
                                <Typography className='dropdown-overview2'>OVERVIEW</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }} sx={{ backgroundColor: '#E8505E' }}>
                                <Typography className='dropdown-1-title'>Articles</Typography>
                                <Typography className='dropdown-1-title'>Reports</Typography>
                                <Typography className='dropdown-1-title'>Case Studies</Typography>
                                <Typography className='dropdown-1-title'>Webinars</Typography>
                            </Grid>
                        </Grid>
                    )}

                </Box>

                <Grid container gap={2} className='button-container' size={12}>
                    <Button variant="outlined" className="button1">Start Your Research</Button>
                    <Button variant="contained" className="button2" disableElevation>Join a Paid Focus Group</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header