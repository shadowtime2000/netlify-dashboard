import React, { useState } from 'react';

import { Grid, Button } from '@material-ui/core';

import AddSite from '../AddSite/AddSite';
import SiteList from '../SiteList/SiteList';

function Dashboard() {

    const [sites, setSites] = useState(JSON.parse(localStorage.getItem("netlify-dashboard-sites")) || []);

    const newSite = (id) => {
        const newArr = sites.slice();
        newArr.push(id);
        setSites(newArr);
        localStorage.setItem("netlify-dashboard-sites", JSON.stringify(newArr));
    }

    const clearSites = () => {
        setSites([]);
        localStorage.setItem("netlify-dashboard-sites", "[]");
    }

    const deleteSite = (id) => {
        console.log(id);
        const newArr = sites.slice();
        setSites(newArr.filter((v) => v !== id));
        localStorage.setItem("netlify-dashboard-sites", JSON.stringify(newArr.filter((v) => v !== id)));
    }

    return (
        <Grid container className="dashboard">
            <Grid item xs={12}>
                <AddSite onNewSite={newSite} />
            </Grid>
            <Grid item xs={12}>
                <SiteList onDelete={deleteSite} sites={sites} />
            </Grid>
            <Grid item xs={12}>
                <Button color="secondary" variant="contained" onClick={clearSites}>Clear Sites</Button>
            </Grid>
        </Grid>
    )
}

export default Dashboard;