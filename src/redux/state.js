import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let store = {

  _callSubscriber() {
    console.log('State is changed')
  },
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 5 },
        { id: 2, message: "I'm fine", likeCount: 17 },
        { id: 2, message: "What's happening?", likeCount: 6 },
        { id: 2, message: "Hello", likeCount: 17 }
      ],

      newPostText: ''
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Andrey', avatar: "https://qph.fs.quoracdn.net/main-thumb-386254182-200-cjcqqkbawdwgclpwmezovuvcdevyhjxe.jpeg" },
        { id: 2, name: 'Masha', avatar: 'https://sun9-63.userapi.com/impg/8wa_JrPCDqv2DkGbEreYcXb97YCitafOJc3vzw/y9ibtyKafJI.jpg?size=130x130&quality=96&sign=a40deab55ac22afc3e8842bebe118ca2&c_uniq_tag=ddmbTYmVgnqkkwgt4OW4S7CTosceHQRP8G2GiulQFqY&type=album' },
        { id: 3, name: 'Sasha', avatar: 'https://altaweboldal.hu/wp-content/uploads/2017/03/karpati-zsolt.jpg' },
        { id: 4, name: 'Max', avatar: 'https://imagebox.cz.osobnosti.cz/foto/burak-celik-celik/T750905-9357b.jpg' }
      ],

      messagesData: [
        { id: 1, message: 'hi', status: 'sent' },
        { id: 2, message: 'Whatsup', status: 'recieved' },
        { id: 3, message: 'How are you', status: 'sent' }
      ],

      newMessageText: ''
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Max', avatar: 'http://pngimg.com/uploads/circle/circle_PNG81.png' },
        { id: 2, name: 'Dasha', avatar: 'http://pngimg.com/uploads/circle/circle_PNG81.png' },
        { id: 3, name: 'Kishka', avatar: 'http://pngimg.com/uploads/circle/circle_PNG81.png' }
      ]
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    profileReducer(this._state.profilePage, action);
    sidebarReducer(this._state.sidebar, action);
    dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);

    }


}

export default store;