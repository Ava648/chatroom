# ChatRoom

一個使用 Firebase Firestore 建立的即時聊天室。

## 功能特色

* 暱稱登入
* 房間密碼驗證
* 即時聊天
* Firebase Firestore 雲端儲存
* GitHub Pages 網頁部署
* 支援多人同時聊天

## 技術架構

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend Service

* Firebase
* Cloud Firestore

### Deployment

* GitHub Pages

## 專案結構

```text
chatroom
├── index.html
├── app.js
└── README.md
```

## 使用方式

1. 開啟聊天室網址
2. 輸入暱稱
3. 輸入房間密碼
4. 進入聊天室
5. 開始聊天

## 資料結構

### messages Collection

```json
{
  "user": "Eve",
  "message": "Hello",
  "time": "timestamp"
}
```

## 未來規劃

* 多聊天室功能
* 訊息時間顯示
* 使用者上下線通知
* 訊息刪除功能
* 圖片上傳功能
* Firebase Authentication 登入

## Author

Ava648
