import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MaterialUI: React.FC = () => {
    return (
        <div>
            <br />
            <Button variant="contained" color="primary">
                MUIのボタン
            </Button>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="outlined" size="small">
                Small
            </Button>
            <Button variant="outlined" size="medium">
                Medium
            </Button>
            <Button variant="outlined" size="large">
                Large
            </Button>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="body1">Body Text</Typography>
            <Typography variant="caption">Caption Text</Typography>
        </div>
    );
}

export default MaterialUI