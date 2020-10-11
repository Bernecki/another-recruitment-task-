<template>
  <div class="container">
      <br/>
    <form @submit.prevent="post">
          <div class="md-title">Add a new person</div>
          <div class="md-gutter">
              <label>
                Name
                <input type="text" v-model="name" name="name"/>
              </label>
              <div v-show="submitted && !name" class="invalid-feedback">Some sort of name is required</div>
              <br/>
              <label>
                Surname
                <input type="text" v-model="surname" name="surname"/>
              </label>
              <div v-show="submitted && !surname" class="invalid-feedback">Some sort of surname is required</div>
              <br/>
              <label>
                Phone number
                <input type="text" v-model="phone_number" name="phone_number"/>
              </label>
              <div v-show="submitted && !phone_number" class="invalid-feedback">Some sort of phone number is required</div>
              <br/>
              <label>
                Email
                <input type="text" v-model="email" name="email"/>
              </label>
              <div v-show="submitted && !email" class="invalid-feedback">Some sort of email is required</div>
              <br/>
              <label>
                Description
                <input type="text" v-model="description" name="description"/>
              </label>
              <div v-show="submitted && !description" class="invalid-feedback">Some sort of description is required</div>
            <br/>
            <button class="button" type="submit">Create</button>
          </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {router} from '../router'
export default {
  name: 'Create',
  data () {
    return {
      endpointCreate: 'http://127.0.0.1:8000/people/',
      name: '',
      surname: '',
      phone_number: '',
      email: '',
      description: '',
      submitted: false,
    }
  },
  methods: {
    post () {
      this.submitted = true
      axios.post(this.endpointCreate, { name: this.name, surname: this.surname, phone_number: this.phone_number, email: this.email, description: this.description })
        .then((response) => {
          router.push('/')
        })
    }
  }
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
