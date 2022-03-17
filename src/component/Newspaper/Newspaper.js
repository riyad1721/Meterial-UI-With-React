import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=daa3ca419ab64f7f923c00245a05d219')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={3} md={3} >
                        <News article={article}></News>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;