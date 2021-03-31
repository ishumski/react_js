import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { storage, db } from "./firebase.js";
import firebase from "firebase";

function ImageUpload({ username }) {

    const [image, setImage] = useState(null);//добавляем картинки как файлы
    const [progress, setProgress] = useState(0);//анимация загрузки
    const [caption, setCaption] = useState("");//добаляем подпись

    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };

    return (
        <div>
            <progress value={progress} max="100" />
            <input type="text" onChange={(event) => setCaption(event.target.value)} placeholder="Enter the caption..." valuer={caption}></input>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload;