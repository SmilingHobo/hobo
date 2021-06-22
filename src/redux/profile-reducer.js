const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world', likesCount: 25},
        {id: 2, message: 'Hello world', likesCount: 12},
        {id: 2, message: 'Hello world', likesCount: 12},
        {id: 2, message: 'Hello world', likesCount: 12}
    ],
    newPostText: 'just do it'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST:{
            return {
                ...state,
                newPostText: action.newText
            }
            }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text) =>
    ({type: 'UPDATE_NEW_POST', newText: text})

export default profileReducer;
