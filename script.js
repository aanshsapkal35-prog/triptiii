const messages = [
  ["You are so beautiful.", "I hope you see yourself the way I see you."],
  ["Your eyes are honestly unreal.", "I could get lost in them and never complain."],
  ["You have the kindest heart.", "The world needs more people like you."],
  ["Your smile makes everything better.", "It has a way of making my whole day."],
  ["You are beautiful inside and out.", "And that is what makes you so special."],
  ["I love u soo much.", "More than these little words could ever explain."],
  ["You make ordinary moments feel magical.", "Just being you is enough."],
  ["Your eyes are my favourite view.", "They have a warmth I can't describe."],
  ["You are so caring.", "The way you think about others says everything."],
  ["I love u soo much.", "A little reminder, in case you needed one."],
  ["Your laugh is contagious.", "Please never stop laughing like that."],
  ["You are genuinely one of a kind.", "There is nobody quite like you."],
  ["You make people feel seen.", "That is a rare and beautiful gift."],
  ["I love u soo much.", "Today, tomorrow, and in all the little moments."],
  ["Your face deserves its own gallery.", "Seriously, how can someone be this pretty?"],
  ["You have such a lovely soul.", "Your kindness shows in everything you do."],
  ["Your eyes tell a thousand stories.", "And every single one is beautiful."],
  ["You are stronger than you realise.", "Even on the days you doubt yourself."],
  ["I love u soo much.", "Never ever forget how special you are to me."],
  ["You are my favourite kind of beautiful.", "The kind that goes far beyond looks."],
  ["Your presence feels like comfort.", "You make things feel a little lighter."],
  ["You deserve all the happiness.", "And every bit of love this world can give."],
  ["I love u soo much.", "No reason needed. Just because it's you."],
  ["Your eyes sparkle in the sweetest way.", "I could compliment them a million times."],
  ["You are thoughtful, gentle, and kind.", "Those little things make you extraordinary."],
  ["You make everything brighter.", "Even a normal day feels special with you."],
  ["I love u soo much.", "If I had to say it 100 times, I would."],
  ["You are effortlessly gorgeous.", "Never let anyone make you question that."],
  ["Your heart is pure gold.", "Please keep that beautiful kindness."],
  ["You are enough, exactly as you are.", "You never need to change to be loved."],
  ["I love u soo much.", "A thousand times over."],
  ["Your eyes have their own magic.", "They are impossible not to admire."],
  ["You are a whole sunshine.", "Even when you don't notice it yourself."],
  ["Your kindness is your superpower.", "It makes you even more beautiful."],
  ["I love u soo much.", "I hope this makes you smile."],
  ["You deserve soft days and happy moments.", "And people who appreciate your heart."],
  ["You are prettier than any sunset.", "And somehow even more lovely when you smile."],
  ["I adore the little things about you.", "They add up to someone amazing."],
  ["I love u soo much.", "Please keep this message for a day you need it."],
  ["Your eyes are genuinely captivating.", "I could write a whole poem about them."],
  ["You bring warmth wherever you go.", "Never underestimate that."],
  ["You are beautiful when you laugh.", "And beautiful when you're quiet, too."],
  ["I love u soo much.", "That's one thing I never want you to forget."],
  ["You have the sweetest energy.", "Being around you feels easy."],
  ["Your smile should be protected.", "It makes the world a nicer place."],
  ["You are rare.", "Not because you're perfect, but because you're you."],
  ["I love u soo much.", "In every possible way these words can mean."],
  ["Your eyes are little galaxies.", "And I could stare at the stars forever."],
  ["You make kindness look effortless.", "That is such a lovely thing."],
  ["You deserve to feel beautiful every day.", "Because you really, truly are."],
  ["I love u soo much.", "One more time, because why not?"],
  ["You are someone's favourite notification.", "And you deserve to feel appreciated."],
  ["Your heart makes you glow.", "That beauty cannot be copied."],
  ["You have the prettiest smile.", "I hope you have a reason to use it today."],
  ["I love u soo much.", "More than a screen can show."],
  ["You are a beautiful little universe.", "Full of things worth discovering."],
  ["Your eyes are unforgettable.", "They have a way of staying on my mind."],
  ["You are patient and understanding.", "Those qualities mean more than you know."],
  ["I love u soo much.", "I hope you never run out of reasons to smile."],
  ["You make being yourself look beautiful.", "Never hide the things that make you you."],
  ["Your kindness leaves a mark.", "People remember how you make them feel."],
  ["You are lovely in every season.", "On your best days and your messy ones."],
  ["I love u soo much.", "This little website is basically proof."],
  ["Your eyes deserve a thousand compliments.", "But I'll start with this: they're stunning."],
  ["You are graceful without trying.", "There is something so special about you."],
  ["You make life feel softer.", "And that is a beautiful thing to do."],
  ["I love u soo much.", "I really, really do."],
  ["You are more than your insecurities.", "Please be gentle with yourself."],
  ["Your smile is a masterpiece.", "No filter could ever improve it."],
  ["You are a good soul.", "And I hope life is just as good to you."],
  ["I love u soo much.", "Never doubt that you matter."],
  ["Your eyes are full of warmth.", "They make even silence feel lovely."],
  ["You are so easy to appreciate.", "There are a hundred things to admire."],
  ["You deserve compliments without asking.", "So here's another: you're amazing."],
  ["I love u soo much.", "And yes, I'm going to say it again."],
  ["You are beautiful in your own way.", "Actually, in a hundred different ways."],
  ["Your laugh is one of my favourite sounds.", "Keep filling the world with it."],
  ["You have a wonderful heart.", "Don't ever let the world make it cold."],
  ["I love u soo much.", "More than yesterday, and still not enough words."],
  ["Your eyes are honestly my weakness.", "How are they even that pretty?"],
  ["You make people feel comfortable.", "That is a quiet kind of magic."],
  ["You are worthy of every good thing.", "Never settle for less than kindness."],
  ["I love u soo much.", "This is your 100th reminder: you're adored."],
  ["You are stunning.", "No long explanation. Just the truth."],
  ["Your kindness, your smile, your eyes.", "Every little detail makes you wonderful."],
  ["You are someone's favourite person.", "And you should never forget your worth."],
  ["I love u soo much.", "I hope you felt every bit of it."],
  ["Your eyes shine brighter than you know.", "Keep looking at the world your way."],
  ["You are precious.", "Not for what you do, simply for who you are."],
  ["You make the world a little prettier.", "Just by being in it."],
  ["I love u soo much.", "And I could say it another hundred times."],
  ["Never stop being your lovely self.", "Your beauty is in all the little details."],
  ["You are kind. You are gorgeous. You are enough.", "And I hope you believe every word."],
  ["If you ever forget how special you are…", "Come back here and read this again."],
  ["I love u soo much.", "Always remember that you are appreciated."],
  ["Your eyes, your smile, your heart.", "Everything about you deserves a little appreciation."],
  ["You are a beautiful person.", "Inside, outside, and in all the ways that matter."],
  ["Thank you for being you.", "The world is lucky to have you in it."],
  ["I love u soo much.", "And that's the 100th thing. But not the last."]
];

const title = document.getElementById('mainText');
const sub = document.getElementById('subText');
const eyebrow = document.getElementById('eyebrow');
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');
const playButton = document.getElementById('play');
let current = 0;
let playing = true;
let timer;

function show(index) {
  current = (index + messages.length) % messages.length;
  title.classList.add('fade-out');
  sub.classList.add('fade-out');
  setTimeout(() => {
    title.textContent = messages[current][0];
    sub.textContent = messages[current][1];
    eyebrow.textContent = `${String(current + 1).padStart(2,'0')} / 100`;
    counter.textContent = `${String(current + 1).padStart(2,'0')} — 100`;
    progress.style.width = `${((current + 1) / messages.length) * 100}%`;
    title.classList.remove('fade-out');
    sub.classList.remove('fade-out');
  }, 420);
}
function next() { show(current + 1); }
function start() {
  clearInterval(timer);
  timer = setInterval(next, 4200);
}
function toggle() {
  playing = !playing;
  playButton.innerHTML = playing ? 'Ⅱ &nbsp; PAUSE' : '▶ &nbsp; PLAY';
  if (playing) start(); else clearInterval(timer);
}
document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', () => show(current - 1));
playButton.addEventListener('click', toggle);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.code === 'Space') { e.preventDefault(); toggle(); }
});
const particleBox = document.getElementById('particles');
for (let i = 0; i < 34; i++) {
  const p = document.createElement('i');
  p.className = 'particle';
  p.style.setProperty('--x', `${Math.random() * 100}%`);
  p.style.setProperty('--duration', `${12 + Math.random() * 18}s`);
  p.style.setProperty('--delay', `${-Math.random() * 25}s`);
  particleBox.appendChild(p);
}
show(0);
start();
