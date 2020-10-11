<template>
    <div>
      <div
      v-for="person in people"
      :key="person.id"
      :to="{ name: 'person', params: { id: person.id } }">
      <router-link :to="{ name: 'person', params: {id: person.id}}">{{person.name}} {{person.surname}}</router-link>
      <br/>
      <button v-on:click="deletePerson(person.id)">delete</button>
      <router-link tag="button" :to="{ name: 'edit', params: {id: person.id}}">edit</router-link>
      <br/><br/>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import {router} from '../router'

export default {
  data () {
    return {
      people: null,
      endpointPeople: 'http://127.0.0.1:8000/people/'
    }
  },

  created () {
    this.getAllPeople()
  },

  methods: {
    getAllPeople () {
      axios.get(this.endpointPeople)
        .then(response => {
          this.people = response.data
        })
    },
    deletePerson (id) {
        axios.delete(this.endpointPeople + id + '/')
        router.push('/')
    },
    editPerson (id) {
        router.push('/edit', {id})
    }
  }
}

</script>