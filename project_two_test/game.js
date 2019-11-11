const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const optionsdictionary = {
  "Start Game": {value: 0, color:"#DF9DB5", backgroundColor:"#4B9C55", href:"index2.html"},
  "Author": {value: 0, color:"#DF9DB5", backgroundColor:"#4B9C55"},
  "Water": {value: 1, color:"#4B9C55", backgroundColor:"#4B9C55",  opacity: '.9'},
  "Knife": {value: 3, color:"#BC3C3F"},
  "Apples": {value: 1, color:"#4B9C55"},
  "Torch": {value: 3, color:"#EFCE57"},
  "Run": {value: 1, color:"#4B9C55", backgroundColor:"#4B9C55"},
  "Hide": {value: 3, color:"#4B9C55"},
  "Fight": {value: 5, color:"#BC3C3F"},
  "Continue": {color: "#4B9C55", backgroundColor:"#4B9C55"},
  "Return": {color: "#BC3C3F", backgroundColor:"#BC3C3F"},
  "Scare": {value: 3, color:"#BC3C3F", backgroundColor:"#DF9DB5"},
  "Escape": {value: 1, color:"#BC3C3F"},
  "Bushes": {value: 5, color:"#EFCE57", backgroundColor:"#4B9C55"},
  "Rocks": {value: 1, color:"#EFCE57"},
  "Tree": {value: 1, color:"#EFCE57"},
  "North": {value: 1, color:"#4B9C55", backgroundColor:"#4B9C55"},
  "South": {value: 3, color:"#4B9C55"},
  "East": {value: 1, color:"#4B9C55"},
  "West": {value: 3, color:"#BC3C3F"},
  "Grass": {value: 1, color:"#EFCE57", backgroundColor:"#4B9C55"},
  "Hill": {value: 1, color:"#EFCE57", backgroundColor:"#4B9C55"},
  "Cross": {value: 5, color: "#E6CF7E", backgroundColor:"#4B9C55"},
  "Run Away": {value: 5, color: "#4B9C55", backgroundColor:"#BC3C3F"},
  "Yell": {value: 1, color: "#BC3C3F", backgroundColor:"white"},
  "Insects": {value: 1, color:"#EFCE57", backgroundColor:"#4B9C55"},
  "Green leaves": {value: 5, color:"#EFCE57", backgroundColor:"#BC3C3F"},
  "Purple fruit": {value: 5, color:"#EFCE57", backgroundColor:"#BC3C3F"},
  "Wander": {value: 3, color: "#EFCE57", backgroundColor:"#EFCE57"},
  "Signal": {value:1, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "Fire": {value:1, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "Mirror SOS": {value:1, color:"#EFCE57"},
  "Ground Markers": {value:3, color:"#EFCE57"},
  "Yes": {value:1, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "No": {value:5, color:"#EFCE57"},
  "Right": {value:3, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "Left": {value:3, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "Up": {value:3, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "Down": {value:3, color:"#EFCE57", backgroundColor:"#EFCE57"},
  "Big Fire": {value:1, color:"#EFCE57", backgroundColor:"#BC3C3F"},
  "Three Fires": {value:1, color:"#EFCE57"},
  "Forest Fire": {value:1, color:"#EFCE57"},
  "SOS": {value:1, color:"#EFCE57", backgroundColor:"#4B9C55"},
  "HELP": {value:1, color:"#EFCE57"},
  "Marking Trees": {value:1, color:"#EFCE57"},
}

var counter = 0;

function add() {
  counter += 1;
  return counter;
}
function add3() {
  counter += 3;
  console.log("fuck em")
  return counter;
}
function add5() {
  counter += 5;
  return counter;
}
// WIP counter
  // }
  // if (showTextNode(34) && (counter >= 40 )) {
  //   showTextNode(37)
  // }
  // if (showTextNode(34) && (20 < counter < 40)) {
  //   showTextNode(38)
  // }


function startGame() {
  state = {}
  showTextNode(1)


}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id ===
  textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild)
  {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }


  if (textNode.timeofday == "day") {
    console.log(textNode.timeofday)
    document.getElementById('back1').style.display = "block"
    document.getElementById('back').style.display = "none"
    document.getElementById('text').style.color = "white"
  }
  else if (textNode.timeofday == "night") {
    console.log(textNode.timeofday)
    document.getElementById('back').style.display = "block"
      document.getElementById('back1').style.display = "none"
        document.getElementById('text').style.color = "#0F0F3E"

  }


  textNode.options.forEach(option => {

    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.style = option.image
      button.classList.add('btn')
      // button.classList.add('button1')
      button.addEventListener('click', () => selectOption(option, option.text))
      optionButtonsElement.appendChild(button)
      button.style.backgroundColor = optionsdictionary[option.text].color

        }

      document.getElementById("box").style.opacity = optionsdictionary[option.text].opacity
      document.getElementById("box").style.background = optionsdictionary[option.text].backgroundColor


  })

}


function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function selectOption(option, optionText) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
  if (optionText == "Water") {
    // document.getElementById('counter')
    add()
    console.log("test")
    // console.log("counter");
  }
  console.log(optionText);
}
//
// var FT = Food(true);
// var FF = Food(false);
// var hasfood = false;

// on click, check id, if
// constant
var textNodes = [
{
  id: 36,
  timeofday: "night",
  text: "A text-based survival game to teach basic survival skills",
  options: [
    {
      text: 'Restart',
      nextText: 1
    }

  ]
},
  {
    id: 1,
    timeofday: "night",
    // hasfood = false,
    text: "NIGHT ONE \n \n \n You've found yourself abandoned and alone in a foreign place, surrounded only by nature and beautiful mountain landscapes. \n \n You don't know where you are and what you'll find in the nights to come. All you know is that you must survive in this large, dark forest.  \n \n You're having trouble trying to sleep - so you walk around under the stars. What do you find around you? Keep in mind - your decisions now are crucial to surviving in the wilderness. Choose wisely what you need most.",
    options: [
      {

        text: 'Water',
        // image: 'assets/knifenounproject.png', //not working:/
        setState: { Water: true },
        nextText: 2
      },
      {
        text: 'Knife',
        setState: { Knife: true },
        nextText: 3
      },
      {
        text: 'Apples',
        setState: { Food: true },
        nextText: 4
      },
      {
        text: 'Torch',
          setState: { Light: true },
        nextText: 5
      }
    ]
  },
  {
    id: 2,
    timeofday: "night",
    text: "NIGHT ONE \n \n You're glad a water bottle somehow made it with you. Youre staying hydrated with clean water, for now.",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Water,
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    timeofday: "night",
    text: "NIGHT ONE \n \n Important for defending yourself and as a tool. You'll need it to find food, you're already feeling hungry.",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Knife,
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    timeofday: "night",
    text: "NIGHT ONE \n \n These apples should come in handy when you start feeling hungry tomorrow.",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Food,
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    timeofday: "night",
    text: "NIGHT ONE \n \n At least you can see in the dark. A flashlight may help you find food or water - you're feeling hungry and thirsty already. ",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Light,
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    timeofday: "day",
    text: 'DAY ONE \n \n After a long night without shelter, you find yourself wandering around looking for somewhere to find shelter. After many hours, you finally find traces of human activity. You follow the trail for some time when you see three hooded men approaching your position. These men dont look friendly. You dont have much time. What do you do?',
    options: [
      {
        text: 'Run',
        requiredState: (currentState) => currentState.Food || currentState.Water,
        nextText: 7
      },
      {
        text: 'Run',
        requiredState: (currentState) => currentState.Light || currentState.Knife,
        nextText: 8
      },
      {
        text: 'Hide',
        requiredState: (currentState) => currentState.Food || currentState.Water,
        nextText: 9
      },
      {
        text: 'Hide',
        requiredState: (currentState) => currentState.Knife || currentState.Light,
        nextText: 10
      },
      {
        text: 'Fight',
        nextText: 11
      },
    ]
  },
  {
    id: 7,
    timeofday: "day",
    text: "DAY ONE \n \n The three hooded men saw you take off from the path! You feel plenty hydrated to keep on going at a steady pace for many miles.  After a mile, they finally lost your track. You kept running just to make sure they were no where near where you'd set up camp for the night.",
    options: [
      {
        text: "Continue",
        nextText: 14
      }
    ]
  },
  {
    id: 8,
    timeofday: "day",
    text: "DAY ONE \n \n The three hooded men saw you take off from the path! As you run away from them, you begin to feel weary because you haven't eaten or had anything to drink since you've been in this wilderness. You lose energy and the men quickly catch up to you.  You surrender to them. ",
    options: [
        {
          text: "Continue",
          nextText: 12
        }
    ]
  },
  {
    id: 9,
    timeofday: "day",
    text: "DAY ONE \n \n You found a great hiding place on their trail. You sit still in complete silence for two hours before they finally leave the area. They never find you.",
    options: [
        {
          text: "Continue",
          nextText: 14
        }
    ]
  },
  {
    id: 10,
    timeofday: "day",
    text: "DAY ONE  \n \n You found a great hiding place on their trail. You site still in complete silence for an hour, until your stomach begins grumbling. Because you haven’t found any sustenance, your stomach begins to growl louder and louder, loud enough in this quiet night that the men track you down and capture you!",
    options: [
        {
          text: "Continue",
          nextText: 12
        }
    ]
  },
  {
    id: 11,
    timeofday: "day",
    text: "DAY ONE  \n \n Never a wise idea to fight three on one",
    options: [
        {
          text: "Return",
          nextText: 6
        }
    ]
  },
  {
    id: 12,
    timeofday: "night",
    text: "NIGHT TWO \n \n The other two men wander off and you are left with one man guarding you. He doesn’t seem to be as aggressive as the others, but you’ve haven’t been treated with much sympathy. Should you try and escape your bonds, or try an scare away the man?",
    options: [
      {
         text: "Scare",
         nextText: 13
      },
      {
        text: "Escape",
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    timeofday: "night",
    text: "NIGHT TWO  \n \n You managed to escape the men. It was a close call - next time be more careful around strangers!",
    options: [
      {
          text: "Continue",
          nextText: 14
      }
    ]
  },
  {
    id: 14,
    timeofday: "day",
    text: "DAY TWO \n \n Today, you look up at the sun and notice a halo or glow around it. You remember that this means it is likely to rain in the next day. You need to find shelter for tonight, especially if it's going to rain. Theres some larger bushes in a meadow nearby, a decent sized rocky outcropping, or space underneath a downed tree that you could use to build your shelter. Which do you choose?",
    options: [
      {
        text: "Bushes",
        nextText: 15
      },
      {
        text: "Rocks",
        nextText: 16
      },
      {
        text: "Tree",
        nextText: 17
      }
    ]
  },
  {
    id: 15,
    timeofday: "night",
    text: "NIGHT THREE \n \n By nightfall, it had already begun to rain, and you were drenched and cold as the bushes did not provide much cover from the rain. You have succumbed to the most common way to die in the wilderness: hypothermia. Try a different shelter.  ",
    options: [
      {
        text: "Return",
        nextText: 14
      }
    ]
  },
  {
    id: 16,
    timeofday: "night",
    text: "NIGHT THREE \n \n By nightfall, it had already begun to rain and for the most part, the rocky outcropping kept you dry. A good choice for a shelter in rainy conditions. ",
    options: [
      {
      text: "Continue",
      nextText: 18
      }
    ]
  },
  {
    id: 17,
    timeofday: "night",
    text: "NIGHT THREE \n \n By nightfall, it had already begun to rain and, for the most part, the downed tree covered you from the rain and also kept you warm. A great choice for a shelter in rainy conditions.  ",
    options: [
      {
      text: "Continue",
      nextText: 18
      }
    ]
  },
  {
    id: 18,
    timeofday: "day",
    text: "DAY THREE \n \n It's been a tough few days, and you could really use a good meal. You're not sure what's north or east of you. To the south, there is a fast, rapid river. The west is the direction the men are in. Where should you go looking for food?",
    options: [
      {
      text: "North",
      nextText: 19
      },
      {
      text: "South",
      nextText: 20
      },
      {
      text: "East",
      nextText: 19
      },
      {
      text: "West",
      nextText: 21
      }
      ]
  },
  {
    id: 19,
    timeofday: "day",
    text: "DAY THREE \n \n Looking around you, you could head up a larger hill, or towards taller grasses. Where do you go?",
    options: [
      {
        text: "Hill",
        nextText: 22
      },
      {
        text: "Grass",
        nextText: 22
      }
    ]
  },
  {
    id: 20,
    timeofday: "day",
    text: "DAY THREE \n \n After some time walking south, you encounter the river. It's moving fast, do you want to cross it, or head back towards the hill or grassier areas?",
    options: [
      {
        text: "Grass",
        nextText: 22
      },
      {
        text: "Cross",
        nextText: 23
      },
      {
        text: "Hill",
        nextText: 22
      }
    ]
  },
  {
    id: 21,
    timeofday: "day",
    text: "DAY THREE \n \n You really shouldn't be heading that way. The men's camp territory seemed well-marked and monitored. Looking around you, where should you go, up the large hall, east, or toward grassier areas?",
    options: [
      {
        text: "Hill",
        nextText: 22
      },
      {
        text: "East",
        nextText: 22
      },
      {
        text: "Grass",
        nextText: 22
      }
    ]
  },
  {
    id: 22,
    timeofday: "day",
    text: "DAY THREE \n \n Mountain lion is approaching your position. It is aware of your presence in its territory. You could make a run for it, you could try an appear intimidating by yelling, or throw things at it to potentially scare it away. What should you do to escape the cougar? ",
    options: [
      {
        text: "Run Away",
        nextText: 24
      },
      {
        text: "Yell",
        nextText: 25
      },
      {
        text: "Scare",
        nextText: 26
      }
    ]

  },
  {
    id: 23,
    timeofday: "day",
    text: "DAY THREE \n \n Never cross a rapid river. It's current can be far stronger than it may appear. Return and choose a different path.",
    options: [
      {
        text:"Return",
        nextText: 20
      }
    ]
  },
  {
    id: 24,
    timeofday: "day",
    text: "DAY THREE \n \n Don't run away from cougars once they are aware of your presence - try to appear intimidating and slowly back away out of its territory. \n You've instigated a fight with the cougar. You have no choice but to defend yourself. ",
    options: [
      {
        text: "Fight",
        requiredState: (currentState) => currentState.Knife,
        nextText: 27
      },
      {
        text: "Fight",
        requiredState: (currentState) => currentState.Light,
        nextText: 28
      },
      {
        text: "Fight",
        requiredState: (currentState) => currentState.Food || currentState.Water,
        nextText: 29
      }
    ]
  },
  {
    id: 25,
    timeofday: "day",
    text: "DAY THREE \n \n You yell at the cougar and slowly back away from the wild animal. The cougar is jolted by your sounds, and begins to back away as well. You keep it up for another ten minutes until you're well out of its territory. Great survival choice. ",
    options: [
      {
        text: "Continue",
        nextText: 30
      }
    ]
  },
  {
    id: 26,
    timeofday: "day",
    text: "DAY THREE \n \n You instigated a fight with the cougar by throwing things at it! You have no choice but to defend yourself.",
    options: [
      {
        text: "Fight",
        requiredState: (currentState) => currentState.Knife,
        nextText: 27
      },
      {
        text: "Fight",
        requiredState: (currentState) => currentState.Light,
        nextText: 28
      },
      {
        text: "Fight",
        requiredState: (currentState) => currentState.Food || currentState.Water,
        nextText: 29
      }
    ]
  },
  {
    id: 27,
    timeofday: "day",
    text: "DAY THREE \n \n The cougar pounced on you, but thanks to your handy knife, you were able to defend yourself and take down the cougar. You're eating well, for now. ",
    setState: {Food: true},
    options: [
      {
        text: "Continue",
        nextText: 33
      }
    ]
  },
  {
    id: 28,
    timeofday: "day",
    text: "DAY THREE \n \n The cougar pounced on you, but you were resourceful and defending yourself with your flashlight. You knocked the cougar on the head with the barrel of the flashlight and scared it away. You're safe, for now.",
    options: [
      {
        text: "Continue",
        nextText: 30
      }
    ]
  },
  {
    id: 29,
    timeofday: "day",
    text: "DAY THREE \n \n The cougar pounced on you, and you had only your hands to defend yourself! It manages to bite you more than once, but after wrestling with the cougar for a few more minutes, you managed to get some good knocks to its head. The cougar is scared after a few more good hits and runs away. You're hurt, but safe, for now.",
    setState: { Hurt: true },
    options: [
      {
        text: "Continue",
        nextText: 30
      }
    ]
  },
  {
    id: 30,
    timeofday: "day",
    text: "DAY THREE \n \n After the cougar left, what around you could you potentially eat for food? There's plenty of vegetation around you, there are insects like ants and crickets, or a purple, unknown fruit growing from a tree. What do you choose to eat?",
    options: [
      {
        text: "Green leaves",
        nextText: 31
      },
      {
        text: "Insects",
        nextText: 32
      },
      {
        text: "Purple fruit",
        nextText: 31
      }
    ]
  },
  {
    id: 31,
    timeofday: "day",
    text: "DAY THREE \n \n Don't eat anything in the wild unless you are absolutely sure you know what it is. ",
    options: [
      {
        text: "Return",
        nextText: 30
      }
    ]
  },
  {
    id: 32,
    timeofday: "day",
    text: "DAY THREE \n \n Ants and crickets can be a great source of food in the wild. Try to avoid spiders and millepedes, however. You're hopging to sleep well tonight after your meal. ",
    setState: {Food: true},
    options: [
      {
        text: "Continue",
        nextText: 33
      }
    ]
  },
  {
    id: 33,
    timeofday: "night",
    text: "NIGHT FOUR \n \n It was a quiet night in the forest.",
    options: [
      {
        text: "Continue",
        nextText: 34
      }
    ]
  },
  {
    id: 34,
    timeofday: "night",
    text: "DAY FOUR \n \n During the fourth day in the forest, you’ve managed to eat food, find shelter, and survive everything the forest has thrown at you. Your eyes on set on escaping this forest once and for all. How should you escape?",
    options: [
      {
        text: "Wander",
        nextText: 35
      },
      {
        text: "Signal",
        nextText: 37
      }
    ]
  },
  {
    id: 35,
    text: "DAY FOUR \n \n What direction should you wander?",
    options: [
      {
        text: "North",
        nextText: 38,
      },
      {
        text: "South",
        nextText: 38,
      },
      {
        text: "East",
        nextText: 38,
      },
      {
        text: "West",
        nextText: 38,
      }
    ]

  },
  {
    id: 37,
    text: "DAY FOUR \n \n What kind of signal?",
    options: [
      {
        text: "Fire",
        nextText: 49,
      },
      {
        text: "Mirror SOS",
        requiredState: (currentState) => currentState.Light,
        nextText: 43,
      },
      {
        text: "Ground Markers",
        nextText: 44,
      }
    ]
  },
  {
    id: 38,
    text: "DAY SIX \n \n Do you want to leave ground markers?",
    options: [
      {
        text: "Yes",
        nextText: 44,
      },
      {
        text: "No",
        nextText: 40,
      }
    ]
  },
  {
    id: 39,
    text: "DAY TWELVE \n \n After many, many days of wandering the forest, a rescue team had managed to find your ground markers and track you down. You've been rescued from the forest. ",
    options: [
      {
        text: "Continue",
        nextText: 36,
      }
    ]
  },
  {
    id: 40,
    text: "DAY SEVEN \n \n Where should you wander?",
    options: [
      {
        text: "North",
        nextText: 41,
      },
      {
        text: "South",
        nextText: 41,
      },
      {
        text: "East",
        nextText: 41,
      },
      {
        text: "West",
        nextText: 41,
      }
    ]
  },
  {
    id: 41,
    text: "DAY EIGHT \n \n Where should you wander?",
    options: [
      {
        text: "Right",
        nextText: 42,
      },
      {
        text: "Left",
        nextText: 42,
      },
      {
        text: "Up",
        nextText: 42,
      },
      {
        text: "Down",
        nextText: 42,
      }
    ]
  },
  {
    id: 42,
    text: "DAY NINE \n \n Where should you wander?",
    options: [
      {
        text: "North",
        nextText: 41,
      },
      {
        text: "South",
        nextText: 41,
      },
      {
        text: "East",
        nextText: 41,
      },
      {
        text: "West",
        nextText: 41,
      }
    ]
  },
  {
    id: 41,
    text: "DAY TEN \n \n You should have left ground markers behind you...you're lost and have succumbed to the forest.",
    options: [
      {
        text: "Return",
        nextText: 34,
      }
    ]
  },
  {
    id: 49,
    text: "DAY FOUR \n \n You're feeling anxious and desperate. Should you burn one big fire, three small fires in a triange, or burn the forest down to attract rescue attention?",
    options: [
      {
        text: "Big Fire",
        nextText: 45,
      },
      {
        text: "Three Fires",
        nextText: 46,
      },
      {
        text: "Forest Fire",
        nextText: 47,
      }
    ]
  },
  {
    id: 43,
    text: "DAY FOUR \n \n Thanks to your flashlight from your first night in the forest, you can use the reflectiveness and light to signal SOS to the sky! Within a couple hours, rescuers find you. \n \n \n Thanks for playing!",
    // https://outdoors.stackexchange.com/questions/265/how-can-i-signal-for-help-in-the-wilderness
    options: [
      {
        text:"Continue",
        nextText: 36,
      }
    ]
  },
  {
    id: 44,
    text: "What type of ground marker should you use to signal for help? An SOS drawn on the ground, HELP, or marking trees?",
    options: [
      {
        text: "SOS",
        nextText: 48,
      },
      {
        text: "HELP",
        nextText: 48,
      },
      {
        text: "Marking Trees",
        nextText: 39,
      }
    ]
  },
  {
    id: 45,
    text: "DAY SIX \n \n After two days with the big fire going, rescuers finally see your smoke signal and locate your position. You've escaped the forest. Note however, that the international signal for in need of rescue to planes is three small fires positioned in a triangle. \n \n Thanks for playing!",
    options: [
      {
        text: "Continue",
        nextText: 36,
      },
    ]
  },
  {
    id: 46,
    text: "DAY FIVE \n \n Within one day of lighting your three small fires, rescuers notice this international help signal from the sky and locate your position. You've escaped from the forest. \n \n Thanks for playing!",
    options: [
      {
        text: "Continue",
        nextText: 36,
      }
    ]
  },
  {
    id: 47,
    text: "DAY FOUR \n \n You perished in the forest fire",
    options: [
      {
        text: "Return",
        nextText: 42,
      }
    ]
  },
  {
    id: 48,
    text: "DAY 12 \n \n Within a week of writing an international signal for help on the ground, rescuers were able to locate your position. You've barely escaped the forest. \n \n Thanks for playing!",
    options: [
      {
        text: "Continue",
        nextText: 36,
      }
    ]
  }

  // {
  //
  //   id: 7,
  //   text: "The three hooded men saw you take off from the path! As you run away from them, you begin to feel weary because you haven't eaten or had anything to drink since you've been in this wilderness. You lose energy and the men quickly catch up to you.  you surrender to them.",
  //   requiredState: (currentState) => currentState.Light,
  //   options: [
  //     {
  //         text: 'Continue'
  //     }
  //   ]
  // },
  // {
  //   id: 8,
  //   text: "The three hooded men saw you take off from the path! You feel plenty hydrated to keep on going at a steady pace for many miles.  After a mile, they finally lost your track. You kept running just to make sure they were no where near where you'd set up camp for the night.",
  //   requiredState: (currentState) => currentState.Food,
  //   options: [
  //       {
  //         text: 'Continue'
  //       }
  //   ]
  // },
  // {
  //   id: 9,
  //   text: 'The three hooded men saw you take off from the path! As you run away from them, you begin to feel weary because you havent eaten or had anything to drink since youve been in this wilderness. You lose energy and the men quickly catch up to you.  you surrender to them.',
  //   requiredState: (currentState) => currentState.Knife,
  //   options: [
  //     {
  //           text: 'Continue'
  //     }
  // },
  // {
  //   id: 10,
  //   text: '',
  //   options: [
  //     {
  //         text: 'Continue'
  //     }
  // }
]
// }

startGame()
