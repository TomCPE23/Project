<template>
    <div class="container">
        <Navbar/>
        <div class="row">
            <div class="pt-5 col">
                <div class="mt-5 float-left">
                   <h3>Wallet information</h3>
                </div>
                <!--  -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="">
                    <strong>Name:&nbsp;</strong>
                    <span>{{name}}</span>
                </div>
                <div class="">
                    <strong>Address:&nbsp;</strong>
                    <span>{{pubkey}}</span>
                </div>
                <div class="">
                    <strong>Balance:&nbsp;</strong>
                    <span>{{balance}}</span>
                    <span>&nbsp;ETH</span>
                </div>
                 <div class="">
                    <strong>Network:&nbsp;</strong>
                    <span class="badge badge-primary" >{{network}}</span>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <!-- Logout Button -->
            <button type="button" class="btn btn-danger" @click="logout">Logout
            </button>
            <ModalDeposit/>
            <ModalSend/>
        </div>
    </div>
</template>
<script >
import firebase from 'firebase'
import Navbar from '@/components/template/Navbar'

export default {
  components: {
    Navbar,
  },
  data () {
    return {
      balance: null,
      network: null,
      name: null,
      pubkey: null
    }
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            this.$router.replace('login')
          },
          err => {
            alert(err.message)
          }
        )
    }
  }
}

</script>

<style>

</style>
