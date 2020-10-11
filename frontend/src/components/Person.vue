<template>
    <div v-if="person">
      <div>
          <p>Name: {{person.name}}  </p>
          <p>Surname: {{person.surname}}  </p>
          <p>Phone number: {{person.phone_number}}  </p>
          <p>Email address:{{person.email}}  </p>
          <p>Description: {{person.description}}  </p>
          </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      person: null,
      endpoint: "http://127.0.0.1:8000/people/"
    };
  },

  methods: {
    getPerson() {
      axios.get(this.endpoint + this.id + '/')
        .then(response => {
          this.person = response.data;
        })
    }
  },

  created() {
    this.getPerson();
  }
}
</script>

