const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
    { id: 1, text: "You Took More From Me Than Whatever I Might Possibly Owe.", character: "Kang Sae-Byeok" },
    { id: 2, text: "Do You Know What Someone With No Money Has In Common With Someone With Too Much Money? Living Is No Fun For Them", character: "Oh Il-nam" },
    { id: 3, text: "This Is Hell. What Are The Rules In Hell", character: "Jang Deok-Su" },
    { id: 4, text: "I Wanted To Just Feel Something, Just One Last Time Before I Die", character: "Oh Il-Nam" },
    { id: 5, text: "We’ve Already Come Too Far To End This Now.", character: "Cho Sang-Woo" },
    { id: 6, text: "Don’t Do It. That Isn’t You. You’re A Good Person At Heart.", character: "Kang Sae-Byeok" },
    { id: 7, text: "I Don’t Have A Home To Go Back To. In Here, I Stand A Chance At Least. But Out There? I Got Nothing Out There", character: "Player 322" },
    { id: 8, text: "“Just In Case Either Of Us Can Actually Make It Out Of This Hellhole Somehow, We’ll Look After Each Other’s Loved Ones, Okay?", character: "Kang Sae-Byeok" },
    { id: 9, text: "Mom, Are You Asleep? Hey, Ma. Mom, I’m Home. Come On. I Came Home, Ma. Just, Just Open Your Eyes. Come On.", character: "Seong Gi-Hun" },
    { id: 10, text: "You Have A Reason To Leave This Place, But I Don’t.", character: "Ji-Yeong" },
    { id: 11, text: "Don’t Do It. That Isn’t You. You’re A Good Person At Heart.", character: "Kang Sae-Byeok" },
    { id: 12, text: "You can’t turn back now. There is no turning back from this point", character: "Player 456" },
    { id: 13, text: "Stick with the strongest team if you want to survive.", character: "Heo Sung-tae" },
    { id: 14, text: "Doing something is always more fun than just watching", character: " Kan Sae-byeok" }
];

app.get('/api/:id', (req, res)=>{
    const id = parseInt(req.params.id); //  Get Id from URL
    const quote = quotes.find(q=>q.id === id); // find correspoding id
    if (quote) {
        res.json(quote); 
      } else {
        res.status(404).json({ message: "Quote not found" }); //show error
      }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));