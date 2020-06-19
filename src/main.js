// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase/app'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBWI09YOy3V1VOnm6dJnsfnzaKkJyEUNGo",
  authDomain: "dekd-8d4ec.firebaseapp.com",
  databaseURL: "https://dekd-8d4ec.firebaseio.com",
  projectId: "dekd-8d4ec",
  storageBucket: "dekd-8d4ec.appspot.com",
  messagingSenderId: "801743614791",
  appId: "1:801743614791:web:e97f6b4479a07053f99262",
  measurementId: "G-B412TGX82Y"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

let app

firebase.auth().onAuthStateChanged(user => {
   console.log('user', user)
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
