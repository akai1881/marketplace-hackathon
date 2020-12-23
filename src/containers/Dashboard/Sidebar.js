import React from 'react';
import { fade, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Search from '../../components/Search';

const Sidebar = () => {
    return (
        <Paper>
            <Search />
        </Paper>
    );
};

export default Sidebar;