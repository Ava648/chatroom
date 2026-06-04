import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/* Firebase設定 */
const firebaseConfig = {
    apiKey: "AIzaSyBfxcYcYZifyoR9pVQqpoogNMkLAwpWKmE",
    authDomain: "chatroom-e43a7.firebaseapp.com",
    projectId: "chatroom-e43a7",
    storageBucket: "chatroom-e43a7.firebasestorage.app",
    messagingSenderId: "1062357861624",
    appId: "1:1062357861624:web:fde8e703ceda1a3201270d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* 房間密碼 */
const ROOM_PASSWORD = "123456";

/* 登入 */
window.login = function(){

    const user =
        document.getElementById("user").value.trim();

    const password =
        document.getElementById("password").value;

    if(user === ""){
        alert("請輸入暱稱");
        return;
    }

    if(password !== ROOM_PASSWORD){
        alert("房間密碼錯誤");
        return;
    }

    localStorage.setItem(
        "chatUser",
        user
    );

    document.getElementById("welcomeText")
        .innerText = `歡迎 ${user}`;

    document.getElementById("loginPage")
        .style.display = "none";

    document.getElementById("chatPage")
        .style.display = "block";
};

/* 發送訊息 */
window.sendMessage = async function(){

    const user =
        localStorage.getItem("chatUser");

    const msg =
        document.getElementById("msg")
        .value
        .trim();

    if(msg === ""){
        return;
    }

    try{

        await addDoc(
            collection(db,"messages"),
            {
                user: user,
                message: msg,
                time: serverTimestamp()
            }
        );

        document.getElementById("msg").value = "";

    }catch(error){

        console.error(error);

        alert("訊息送出失敗");
    }
};

/* Enter送出訊息 */
document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Enter" &&
            document.getElementById("chatPage").style.display !== "none"
        ){
            sendMessage();
        }

    }
);

/* 即時監聽聊天室 */
const q = query(
    collection(db,"messages"),
    orderBy("time")
);

onSnapshot(q,(snapshot)=>{

    let html = "";

    snapshot.forEach((doc)=>{

        const data = doc.data();

        html += `
            <div class="message">
                <div class="message-user">
                    ${data.user || "匿名"}
                </div>
                <div>
                    ${data.message || ""}
                </div>
            </div>
        `;
    });

    document.getElementById("messages")
        .innerHTML = html;

    const messagesDiv =
        document.getElementById("messages");

    messagesDiv.scrollTop =
        messagesDiv.scrollHeight;
});

/* 自動登入 */
window.addEventListener(
    "load",
    function(){

        const user =
            localStorage.getItem("chatUser");

        if(user){

            document.getElementById("welcomeText")
                .innerText = `歡迎 ${user}`;

            document.getElementById("loginPage")
                .style.display = "none";

            document.getElementById("chatPage")
                .style.display = "block";
        }

    }
);

console.log("ChatRoom Started");