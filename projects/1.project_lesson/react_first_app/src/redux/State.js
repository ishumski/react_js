import rerenderTree from "../Render.js"

const state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello, yes this is dog ЪУЪ, СЮКА!", likes: "15" },
            { id: 2, message: "I am learning React!", likes: "23" },
        ],
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

export function addPost(postMessage) {

    let { posts } = state.profilePage;

    let newPost = {
        id: posts.length + 1,
        message: postMessage,
        likes: 0,
    }
    posts.push(newPost);


    //всё, что ниже - работает и добавляет новый месседж в массив, но не выводит на страницу при рендере
    //пока использую мутацию push выше
    // let addNewPost = [];
    // addNewPost = [...posts, newPost];
    rerenderTree(state);
 

}

export default state;