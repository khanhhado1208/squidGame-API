const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
    { id: 1, text: "You took more from me than whatever I might possibly owe.", character: "Kang Sae-Byeok" },
    { id: 2, text: "Do you know what someone with no money has in common with someone with too much money? Living is no fun for them.", character: "Oh Il-nam" },
    { id: 3, text: "This is hell. What are the rules in hell?", character: "Jang Deok-Su" },
    { id: 4, text: "I wanted to just feel something, just one last time before I die.", character: "Oh Il-nam" },
    { id: 5, text: "We’ve already come too far to end this now.", character: "Cho Sang-Woo" },
    { id: 6, text: "Don’t do it. That isn’t you. You’re a good person at heart.", character: "Kang Sae-Byeok" },
    { id: 7, text: "I don’t have a home to go back to. In here, I stand a chance at least. But out there? I’ve got nothing out there.", character: "Player 322" },
    { id: 8, text: "Just in case either of us can actually make it out of this hellhole somehow, we’ll look after each other’s loved ones, okay?", character: "Kang Sae-Byeok" },
    { id: 9, text: "Mom, are you asleep? Hey, Ma. Mom, I’m home. Come on. I came home, Ma. Just, just open your eyes. Come on.", character: "Seong Gi-Hun" },
    { id: 10, text: "You have a reason to leave this place, but I don’t.", character: "Ji-Yeong" },
    { id: 11, text: "You can’t turn back now. There is no turning back from this point.", character: "Player 456" },
    { id: 12, text: "Stick with the strongest team if you want to survive.", character: "Heo Sung-tae" },
    { id: 13, text: "Doing something is always more fun than just watching.", character: "Kang Sae-Byeok" },
    { id: 14, text: "The world’s most dangerous people are the ones who have nothing to lose.", character: "Oh Il-nam" }
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