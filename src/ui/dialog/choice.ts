import { LooseObject } from "../../interface/LooseObject";

const scenes : LooseObject[] = [{
  sceneType: 'choiceScene',
  leftCharacter: {
    id: 'shrek-123',
    reaction: 'neutral'
  },
  rightCharacter: {
    id: 'waluigi-123',
    reaction: 'neutral'
  },
  speaker: 'left',
  branchOptions: {
    'Hello there!': [{
      sceneType: 'dialogScene',
      speechLines: [{
        line: 'Hello World!',
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
        line: 'Goodbye World!',
        leftCharacter: {
          id: 'shrek-123',
          reaction: 'neutral'
        },
        rightCharacter: {
          id: 'waluigi-123',
          reaction: 'neutral'
        },
        speaker: 'right'
      }],
      bgImage: 'https://technology.inquirer.net/files/2017/10/the-most-famous-windows-wallpaper-ever-turns-20-505668-2.jpg'
    }],
    'Get out of my swamp!': [{
      sceneType: 'cutScene',
      bgImage: 'https://technology.inquirer.net/files/2017/10/the-most-famous-windows-wallpaper-ever-turns-20-505668-2.jpg',
      line: 'Cut Scene!'
    }]
  },
  bgImage: 'https://technology.inquirer.net/files/2017/10/the-most-famous-windows-wallpaper-ever-turns-20-505668-2.jpg',
  line: 'This is an extremely long choice! Please wait until all the dialog is finished before making a selection!'
}];

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
