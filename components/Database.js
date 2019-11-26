import * as firebase from 'firebase';
import '@firebase/firestore';

const config = {
  apiKey: "AIzaSyD4jwBnyjHtrtD6p2EBAt_bI7bbMsGV3Kw",
  authDomain: "moapp-3866a.firebaseapp.com",
  databaseURL: "https://moapp-3866a.firebaseio.com",
  projectId: "moapp-3866a",
  storageBucket: "moapp-3866a.appspot.com",
  messagingSenderId: "107363012273",
  appId: "1:107363012273:web:55dd3199a4189d805adc90",
  measurementId: "G-XRJGQPMEGH"
}

class Database{

  constructor() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
          console.log("firebase apps initializeApp");
    } else {
        console.log("firebase apps already running...");
    }
  }

  getAccount=async()=>{
    firebase.firestore().collection('Account').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }).catch(err => {
        console.log('Error getting documents', err);
      });
  }



  async SigninAccount(email,password,login_success,login__fail)
  {
    try {
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
        console.log(user)
      })
    } catch (error) {
      console.log(error.toString())
    }
  }
  async createAccount3(Account,add_Account_success,add_Account_fail)
  {
    firebase.auth().createUserWithEmailAndPassword(Account.email,Account.password);
    firebase.firestore().collection("Account").doc(Account.email).set(Account).then(ref=>{add_Account_success(ref.id)},add_Account_fail);
  }

  async createAccount2(Account,add_Account_success,add_Account_fail)
  {
    firebase.firestore().collection("Account").doc(Account.email).set(Account).then(ref=>{add_Account_success(ref.id)},add_Account_fail);
  }

  async createAut(account,createAut_success,createAut_fail)
  {
    firebase.auth().createUserWithEmailAndPassword(account.email,account.password).then(()=>{
      createAut_success()
    }).catch(function(error){
      createAut_fail(error)
    });

  }

  login = async(account, success_callback, failed_callback) => {
    await firebase.auth().signInWithEmailAndPassword(account.email,account.password).then(
      function(){
        success_callback();
      }
    ).catch(function(error){
      failed_callback(error.message);
    })
  }

  async signout(Account,add_Account_success,add_Account_fail)
  {
    firebase.auth.signOut();
  }

  async fgp(Account,add_Account_success,add_Account_fail)
  {
    firebase.auth().sendPasswordResetEmail(Account.email);
  }
}

////////////////

const database = new Database();
export default database;
