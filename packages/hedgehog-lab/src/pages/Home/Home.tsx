import React from "react";
import GettingStarted from "./_gettingStarted";
import Community from "./_community";
import {Stack} from "@mui/material";
import Draft from "./_draft";
import Meta from '../../components/Meta/Meta';

const Home = () => {
    return (
        <>  
            <Meta title='Home Page'/>
            <Stack spacing={4}>
                <Draft/>
                <GettingStarted/>
                <Community/>
            </Stack>
        </>
    )
}

export default Home;
