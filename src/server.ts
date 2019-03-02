import { init, serverApp } from './serverApp';

const PORT: string = process.env.PORT || '5000';

init();


serverApp.listen(PORT, () => {
  console.log('started server @ port ', PORT);
});
