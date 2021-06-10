<template>
  <section>
    <div v-if="editMode" class="title">Update form</div>
    <md-card class="card-panel">
      <md-card-content>
        <img class="picture" :src="$v.person.photo.$model" />
        <form>
          <md-field :class="{ 'md-invalid': $v.person.firstname.$error }">
            <label>Firstname</label>
            <md-input
              name="firstname"
              v-model="$v.person.firstname.$model"
            ></md-input>
            <div
              class="md-error"
              v-if="$v.person.firstname.$error && $v.person.firstname.$dirty"
            >
              <span v-show="!$v.person.firstname.required"
                >Champs obligatoire</span
              >
              <span
                v-show="
                  $v.person.firstname.required && !$v.person.firstname.maxLength
                "
                >Vous devez saisir au moins 2 caractères</span
              >
            </div>
          </md-field>
          <md-field :class="{ 'md-invalid': $v.person.lastname.$error }">
            <label>Lastname</label>
            <md-input
              name="lastname"
              v-model="$v.person.lastname.$model"
            ></md-input>
            <div
              class="md-error"
              v-if="$v.person.lastname.$error && $v.person.lastname.$dirty"
            >
              <span v-show="!$v.person.lastname.required"
                >Champs obligatoire</span
              >
              <span
                v-show="
                  $v.person.lastname.required && !$v.person.lastname.maxLength
                "
                >Vous devez saisir au moins 2 caractères</span
              >
            </div>
          </md-field>
          <md-field :class="{ 'md-invalid': $v.person.email.$error }">
            <label>Email</label>
            <md-input name="email" v-model="$v.person.email.$model"></md-input>
            <div
              class="md-error"
              v-if="$v.person.email.$error && $v.person.email.$dirty"
            >
              <span v-show="!$v.person.email.required">Champs obligatoire</span>
              <span v-show="$v.person.email.required && !$v.person.email.email">
                Le chanps doit correspondre à une addresse email valide
              </span>
            </div>
          </md-field>
          <md-field>
            <label>Phone</label>
            <md-input name="phone" v-model="$v.person.phone.$model"></md-input>
          </md-field>
        </form>
      </md-card-content>
      <md-card-actions>
        <md-button @click="cancel()">Cancel</md-button>
        <md-button @click="save()" :disabled="$v.person.$invalid"
          >Submit</md-button
        >
      </md-card-actions>
    </md-card>
  </section>
</template>

<script type="text/javascript">
import { required, email, minLength } from 'vuelidate/lib/validators';
export default {
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
  validations: {
    person: {
      photo: {},
      firstname: { required, minLength: minLength(2) },
      lastname: { required, minLength: minLength(2) },
      email: { required, email },
      phone: {},
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
  width: 50%;
  min-width: 500px;
  align-self: center;
  justify-self: center;
}

.card {
  margin: 0;
}

.picture {
  border-radius: 50%;
  width: 80px;
}
</style>
