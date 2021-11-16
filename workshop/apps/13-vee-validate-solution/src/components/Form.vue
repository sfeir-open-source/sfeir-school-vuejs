<template>
  <section>
    <div v-if="editMode" class="title">Update form</div>

    <md-card class="card-panel">
      <ValidationObserver tag="form" v-slot="{ invalid }">
        <md-card-content>
          <img class="picture" :src="person.photo" />

          <ValidationProvider
            name="firstname"
            rules="required|min:2"
            v-slot="{ invalid, errors, touched }"
          >
            <md-field :class="{ 'md-invalid': invalid && touched }">
              <label>Firstname</label>
              <md-input v-model="person.firstname"></md-input>
              <span class="md-error" :hidden="!invalid">{{ errors[0] }}</span>
            </md-field>
          </ValidationProvider>
          <ValidationProvider
            rules="required|min:2"
            name="lastname"
            v-slot="{ invalid, errors, touched }"
          >
            <md-field :class="{ 'md-invalid': invalid && touched }">
              <label>Lastname</label>
              <md-input name="lastname" v-model="person.lastname"></md-input>
              <span class="md-error" :hidden="!invalid">{{ errors[0] }}</span>
            </md-field>
          </ValidationProvider>
          <ValidationProvider
            rules="required|email"
            name="email"
            v-slot="{ invalid, errors, touched }"
          >
            <md-field :class="{ 'md-invalid': invalid && touched }">
              <label>Email</label>
              <md-input name="email" v-model="person.email"></md-input>
              <span class="md-error" :hidden="!invalid">{{ errors[0] }}</span>
            </md-field>
          </ValidationProvider>
          <ValidationProvider
            rules="required|regex:^[0-9]{10}$"
            name="phone"
            v-slot="{ invalid, errors, touched }"
          >
            <md-field :class="{ 'md-invalid': invalid && touched }">
              <label>Phone</label>
              <md-input name="phone" v-model="person.phone"></md-input>
              <span class="md-error" :hidden="!invalid">{{ errors[0] }}</span>
            </md-field>
          </ValidationProvider>
        </md-card-content>
        <md-card-actions>
          <md-button @click="cancel()">Cancel</md-button>
          <md-button @click="save()" :disabled="invalid">Submit</md-button>
        </md-card-actions>
      </ValidationObserver>
    </md-card>
  </section>
</template>

<script type="text/javascript">
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, min, email, regex } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'The {_field_} is mandatory',
});
extend('min', {
  ...min,
  message: 'The {_field_} must be at least {length} characters',
});
extend('email', {
  ...email,
  message: 'The {_field_} must be an email',
});
extend('regex', {
  ...regex,
  message: 'The {_field_} must respect ten digits',
});

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    person: {
      type: Object,
      default() {
        return {
          photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
        };
      },
    },
  },
  computed: {
    editMode() {
      return !!this.person.id;
    },
  },
  methods: {
    save() {
      this.$emit('save', this.person);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.card-panel {
  padding: 10px;
  margin: 10px !important;
  min-width: 500px;
  width: 50%;
  align-self: center;
}

.card {
  margin: 0;
}

.picture {
  border-radius: 50%;
  width: 80px;
}
</style>
