<template>
    <div class="container">
        <div class="row">
            <div class="mt-5 col-12">
                <div>
                    <h2 class="float-left">
                        Sign Up Wallet
                    </h2>
                </div>
            </div>
        </div>
        <div class="row mt-5 ">
            <div class="container col-8">
                <form >
                    <div class="form-group">
                    <label class="float-left" for="eml">Email:</label>
                    <input type="text" class="form-control" id="eml" placeholder="sampleaccount@wallet.dapp" v-model="email">
                    </div>
                    <div class="form-group">
                    <label class="float-left" for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="P@$$w0rd" v-model="password">
                    </div>
                </form>
                <button @click="register" class="btn btn-primary mt-3">Sign Up</button>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <div>
                    <!--  -->
                </div>
            </div>
            <div class="col">
                <div>
                    <!--  -->
                </div>
            </div>
            <div class="col">
                <div>
                    <!--  -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    register: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
         
        firebase.firestore()
            .then(function () {
              console.log('Document successfully written!')
            })
            .catch(function (error) {
              console.error('Error writing document: ', error)
            })
          this.$router.replace('main')
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
/*  */
</style>
