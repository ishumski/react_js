const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {

    state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hello, yes this is dog ЪУЪ, СЮКА!", likes: "15" },
                { id: 2, message: "I am learning React!", likes: "23" },
            ],
            newPostText: "",
        },

        dialogsPage: {
            dialog: [
                { id: 1, name: "Ilia" },
                { id: 2, name: "Anna" },
                { id: 3, name: "Dovakin" },
                { id: 4, name: "Doomboy" },
            ],
            messages: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "YO!" },
            ],
            newMessageBody: "",
        }
    },

    getState() {
        return this.state;
    },

    //лучше задать через func. expression, тогда мы сможем переопределить эту ф-цию ниже в subscribe(observe)
    rerenderTree() { },

    subscribe(observe) {
        this.callSubscriber = observe;
    },

    dispatch(action) {

        if (action.type === ADD_POST) {
            const { posts } = this.state.profilePage;
            // let { newPostText } = state.profilePage; почему не работает деструктуризация?

            let newPost = {
                id: posts.length + 1,
                message: this.state.profilePage.newPostText,//newPostText
                likes: 0,
            };

            posts.push(newPost);
            this.state.profilePage.newPostText = "";//newPostText

            //всё, что ниже - работает и добавляет новый месседж в массив, но не выводит на страницу при рендере
            //пока использую мутацию push выше
            // let addNewPost = [];//почуму-то выбивает undefined
            // addNewPost = [...posts, newPost];// и тут почуму-то выбивает undefined, но [...posts, newPost] показывает, что такие эдементы есть
            // rerenderTree(addNewPost);
            this.callSubscriber(this.state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this.state.profilePage.newPostText = action.newText;

            this.callSubscriber(this.state);

        } else if (action.type === SEND_MESSAGE) {
            let body = this.state.dialogsPage.newMessageBody;
            this.state.dialogsPage.newMessageBody = "";
            this.state.dialogsPage.messages.push({ id: 3, message: body });

            this.callSubscriber(this.state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this.state.dialogsPage.newMessageBody = action.body;
            this.callSubscriber(this.state);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (value) => ({ type: UPDATE_NEW_POST_TEXT, newText: value });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (value) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: value });


export default store;