<template>
  <div id="app">
    <h1>*insert good looking frontend here*</h1>
    
    <router-link tag="button" to="/create" >Create</router-link>
    <br/>
    <router-link tag="button" to="/retrieve" >Retrieve, Update, Delete</router-link>
    <br/><br/>
    <hr/>
    <router-view></router-view>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
