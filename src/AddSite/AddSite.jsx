import React, { useState } from 'react';

import { InputLabel, Input, Button, Grid } from '@material-ui/core';

function AddSite(props) {

    const [siteId, setSiteId] = useState("");

    const addSite = () => {
        if (siteId == "") return;
        props.onNewSite(siteId);
        setSiteId("");
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <InputLabel>Site ID</InputLabel><Input value={siteId} onChange={(e) => setSiteId(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={addSite} color="primary" variant="contained">Add Site!</Button>
            </Grid>
        </Grid>
    )
}

export default AddSite;