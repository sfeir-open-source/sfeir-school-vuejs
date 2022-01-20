<template>
  <section>
    <div v-if="editMode" class="title">Update form</div>
    <md-card class="card-panel">
      <md-card-content>
        <img class="picture" :src="person.photo" />
        <form>
          <md-field
            :class="{ 'md-invalid': v$.person.firstname.$errors.length }"
          >
            <label>Firstname</label>
            <md-input
              name="firstname"
              v-model="person.firstname"
              @input="v$.person.firstname.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.person.firstname.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
          <md-field
            :class="{ 'md-invalid': v$.person.lastname.$errors.length }"
          >
            <label>Lastname</label>
            <md-input
              name="lastname"
              v-model="person.lastname"
              @input="v$.person.lastname.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.person.lastname.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
          <md-field :class="{ 'md-invalid': v$.person.email.$errors.length }">
            <label>Email</label>
            <md-input
              name="email"
              v-model="person.email"
              @input="v$.person.email.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.person.email.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
          <md-field :class="{ 'md-invalid': v$.person.phone.$errors.length }">
            <label>Phone</label>
            <md-input
              name="phone"
              v-model="person.phone"
              @input="v$.person.phone.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.person.phone.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
        </form>
      </md-card-content>
      <md-card-actions>
        <md-button @click="cancel">Cancel</md-button>
        <md-button @click="save" :disabled="v$.$invalid">Submit</md-button>
      </md-card-actions>
    </md-card>
  </section>
</template>

<script type="text/javascript">
import { computed } from '@vue/composition-api';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
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
      firstname: {
        required,
        minLength: minLength(2),
      },
      lastname: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
    },
  },
  setup(props, { emit }) {
    const editMode = computed(() => !!props.person.id);
    const v$ = useVuelidate();

    function save() {
      emit('save', props.person);
    }

    function cancel() {
      emit('cancel');
    }

    return {
      v$,
      editMode,
      save,
      cancel,
    };
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
