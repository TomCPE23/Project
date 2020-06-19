<template>
    <div class="container">
        <div class="row">
            <div class="mt-5 col-12">
                <div>
                    <h2 class="mx-auto">
                        Sign In Wallet
                    </h2>
                </div>
            </div>
        </div>
        <div class="row mt-5 ">
            <div class="container col-5">
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
                <button v-on:click="login" v-on:keyup.enter="login" class="btn btn-primary mt-3">Sign&nbsp;In</button>
                <div class="mt-3">
                <a href="#/hello" target="_blank" rel="noopener" class="mr-2">Hello</a>
                <a href="#/register" target="_blank" rel="noopener" class="">Register</a>
                </div>
                
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
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace('shop')
          },
          err => {
            alert(err.message)
          }
        )
    }
  }
}
</script>
<style scoped>

.bg {
  background-color: #ffffff;
  border-radius: 10px ;
}

</style>
