import rerenderTree from "../Render.js"

const state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello, yes this is dog ЪУЪ, СЮКА!", likes: "15" },
            { id: 2, message: "I am learning React!", likes: "23" },
        ],
        newPostText: "",
    },

    dialogPage: {
        dialog: [
            { id: 1, name: "Ilia" },
            { id: 2, name: "Anna" },
            { id: 3, name: "Dovakin" },
            { id: 4, name: "Doomboy" },
        ],
        message: [
            { id: 1, message: "Hi!" },
            { id: 1, message: "YO!" },
        ],
    }
};

export function addPost() {

    const { posts } = state.profilePage;
    // let { newPostText } = state.profilePage; почему не работает деструктуризация?

    let newPost = {
        id: posts.length + 1,
        message: state.profilePage.newPostText,//newPostText
        likes: 0,
    }

    posts.push(newPost);
    state.profilePage.newPostText = "";//newPostText

    //всё, что ниже - работает и добавляет новый месседж в массив, но не выводит на страницу при рендере
    //пока использую мутацию push выше
    // let addNewPost = [];//почуму-то выбивает undefined
    // addNewPost = [...posts, newPost];// и тут почуму-то выбивает undefined, но [...posts, newPost] показывает, что такие эдементы есть
    // rerenderTree(addNewPost);
    rerenderTree(state);

}

export function updateNewPostText(newText) {

    state.profilePage.newPostText = newText;

    rerenderTree(state);

}

export default state;