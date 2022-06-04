<template>
  <div>
    <b-navbar toggleable="lg" variant="transparent">
      <b-container>
        <b-navbar-brand class="font-weight-medium" @click="sidebar = !sidebar"
          >Courses</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-form>
              <b-form-input
                size="lg"
                class="rounded-lg"
                placeholder="Search"
              ></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="float-right">
            <b-nav-item href="#">
              <b-icon-bell-fill />
            </b-nav-item>
            <b-nav-item href="#">
              <b-icon-cart-3 />
            </b-nav-item>
            <b-nav-item href="#">
              <b-avatar
                size="2rem"
                :src="require(`~/assets/image/avatar/avatar1.png`)"
              >
              </b-avatar>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
    <b-container>
      <div class="d-flex align-items-center justify-content-center">
        <div>
          <div>
            <a
              href="https://github.com/silvesterwali/education-courses-ui-design"
            >
              <b-icon-github scale="1" />
              https://github.com/silvesterwali/education-courses-ui-design
            </a>
          </div>
          <div>
            <a href=" https://figmatemplates.net/">
              <b-icon-globe scale="1" />
              inspire from https://figmatemplates.net/
            </a>
          </div>
        </div>
      </div>
    </b-container>
    <b-sidebar
      id="sidebar-border"
      v-model="sidebar"
      width="250px"
      bg-variant="white"
    >
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical pills>
            <b-nav-item class="mb-2">
              <b-icon-house-fill></b-icon-house-fill>
              Dashboard</b-nav-item
            >
            <b-nav-item to="/" active class="mb-2">
              <b-icon-book-fill></b-icon-book-fill>
              Courses</b-nav-item
            >
            <b-nav-item>
              <b-icon-book-fill></b-icon-book-fill>
              Classes</b-nav-item
            >
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BIconCart3,
  BIconBellFill,
  BIconHouseFill,
  BIconBookFill,
  BIconGithub,
  BIconGlobe,
} from 'bootstrap-vue'
export default {
  name: 'DefaultLayout',
  components: {
    BIconBellFill,
    BIconCart3,
    BIconHouseFill,
    BIconBookFill,
    BIconGithub,
    BIconGlobe,
  },
  data() {
    return {
      sidebar: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
