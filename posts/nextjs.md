---
title: 有關於Next Js
date: 2022-11-03
image: /images/image4.png
---

介紹
在設定一個 React 專案時候，通常會使用 create-React-app 這個套件來快速產出開發樣板環境,而另外一個選擇 Next.js 則包好了許多功能,例如Server Side Render (SSR),Webpack,Router....不需要額外再多花時間在設定方面,但同時又有彈性可以擴充,非常的快速可以馬上開發專案,在使用next時候因為是基於React,如果沒有React基礎要記得補一下,在這30天中會以Next.js的各種組合來介紹

功能
Next.js功能一直快速增加中,目前以下列出來的是 Next4 版的功能

- 1.Automatic Code Splitting
CODE SPLITTING可以在切換 Router的時候把需要的程式碼做分割 達到最輕量化 而加快速度，因為 Next.js 的Router的目錄是在pages底下使用 File-System 架構目錄來替代 Router 這部分的 Code Splitting 已經內建了

- 2.Built-In Css Support
Next.js之中有內建一套 style jsx 的Css In Js 的功能

- 3.Static File Serving
靜態檔案的約定目錄，可以把一些靜態檔案都放在這裡例如圖檔，聲音檔案等等都可以在根目錄下的static(約定目錄),也可以透過Express去指定

- 4.Populating
Next.js提供了 Server Side Render 功能當網站使用了SSR 的部分的時候為了SPA與SSR同步 所以提供了一個生命週期 getInitialProps 方便前後端一致