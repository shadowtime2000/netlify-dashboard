import React from 'react';

import { Typography, Card, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@material-ui/core';

function Site(props) {
    return (
        <Card style={{minWidth: 275}} className="site">
            <CardActionArea>
                <CardMedia style={{height: 35}} image={`https://img.shields.io/netlify/${props.id}?style=for-the-badge`} title="Netlify Build Status" />
                <CardContent>
                    <Typography className="site-id" color="textSecondary" gutterBottom>
                      {props.id}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => props.onDelete(props.id)} size="small" color="primary">
                    Delete!
                </Button>
            </CardActions>
        </Card>
    )
}

export default Site;