import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create.vue'
import Edit from '@/components/Edit.vue'
import Person from '@/components/Person.vue'
import Retrieve from '@/components/Retrieve.vue'

Vue.use(Router)


export const router = new Router({
    routes: [
      {
        path: '/create',
        name: 'create',
        component: Create,
      },
      {
        path: '/retrieve',
        name: 'retrieve',
        component: Retrieve,
      },
      {
        path: '/edit',
        name: 'edit',
        component: Edit,
        props: true,
      },
      {
        path: '/details',
        name: 'person',
        component: Person,
        props: true,
      }
    ]
  })
  