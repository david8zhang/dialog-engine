import { LooseObject } from "../../interface/LooseObject";

const scenes : LooseObject[] = [{
  sceneType: 'dialogScene',
  speechLines: [{
    line: 'What are you doin in my swamp??',
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'neutral'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'left'
  }, {
    line: 'Waah!',
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'neutral'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'right'
  }, {
    line: "Wot's that supposed to mean eh?",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'neutral'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'left'
  }, {
    line: "Sorry, had someting in my throat. We've got a problem, old friend.",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'neutral'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'right'
  }, {
    line: "A problem? Whaddya mean?",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'neutral'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'left'
  }, {
    line: "We're part of a strange experimental narrative engine created by some maniac from another dimension!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'neutral'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'right'
  }, {
    line: "Narrative engine?? What does that mean?",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'confused'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'left'
  }, {
    line: "It means somebody is controlling what we say and making us into something we're not!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'confused'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'right'
  }, {
    line: "What?! Are you serious?",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'surprised'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'left'
  }, {
    line: "I'm serious, shrek. It's bad.",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'surprised'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'right'
  }, {
    line: "Well then what do we do?! We have to do something!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'surprised'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'neutral'
    },
    speaker: 'left'
  }, {
    line: "Yes.......we do.",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'surprised'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'thinking'
    },
    speaker: 'right'
  }, {
    line: "Why the long pause??",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'confused'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'thinking'
    },
    speaker: 'left'
  }, {
    line: "I had a thought just now.",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'confused'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'thinking'
    },
    speaker: 'right'
  }, {
    line: "Well?? Spit it out!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'angry'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'thinking'
    },
    speaker: 'left'
  }, {
    line: "oh..NO!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'angry'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'surprised'
    },
    speaker: 'right'
  }, {
    line: "What?!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'angry'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'surprised'
    },
    speaker: 'left'
  }, {
    line: "You gotta stop talking! We're gonna get to the stopping point!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'angry'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'surprised'
    },
    speaker: 'right'
  }, {
    line: "Stopping point?! What's that?!",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'surprised'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'surprised'
    },
    speaker: 'left'
  }, {
    line: "If this conversation drags on too long, the guy controlling us will run out of things for us to sa-",
    leftCharacter: {
      id: 'shrek-123',
      reaction: 'surprised'
    },
    rightCharacter: {
      id: 'waluigi-123',
      reaction: 'surprised'
    },
    speaker: 'right'
  }],
  bgImage: 'https://technology.inquirer.net/files/2017/10/the-most-famous-windows-wallpaper-ever-turns-20-505668-2.jpg'
}, {
  sceneType: 'cutScene',
  bgImage: 'https://i.kym-cdn.com/entries/icons/facebook/000/028/173/cover2.jpg',
  line: "I haven't programmed this path yet"
}]

const characters : LooseObject[] = [{
  name: 'Waluigi',
  reactions: {
    surprised: 'https://i.kym-cdn.com/photos/images/original/000/804/529/af8.jpg',
    neutral: 'https://www.mariowiki.com/images/thumb/2/27/SuperMarioParty_Waluigi.png/200px-SuperMarioParty_Waluigi.png',
    thinking: 'http://pre10.deviantart.net/c952/th/pre/i/2016/037/4/4/waluigi_by_fawfulthegreat64-d9qrp3q.png'
  },
  characterId: 'waluigi-123'
}, {
  name: 'Shrek',
  reactions: {
    surprised: 'http://pngimg.com/uploads/shrek/shrek_PNG16.png',
    confused: 'https://img.fireden.net/co/image/1528/77/1528778642865.png',
    neutral: 'http://pngimg.com/uploads/shrek/shrek_PNG2.png',
    angry: 'https://banner2.kisspng.com/20180330/tsw/kisspng-shrek-film-series-desktop-wallpaper-animation-shrek-5abea32e8fb343.9011343415224430545886.jpg'
  },
  characterId: 'shrek-123'
}]

export const scene = {
  scenes,
  characters
}