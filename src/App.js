import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail } from './components'
//box is nothing more than simple div element
const App = () =>
(
    <BrowserRouter>
        {/*The sx prop is a shortcut for defining custom styles that has access to the theme.
    The sx prop lets you work with a superset of CSS that packages 
    all of the style functions exposed in @mui/system. 
    You can specify any valid CSS using this prop, as well as many
    theme-aware properties that are unique to MUI System.*/}
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                {/* The exact param disables the partial matching for a route 
    and makes sure that it only returns the route if the path is
    an EXACT match to the current url. */}
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>

        </Box>
    </BrowserRouter>
);


export default App