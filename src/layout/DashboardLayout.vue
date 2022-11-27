<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/supporting-documents">
        <i class="nc-icon nc-notes"></i>
        <p>My Documents</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/my-savings">
        <i class="nc-icon nc-bank"></i>
        <p>My savings</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/reimbursement">
        <i class="nc-icon nc-money-coins"></i>
        <p>Reimbursement</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/mortgage">
        <i class="nc-icon nc-key-25"></i>
        <p>Mortgage compliance</p>
      </sidebar-link>

      <!-- <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/projects">
        <i class="nc-icon nc-zoom-split"></i>
        <p>View projects</p>
      </sidebar-link>

      <!-- <template slot="bottom-links">
        <sidebar-link class="active" to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
      <sidebar-link to="/admin/dream">
        <i class="nc-icon nc-istanbul"></i>
        <p>My dream house</p>
      </sidebar-link>
      <sidebar-link to="/admin/preferred-house">
        <i class="nc-icon nc-favourite-28"></i>
        <p>My house plan</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}

</script>
