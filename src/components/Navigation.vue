<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" href="/home">{{title}}</a>
  
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/create">Create</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/search">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue{
    title: string = "Employee Mangment";
}
</script>