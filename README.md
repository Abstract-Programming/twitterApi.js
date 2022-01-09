# twitterApi.js
Super simple twitter api v2 GET endpoints wrapper. (User focused endpoints only)

More for use as a template to build your own then anything.

example use:
```
const twtrApi = require('twitterApi');
const twtr = new twtrApi.twitterApi('<your bearer token here>');

twtr.get_user('<any user id>').now().then(r => {
  console.log(r.data);
});
```
