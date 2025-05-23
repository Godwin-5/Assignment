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
        <Box>
            <Grid className='header' gap={1}>
                {headerNames?.map((item) => (
                    <Box key={item?.id} sx={{ display: 'flex' }}>
                        <Typography className="header-font">{item?.name}</Typography>
                        <Box onClick={() => handleToggleDropdown(item?.id)}>
                            {selectedDropdown?.id === item?.id && toggleDropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </Box>
                    </Box>
                ))}

                <Grid container gap={2} className='button-container' size={12}>
                    <Button variant="outlined" className="button1">Start Your Research</Button>
                    <Button variant="contained" className="button2" disableElevation>Join a Paid Focus Group</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header