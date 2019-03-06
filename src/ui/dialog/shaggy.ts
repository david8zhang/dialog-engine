import { LooseObject } from "../../interface/LooseObject";

const lebronPlayoffModeChoice = {
  sceneType: 'choiceScene',
  leftCharacter: {
    id: 'lebron-123',
    reaction: 'surprised'
  },
  rightCharacter: {
    id: 'shaggy-123',
    reaction: 'determined'
  },
  bgImage: 'https://i2.wp.com/mypbrand.com/wp-content/uploads/2017/04/safeway.jpg',
  line: "I'm going to make this quick",
  speaker: 'right',
  branchOptions: {
    'Beg for mercy': [{
      sceneType: 'dialogScene',
      speechLines: [{
        line: "Please don't kill me",
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'surprised'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'left'
      }, {
        line: "I'm sorry, little one",
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'surprised'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'right'
      }, {
        line: "It must be done",
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'surprised'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'right'
      }],
      bgImage: 'https://i2.wp.com/mypbrand.com/wp-content/uploads/2017/04/safeway.jpg'
    }, {
      sceneType: 'cutScene',
      bgImage: 'https://media.giphy.com/media/fjqI7niSnQBuo/giphy.gif',
      line: 'Lebron was destroyed'
    }],
    "Activate Playoff Mode": [{
      sceneType: 'cutScene',
      bgImage: 'https://www.geek.com/wp-content/uploads/2015/08/lbjssjfeat-625x350.jpg',
      line: 'Lebron activated playoff mode'
    }, {
      sceneType: 'cutScene',
      bgImage: 'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg',
      line: 'But the Lakers miss the playoffs!'
    }, {
      sceneType: 'cutScene',
      bgImage: 'https://cdn.vox-cdn.com/thumbor/0rrrHkO7g5icyMGJ7FlZbwDYRCE=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/9624449/lebron_instagram_.png',
      line: 'Lebron was waived'
    }]
  }
}

const lebronFightChoice = {
  sceneType: 'choiceScene',
  leftCharacter: {
    id: 'lebron-123',
    reaction: 'surprised'
  },
  rightCharacter: {
    id: 'shaggy-123',
    reaction: 'determined'
  },
  bgImage: 'https://i2.wp.com/mypbrand.com/wp-content/uploads/2017/04/safeway.jpg',
  line: "Scooby snacks won't work on me this time",
  speaker: 'right',
  branchOptions: {
    'I surrender': [{
      sceneType: 'dialogScene',
      speechLines: [{
        line: "I surrender",
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'surprised'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'left'
      }, {
        line: "It's too late for that now",
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'surprised'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'right'
      }],
      bgImage: 'https://i2.wp.com/mypbrand.com/wp-content/uploads/2017/04/safeway.jpg'
    }, lebronPlayoffModeChoice],
    "I'm the GOAT": [{
      sceneType: 'cutScene',
      bgImage: 'https://randomoverload.org/wp-content/uploads/2019/01/c8c3a9KnMdD_460s.jpg',
      line: 'Sorry, mate. Wrong path'
    }]
  }
}

const scenes : LooseObject[] = [{
  sceneType: 'choiceScene',
  leftCharacter: {
    id: 'lebron-123',
    reaction: 'neutral'
  },
  rightCharacter: {
    id: 'shaggy-123',
    reaction: 'neutral'
  },
  bgImage: 'https://i2.wp.com/mypbrand.com/wp-content/uploads/2017/04/safeway.jpg',
  line: 'Wanna sprite cranberry?',
  speaker: 'left',
  branchOptions: {
    'Walk on his face': [{
      sceneType: 'dialogScene',
      bgImage: 'https://i2.wp.com/mypbrand.com/wp-content/uploads/2017/04/safeway.jpg',
      speechLines: [{
        line: "It's the thirst thirstiest time of the year",
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'neutral'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'neutral'
        },
        speaker: 'left'
      }, {
        line: 'Say hi to your boys punk',
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'neutral'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'right'
      }, {
        line: 'bakana',
        leftCharacter: {
          id: 'lebron-123',
          reaction: 'surprised'
        },
        rightCharacter: {
          id: 'shaggy-123',
          reaction: 'determined'
        },
        speaker: 'left'
      }]
    }, lebronFightChoice],
    'Walk away': [{
      sceneType: 'cutScene',
      bgImage: 'https://randomoverload.org/wp-content/uploads/2019/01/c8c3a9KnMdD_460s.jpg',
      line: 'Sorry, mate. Wrong path'
    }]
  }
}];


const characters : LooseObject[] = [{
  name: 'Shaggy',
  reactions: {
    surprised: 'https://clipground.com/images/shaggy-clipart-3.gif',
    neutral: 'https://upload.wikimedia.org/wikipedia/en/8/87/ShaggyRogers.png',
    determined: 'https://img.fireden.net/v/image/1508/47/1508473867812.png'
  },
  characterId: 'shaggy-123'
}, {
  name: 'Sprite Cranberry Lebron',
  reactions: {
    neutral: 'https://i.redd.it/hze0in7ozsw11.jpg',
    happy: 'https://i.warosu.org/data/ck/img/0098/52/1513564723620.png',
    surprised: 'https://usatftw.files.wordpress.com/2018/06/964667062_100285808.jpg?w=1000&h=600&crop=1'
  },
  characterId: 'lebron-123'
}]

export const scene = {
  scenes,
  characters
}