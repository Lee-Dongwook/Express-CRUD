# Express-CRUD

Node.js 프레임워크 Express로 구성해보는 CRUD 연습 레포지토리입니다.


### 폴더 구조

```
.
└── src/
    └── app/
        ├── config/
        │   └── config.js
        ├── controller/
        │   └── controller.js 
        ├── model/
        │   └── model.js 
        └── routes/
            └── routes.js


```

### 실행

1. [mongoDB](https://www.mongodb.com/ko-kr)에 접속하여 데이터베이스를 생성합니다.

2. 루트 디렉토리에 `.env` 파일을 생성한 후 다음과 같이 정의합니다.

```
PORT=포트번호
DB_ADDRESS=DB주소
```

3. pnpm을 사용하여 실행합니다.

```
npm i -g pnpm
pnpm i
pnpm dev
``` 
