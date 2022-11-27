<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <login></login>
        </div>
      </div>
    </div>
  </div>
</template>
<script> 
// import LoginNav from './UserProfile/LoginNav.vue'
import Login from './UserProfile/Login.vue'
export default{
  components:{
    Login
  }
}
</script>