<template>
  <div class="log-parent">
    <div class="mt-5 shadow-lg log-container">
    <h4 slot="header" class="card-title text-center pt-5 pb-2">Login</h4>
    <div class="d-flex align-items-center justify-content-center before-form">
      <form action="#/dashboard" class="p-2">
        <div class="row">
          <div class="col pl-4 pr-4">
            <base-input type="text" label="Email Adress" placeholder="" v-model="user.email">
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col pl-4 pr-4">
            <base-input type="text" label="Password" placeholder="" v-model="user.password">
            </base-input>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col d-flex align-items-center justify-content-left">
            <base-checkbox v-model="user.checkbox" class="d-flex">
            </base-checkbox>
            <span class="">Keep me logged in</span>
          </div>
        </div>
        <div class="row">
          <div class="col p-2 mt-3">
            <div class="text-center">
              <button type="submit" class="btn btn-info btn-fill text-center p-1">
                Login
              </button>
              <div class="p-2">
                <a href="#">Forgot password?</a>
              </div>

              <div class="pb-4">
                <span class="fw-bold">No account?</span><a href="#" class="text-uppercase p-1">register</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
<style>
*{
  box-sizing: border-box;
  margin: 0;
}
.log-parent{
  background-image: url("") no-repeat;
  position: relative;
  padding-top: 30em;
}
form{
  width: 25rem;
}
.log-container{
 
  width: 23em;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button{
  width: 12em;
  height: 2.3em;
  

}
.btn-info{
  border-radius: 20px;
 
}
</style>
<script>
import Card from 'src/components/Cards/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      user: {
        email: '',
        password: '********',
        checkbox: '', checked: true
      }
    }
  }
}

</script>