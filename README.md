# ChatRoom

一個使用 Firebase Firestore 建立的多人即時聊天室。

## 功能特色

* 暱稱登入
* 邀請碼驗證
* 即時訊息同步
* Firebase Firestore 雲端儲存
* GitHub Pages 免費部署
* 支援多人同時聊天
* Enter 快速送出訊息
* 關閉網站後需重新登入
* 即時監聽聊天室內容


## 技術架構

### Frontend

* HTML5
* CSS3
* JavaScript (ES6 Module)

### Cloud Service

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
3. 輸入邀請碼
4. 通過驗證後進入聊天室
5. 開始聊天

## 資料結構

### rooms Collection

```json
{
  "inviteCode": "xxx"
}
```

### messages Collection

```json
{
  "user": "Eve",
  "message": "Hello World",
  "time": "timestamp"
}
```

## Firestore 結構

```text
rooms
└── general
    └── inviteCode

messages
├── document1
├── document2
└── document3
```

## 已完成功能

* Firebase 專案建立
* Firestore Database 建立
* GitHub Pages 部署
* 即時聊天功能
* 邀請碼驗證
* 多人同步聊天
* Enter 快速送出
* 雲端訊息儲存

## 未來規劃

* 多聊天室功能
* 顯示訊息時間
* 線上人數統計
* 登出功能
* 管理員功能
* 訊息刪除功能
* 圖片上傳功能
* Firebase Authentication 登入
* Google Login
* 邀請碼自動更新機制

## Author

Ava648
