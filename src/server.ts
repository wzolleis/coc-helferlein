import app from './app';

const PORT: string = process.env.PORT || '5000';

app.listen(PORT, () => {
    console.log('started server @ port ', PORT);
});
