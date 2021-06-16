import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {

        },
        dialogsPage: {

        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('State cheng');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar=sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;