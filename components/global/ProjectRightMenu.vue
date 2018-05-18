<template>
  <div class="navigation-block">
    <div class="right-menu">
      <div class="menu-link-block">
        <nuxt-link :to="{ name: 'project.overview', params: { project_name: projectName }}" class="orange-underline-link">Overview</nuxt-link>
      </div>
      <div class="menu-link-block">
        <nuxt-link :to="{ name: 'project.team', params: { project_name: projectName }}" class="orange-underline-link">Team</nuxt-link>
      </div>
      <div class="menu-link-block">
        <nuxt-link :to="{ name: 'project.rating', params: { project_name: projectName }}" class="orange-underline-link">Rating</nuxt-link>
      </div>
      <div class="menu-link-block">
        <nuxt-link :to="{ name: 'project.road_map', params: { project_name: projectName }}" class="orange-underline-link">Roadmap</nuxt-link>
      </div>
      <div class="menu-link-block">
        <a href="https://www.marginless.io/docs/MRS_Whitepaper.pdf" class="orange-underline-link icon-external-link" target="_blank">
          White Paper
          <img src="/external-link.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "project-right-menu",
    props: ['projectName']
  }
</script>

<style scoped>

</style>