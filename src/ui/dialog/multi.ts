import { LooseObject } from "../../interface/LooseObject";

const scenes : LooseObject[] = [{
  sceneType: 'dialogScene',
  bgImage: 'http://www.edaville.com/sites/default/files/styles/slideshow/public/thomasontherails_2.jpg?itok=-nJvFGNn',
  speechLines: [{
    line: 'Attention all fortnite gamers!',
    speakerId: 'voiceover-pete',
    isMulti: true,
    leftCharacters: {
      'voiceover-pete': {
        id: 'voiceover-pete',
        reaction: 'neutral'
      }
    },
    rightCharacters: {
      'beter-griffin': {
        id: 'beter-griffin',
        reaction: 'neutral'
      },
      'squidward-kujo': {
        id: 'squidward-kujo',
        reaction: 'neutral'
      }
    },
  }, {
    line: 'Chinese Mario is in trouble and he needs your help, fast!',
    speakerId: 'voiceover-pete',
    isMulti: true,
    leftCharacters: {
      'voiceover-pete': {
        id: 'voiceover-pete',
        reaction: 'neutral'
      },
      'chinese-mario': {
        id: 'chinese-mario',
        reaction: 'neutral'
      }
    },
    rightCharacters: {
      'beter-griffin': {
        id: 'beter-griffin',
        reaction: 'neutral'
      },
      'squidward-kujo': {
        id: 'squidward-kujo',
        reaction: 'neutral'
      }
    }
  }, {
    line: 'Send me your credit card number and 3 digits on the back to help mario achieve the epic victory royal',
    speakerId: 'voiceover-pete',
    isMulti: true,
    leftCharacters: {
      'voiceover-pete': {
        id: 'voiceover-pete',
        reaction: 'neutral'
      },
      'chinese-mario': {
        id: 'chinese-mario',
        reaction: 'neutral'
      }
    },
    rightCharacters: {
      'beter-griffin': {
        id: 'beter-griffin',
        reaction: 'neutral'
      },
      'squidward-kujo': {
        id: 'squidward-kujo',
        reaction: 'neutral'
      }
    }
  }, {
    line: '妈妈咪呀',
    speakerId: 'chinese-mario',
    isMulti: true,
    leftCharacters: {
      'voiceover-pete': {
        id: 'voiceover-pete',
        reaction: 'neutral'
      },
      'chinese-mario': {
        id: 'chinese-mario',
        reaction: 'excited'
      }
    },
    rightCharacters: {
      'beter-griffin': {
        id: 'beter-griffin',
        reaction: 'neutral'
      },
      'squidward-kujo': {
        id: 'squidward-kujo',
        reaction: 'neutral'
      }
    }
  }]
}]

const characters : LooseObject[] = [{
  name: 'Voiceover Pete',
  reactions: {
    neutral: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9c2bd659-7d91-4f89-98d5-925955112f7c-profile_image-300x300.jpg'
  },
  characterId: 'voiceover-pete'
}, {
  name: 'B eter Griffin',
  reactions: {
    neutral: 'https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fbeter-briffin-58d4d6de488d8.png',
    angry: 'https://cdn.drawception.com/images/panels/2018/1-17/TKSyhj3gL9-12.png',
  },
  characterId: 'beter-griffin'
}, {
  name: 'Squidward Kujo',
  reactions: {
    neutral: 'https://i.kym-cdn.com/photos/images/newsfeed/001/090/377/e48.png',
  },
  characterId: 'squidward-kujo'
}, {
  name: 'Chinese Mario',
  reactions: {
    neutral: 'https://vignette.wikia.nocookie.net/meme/images/a/af/Mayro.png/revision/latest?cb=20161125150507',
    excited: 'https://vignette.wikia.nocookie.net/ocbattle/images/e/e6/Supra_mayro_bross_no_question_by_kimpes-d8rwhjp.png/revision/latest?cb=20171016154211'
  },
  characterId: 'chinese-mario'
}]

export const scene = { scenes, characters }