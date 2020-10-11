<template>
  <div class="container">
      <br/>
    <form @submit.prevent="editPerson">
          <div class="md-title">Edit an existion person</div>
          <div class="md-gutter">
              <label>
                Name
                <input type="text" v-model="name" name="name" :placeholder="this.name"/>
              </label>
              <div v-show="submitted && !name" class="invalid-feedback">Some sort of name is required</div>
              <br/>
              <label>
                Surname
                <input type="text" v-model="surname" name="surname" :placeholder="this.surname"/>
              </label>
              <div v-show="submitted && !surname" class="invalid-feedback">Some sort of surname is required</div>
              <br/>
              <label>
                Phone number
                <input type="text" v-model="phone_number" name="phone_number" :placeholder="this.phone_number"/>
              </label>
              <div v-show="submitted && !phone_number" class="invalid-feedback">Some sort of phone number is required</div>
              <br/>
              <label>
                Email
                <input type="text" v-model="email" name="email" :placeholder="this.email"/>
              </label>
              <div v-show="submitted && !email" class="invalid-feedback">Some sort of email is required</div>
              <br/>
              <label>
                Description
                <input type="text" v-model="description" name="description" :placeholder="this.description"/>
              </label>
              <div v-show="submitted && !description" class="invalid-feedback">Some sort of description is required</div>
            <br/>
            <button class="button" type="submit">Save</button>
          </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {router} from '../router'
export default {
  props: ['id'],
  data () {
    return {
      endpointPeople: 'http://127.0.0.1:8000/people/',
      name: '',
      surname: '',
      phone_number: '',
      email: '',
      description: '',
      submitted: false,
    }
  },
  methods: {
    getPerson (id) {
      axios.get(this.endpointPeople + this.id + '/')
        .then((response) => {
            this.name = response.data.name
            this.surname = response.data.surname
            this.phone_number = response.data.phone_number
            this.email = response.data.email
            this.description = response.data.description
        })
    },
    editPerson () {
      this.submitted = true
      axios.patch(this.endpointPeople + this.id +'/', { name: this.name, surname: this.surname, phone_number: this.phone_number, email: this.email, description: this.description })
        .then((response) => {
          router.push('/')
        })
    }
  },
  created() {
      this.getPerson(this.id)
  },
}
</script>

<style scoped>
  .multiselect {
    border: 1px solid black;
    width: 150px;
  }
  .selected-options {
    border: 1px solid black;
    width: 150px;
    min-height: 25px;
  }
</style>
