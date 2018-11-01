import express from 'express';

const app = express();

app.get('/', (_: any, res: any) => {
    res.send({hi: 'there'});

});

export default app;