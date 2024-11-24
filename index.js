const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
  { id: 1, text: "You took more from me than whatever I might possibly owe.", character: "Kang Sae-Byeok", age: 27 },
  { id: 2, text: "Do you know what someone with no money has in common with someone with too much money? Living is no fun for them.", character: "Oh Il-nam", age: 77 },
  { id: 3, text: "This is hell. What are the rules in hell?", character: "Jang Deok-Su", age: 35 },
  { id: 4, text: "I wanted to just feel something, just one last time before I die.", character: "Oh Il-nam", age: 77 },
  { id: 5, text: "We’ve already come too far to end this now.", character: "Cho Sang-Woo", age: 32 },
  { id: 6, text: "Don’t do it. That isn’t you. You’re a good person at heart.", character: "Kang Sae-Byeok", age: 27 },
  { id: 7, text: "I don’t have a home to go back to. In here, I stand a chance at least. But out there? I’ve got nothing out there.", character: "Player 322", age: 29 },
  { id: 8, text: "Just in case either of us can actually make it out of this hellhole somehow, we’ll look after each other’s loved ones, okay?", character: "Kang Sae-Byeok", age: 27 },
  { id: 9, text: "Mom, are you asleep? Hey, Ma. Mom, I’m home. Come on. I came home, Ma. Just, just open your eyes. Come on.", character: "Seong Gi-Hun", age: 47 },
  { id: 10, text: "You have a reason to leave this place, but I don’t.", character: "Ji-Yeong", age: 23 },
  { id: 11, text: "You can’t turn back now. There is no turning back from this point.", character: "Player 456", age: 47 },
  { id: 12, text: "Stick with the strongest team if you want to survive.", character: "Heo Sung-tae", age: 40 },
  { id: 13, text: "Doing something is always more fun than just watching.", character: "Kang Sae-Byeok", age: 27 },
  { id: 14, text: "The world’s most dangerous people are the ones who have nothing to lose.", character: "Oh Il-nam", age: 77 }
];

  
app.get('/api/quotes', (req, res) => {
  res.json(quotes); // Get all quotes
});

app.get('/api/random', (req, res)=>{
  const randomIndex = Math.floor(Math.random() * quotes.length); // random quote
  res.json(quotes[randomIndex]);
})

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