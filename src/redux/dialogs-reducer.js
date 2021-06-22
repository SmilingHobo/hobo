const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Діма'},
        {id: 2, name: 'Marta'},
        {id: 3, name: 'Hobo'},
        {id: 4, name: 'Олик'},
        {id: 5, name: 'Коля'},
        {id: 6, name: 'Vadim'},
    ],
    messages: [
        {id: 1, message: 'Hard work enjoy'},
        {id: 2, message: 'Hard work'},
        {id: 3, message: 'Hard work'},
        {id: 4, message: 'Hard work'},
        {id: 5, message: 'Hard work'},
        {id: 6, message: 'Hard work'},
    ],

    newMessageBody: " "

}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body})

export default dialogsReducer;