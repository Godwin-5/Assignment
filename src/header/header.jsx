import './header.css'
import { Box, Button, Grid, Typography } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";

const Header = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false)

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
        setToggleDropdown(!toggleDropdown)
    }

    return (
        <Box>
            <Grid className='header' gap={1}>
                {headerNames?.map((item) => (
                    <Box sx={{ display: 'flex' }}>
                        <Typography className="header-font" key={item?.id}>{item?.name}</Typography>
                        <Box onClick={() => handleToggleDropdown(item?.id)}>
                            {!toggleDropdown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                        </Box>
                    </Box>
                ))}

                <Grid container gap={2} className='button-container' size={12}>
                    <Button variant="outlined" className="button1">Start Your Research</Button>
                    <Button variant="contained" className="button2">Join a Paid Focus Group</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header