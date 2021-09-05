const express = require('express')
const app = express()

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
    let username = req.query.username, 
        groupname = req.query.groupname, 
        grouplength = req.query.grouplength, 
        groupavatar = req.query.groupavatar || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
        avatarurl = req.query.avatarurl || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
        bg = req.query.bg || 'https://i.ibb.co/KhtRxwZ/dark.png'
    res.writeHead(
        200,
        {
            "Content-Type": "image/jpg",
        }
    );
    const knights = require('knights-canvas')
    let wel = await new knights.Welcome()
                .setUsername(username)
                .setGuildName(groupname)
                .setGuildIcon(groupavatar)
                .setMemberCount(grouplength)
                .setAvatar(avatarurl)
                .setBackground(bg)
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
    let username = req.query.username, 
        groupname = req.query.groupname, 
        grouplength = req.query.grouplength, 
        groupavatar = req.query.groupavatar || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
        avatarurl = req.query.avatarurl || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
        bg = req.query.bg || 'https://i.ibb.co/KhtRxwZ/dark.png'
    res.writeHead(
        200,
        {
            "Content-Type": "image/jpg",
        }
    );
    const knights = require('knights-canvas')
    let wel = await new knights.Goodbye()
                .setUsername(username)
                .setGuildName(groupname)
                .setGuildIcon(groupavatar)
                .setMemberCount(grouplength)
                .setAvatar(avatarurl)
                .setBackground(bg)
                .toAttachment()
    res.end( await wel.toBuffer());
})
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Page Has Run On Port ${port}`);
})
