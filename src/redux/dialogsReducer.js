const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATED_MESSAGE_TEXT = 'UPDATED-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})
export const onMessageChangeActionCreator = (text) => ({
  type: UPDATED_MESSAGE_TEXT,
  newText: text
})


let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.newMessageText,
        status: "sent"
      };

      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, newMessage]
      };
    }

    case UPDATED_MESSAGE_TEXT:
      {
        return {
          ...state,
          newMessageText: action.newText
        };
      }

    default:
      return state;
  }
}
export default dialogsReducer;