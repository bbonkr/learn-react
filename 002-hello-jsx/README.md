```
$ npm init
```

babel 패키지 설치

```
$ npm install babel-cli@6.9.0 babel-preset-react@6.5.0 --save-dev
```

es2015 로 컴파일하려면 아래 프리셋 패키지도 설치합니다.

```
$ npm install babel-preset-es2015 --save-dev
```


package.json 파일에 babel 속성을 추가하고, preset 을 구성합니다.

```
{

  "babel": {
    "presets": [
      "react",
      "es2015" // es2015로 컴파일
    ]
  }
}
```
