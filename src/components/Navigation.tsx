import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";

function Navigation() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 2, borderBottom: '1px solid #ddd' }}>
            <Link component={RouterLink} to="/" variant="h6" underline="none" color="inherit">
                Про мене
            </Link>
            <Link component={RouterLink} to="/works" variant="h6" underline="none" color="inherit">
                Мої роботи
            </Link>
        </Box>
    );
}

export default Navigation;
