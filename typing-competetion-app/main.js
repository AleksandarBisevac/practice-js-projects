var playerArea = document.querySelector("#playerArea");
var playerBtn = document.querySelector("#playerBtn");
var comp1Area = document.querySelector("#comp1Area");
var comp1Btn = document.querySelector("#comp1Btn");
var comp2Area = document.querySelector("#comp2Area");
var comp2Btn = document.querySelector("#comp2Btn");
var comp3Area = document.querySelector("#comp3Area");
var comp3Btn = document.querySelector("#comp3Btn");
var startBtn = document.querySelector("#startBtn");
var infoBox = document.querySelector("#info");
var texts = [
  "Contentment is natural wealth, luxury is artificial poverty.",
  "Man only likes to count his troubles; he doesn’t calculate his happiness.",
  "Happiness consists in realizing it is all a great strange dream.",
  "What did you do as a child that made the hours pass like minutes? Herein lies the key to your earthly pursuits",
  "When you are content to be simply yourself and don’t compare or compete, everyone will respect you.",
  "I have the true feeling of myself only when I am unbearably unhappy.",
  "If you look for perfection, you’ll never be content.",
  "Action may not always bring happiness, but there is no happiness without action.",
  "The notion that a human being should be constantly happy is a uniquely modern, uniquely American, uniquely destructive idea.",
  "The truly faithless one is the one who makes love to only a fraction of you. And denies the rest.",
  "Love one another but make not a bond of love: Let it rather be a moving sea between the shores of your souls.",
  "When you love someone, you love the person as they are, and not as you’d like them to be.",
  "Love doesn’t just sit there, like a stone, it has to be made, like bread; remade all the time, made new.",
  "We need, in love, to practice only this: letting each other go. For holding on comes easily; we do not need to learn it.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  "We were together. I forget the rest.",
  "Love is friendship set to music.",
  "We are what we pretend to be, so we must be careful about what we pretend to be.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Become what you are.",
  "What labels me, negates me.",
  "Nobody is smarter than you are. And what if they are? What good is their understanding doing you?",
  "I must find a truth that is true for me.",
];
// potrebna nam je globalna var rand kako bismo znali šta da smestimo u nju, i šta da dodelimo kao typing source za naše komjuter igrače
var rand;
var winner = 0;

startBtn.addEventListener("click", timer);

function timer() {
  var time = 3;
  startBtn.innerHTML = time;
  var loop = setInterval(function () {
    time--;
    startBtn.innerHTML = time;
    if (time === 0) {
      clearInterval(loop);
      startBtn.style.display = "none";
      startTyping();
    }
  }, 1000);
}

function startTyping() {
  rand = Math.floor(Math.random() * texts.length);
  infoBox.innerHTML = "<h3>" + texts[rand] + "</h3>";
  infoBox.style.display = "block";
  playerArea.focus();
  comp1StartTyping();
  comp2StartTyping();
  comp3StartTyping();
  playerStartTyping();
}

function playerStartTyping() {
  playerArea.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      //.trim() iseca prazne prostore,
      var userText = playerArea.value.trim();
      if (userText == texts[rand]) {
        winner++;
        playerBtn.className = "form-control btn btn-success";
        playerBtn.innerHTML = "Position: " + winner;
      } else {
        playerBtn.className = "form-control btn btn-danger";
        playerBtn.innerHTML = "Wrong typing";
      }
    }
  });
}

function comp1StartTyping() {
  var text = texts[rand];
  var textArray = text.split("");
  type();
  function type() {
    if (textArray.length != 0) {
      comp1Area.value += textArray.shift();
      setTimeout(type, Math.round(Math.random() * (370 - 120)) + 120);
    } else {
      winner++;
      comp1Btn.className = "form-control btn btn-success";
      comp1Btn.innerHTML = "Position: " + winner;
    }
  }
}

function comp2StartTyping() {
  var text = texts[rand];
  var textArray = text.split("");
  type();
  function type() {
    if (textArray.length != 0) {
      comp2Area.value += textArray.shift();
      setTimeout(type, Math.round(Math.random() * (300 - 100)) + 100);
    } else {
      winner++;
      comp2Btn.className = "form-control btn btn-success";
      comp2Btn.innerHTML = "Position: " + winner;
    }
  }
}

function comp3StartTyping() {
  var text = texts[rand];
  var textArray = text.split("");
  type();
  function type() {
    if (textArray.length != 0) {
      comp3Area.value += textArray.shift();
      setTimeout(type, Math.round(Math.random() * (350 - 50)) + 50);
    } else {
      winner++;
      comp3Btn.className = "form-control btn btn-success";
      comp3Btn.innerHTML = "Position: " + winner;
    }
  }
}
