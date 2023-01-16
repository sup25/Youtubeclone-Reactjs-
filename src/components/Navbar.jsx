import React from 'react'
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => (
  //check Stack API to know what properties does Stack accepts

  <Stack direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: '#000',
      top: 0,
      justifyContent: "space-between"
    }}>
    <Link to="/" style={{
      display: "flex",
      alignItems: "center"
    }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);



export default Navbar