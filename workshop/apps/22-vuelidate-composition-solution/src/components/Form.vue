<template>
  <section>
    <div v-if="editMode" class="title">Update form</div>
    <md-card class="card-panel">
      <md-card-content>
        <img class="picture" :src="state.photo" />
        <form>
          <md-field :class="{ 'md-invalid': v$.firstname.$errors.length }">
            <label>Firstname</label>
            <md-input
              name="firstname"
              v-model="state.firstname"
              @input="v$.firstname.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.firstname.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
          <md-field :class="{ 'md-invalid': v$.lastname.$errors.length }">
            <label>Lastname</label>
            <md-input
              name="lastname"
              v-model="state.lastname"
              @input="v$.lastname.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.lastname.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
          <md-field :class="{ 'md-invalid': v$.email.$errors.length }">
            <label>Email</label>
            <md-input
              name="email"
              v-model="state.email"
              @input="v$.email.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.email.$errors"
              :key="$uid"
              >{{ $message }}</span
            >
          </md-field>
          <md-field :class="{ 'md-invalid': v$.phone.$errors.length }">
            <label>Phone</label>
            <md-input
              name="phone"
              v-model="state.phone"
              @input="v$.phone.$touch"
            ></md-input>
            <span
              class="md-error"
              v-for="{ $message, $uid } in v$.phone.$errors"
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
import { computed, reactive, toRaw, watch } from '@vue/composition-api';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
export default {
  props: {
    person: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const rules = {
      firstname: { required, minlength: minLength(2) },
      lastname: { required, minlength: minLength(2) },
      email: { required, email },
      phone: { required },
    };
    const state = reactive({
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
    });
    const v$ = useVuelidate(rules, state);
    const editMode = computed(() => !!state.id);

    watch(
      () => props.person,
      person => {
        state.id = person.id;
        state.photo = person.photo;
        state.firstname = person.firstname;
        state.lastname = person.lastname;
        state.email = person.email;
        state.phone = person.phone;
      }
    );

    function save() {
      emit('save', toRaw(state));
    }

    function cancel() {
      emit('cancel');
    }

    return {
      v$,
      state,
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
