<template>
  <div class="container">
    <div class="row mt-5">
      <p class="col-md-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <router-link to="/users">
      <button class="btn btn-dark me-3">Users</button>
    </router-link>
    <router-link to="/posts">
      <button class="btn btn-light">Posts</button>
    </router-link>
  </div>
</template>
