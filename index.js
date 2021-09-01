const express = require('express')
const app = express()
const port = 3000

app.get('/generatetbc', async (req, res) => {
    if(!req.query.avatarurl || req.query.avatarurl == "")
        return res.status(500).send('Need Avatar URL');
    const draw = require('./module/tbc.js');
    res.writeHead(
        200,
        {
          "Content-Type": "image/jpg",
        }
    );
    res.end( await draw(req.query.avatarurl))
})

app.get('/generatewelcome', async (req, res) => {
    if(!req.query.username || req.query.username == '')
        return res.status(500).send('Need username\n\nquery = username');
    if(!req.query.groupname || req.query.groupname == '')
        return res.status(500).send('Need groupname\n\nquery = groupname');
    if(!req.query.grouplength || req.query.grouplength == '')
        return res.status(500).send('Need grouplength\n\nquery = grouplength');
    if(!req.query.avatarurl || req.query.avatarurl == '')
        return res.status(500).send('Need avatar URL\n\nquery = avatarurl');
    res.writeHead(
        200,
        {
            "Content-Type": "image/jpg",
        }
    );
    const knights = require('knights-canvas')
    let wel = await new knights.Welcome()
                .setUsername(req.query.username)
                .setGuildName(req.query.groupname)
                .setGuildIcon('https://i.ibb.co/jr9Nh6Q/Thumb.jpg')
                .setMemberCount(req.query.grouplength)
                .setAvatar(req.query.avatarurl)
                .setBackground("https://i.ibb.co/KhtRxwZ/dark.png")
                .toAttachment()
    res.end( await wel.toBuffer());
})


app.get('/generatebye', async (req, res) => {
    if(!req.query.username || req.query.username == '')
        return res.status(500).send('Need username\n\nquery = username');
    if(!req.query.groupname || req.query.groupname == '')
        return res.status(500).send('Need groupname\n\nquery = groupname');
    if(!req.query.grouplength || req.query.grouplength == '')
        return res.status(500).send('Need grouplength\n\nquery = grouplength');
    if(!req.query.avatarurl || req.query.avatarurl == '')
        return res.status(500).send('Need avatar URL\n\nquery = avatarurl');
    res.writeHead(
        200,
        {
            "Content-Type": "image/jpg",
        }
    );
    const knights = require('knights-canvas')
    let wel = await new knights.Goodbye()
                .setUsername(req.query.username)
                .setGuildName(req.query.groupname)
                .setGuildIcon('https://i.ibb.co/jr9Nh6Q/Thumb.jpg')
                .setMemberCount(req.query.grouplength)
                .setAvatar(req.query.avatarurl)
                .setBackground("https://i.ibb.co/KhtRxwZ/dark.png")
                .toAttachment()
    res.end( await wel.toBuffer());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})