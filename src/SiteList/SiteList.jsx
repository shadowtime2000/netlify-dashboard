import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import Site from '../Site/Site';

function SiteList(props) {
    return (
        <Grid className="site-list" container spacing={3}>
            {props.sites.map((id, index) => <Grid key={index} item xs={3}><Site onDelete={props.onDelete} id={id} /></Grid>)}
        </Grid>
    )
}

export default SiteList;