import firebase from 'firebase'

// 下記URL参考
// https://qiita.com/potato4d/items/cfddeb8732fec63cb29c

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DATABASEURL,
      projectId: process.env.PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.MESSAGINGSENDERID
    }
  )
}

export default firebase
