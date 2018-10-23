# MusicList2
A website for tracking music and albume, which is created following the [online course](https://closebrace.com/tutorials/2017-03-06/five-minute-react-01-installing-sublime-text).
It created a Node.js-based API and talk to it with a React.js-based front-end. For the database, I chose mongodb.

**Please Note:** If you want to run after cloning, it requires the creation of a file at the top level called `config.json`.
You can learn how to create this file by following Tutorial #63, but here's an example of what it should look like. You'll of course have to use your own API Keys and secrets.

```
{
  "crypto": {
    "secret": "sda46ufgh239d7fjhwi0sejhrgw4ersjdf8u7eweoi42hg0siojg"
  },
  "expressSession" : {
    "secret": "bmoe5r8hb98fhsbso93ikdfgbs0u4sfg89dhsogsd09fy4pf9fdh"
  },
  "mailgun": {
    "apiKey": "key-a6831fad9c681569479ab46734f662a8",
    "domain": "sandboxfa58bac976052d5e93f1cfa0b54c5337.mailgun.org"
  }
}
```
