<template>
  <md-card class="card-panel">
    <md-card-header v-if="editMode">
      <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
      <div class="md-subhead">{{person.id}}</div>
    </md-card-header>
    <ValidationObserver v-slot="{ invalid }">
      <md-card-content>
        <img class="picture" :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'"/>
        <form @submit="submit">
          <ValidationProvider name="firstname" rules="required|min:2" v-slot="{ errors, touched, invalid, dirty  }" >
            <md-input-container :class="{ 'md-input-invalid': invalid && (touched || dirty) }">
              <label>Firstname</label>
              <md-input type="text" v-model="person.firstname"></md-input>
              <div class="md-error" v-show="invalid && (dirty || touched)">{{ errors[0] }}</div>
            </md-input-container>
          </ValidationProvider>
          <ValidationProvider name="lastname" rules="required|min:2" v-slot="{ errors, touched, invalid, dirty}">
            <md-input-container :class="{ 'md-input-invalid': invalid && (touched || dirty) }">
              <label>Lastname</label>
              <md-input type="text" v-model="person.lastname"></md-input>
              <div class="md-error" v-show="invalid && (dirty || touched)" >{{errors[0]}}</div>
            </md-input-container>
          </ValidationProvider>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors, touched, invalid, dirty }" >
            <md-input-container :class="{ 'md-input-invalid': invalid && (touched || dirty) }">
              <label>Email</label>
              <md-input type="email" v-model="person.email"></md-input>
              <div class="md-error" v-show="invalid && (touched || dirty)">{{errors[0]}}</div>
            </md-input-container>
          </ValidationProvider>
          <ValidationProvider name="phone" :rules="{ required: true, regex: /\d{10}/ }" v-slot="{ errors, touched, invalid, dirty }">
            <md-input-container :class="{ 'md-input-invalid': invalid && (touched || dirty)}">
              <label>Phone</label>
              <md-input type="text" v-model="person.phone"></md-input>
              <div class="md-error" v-show="invalid && (touched || dirty)">{{ errors[0] }}</div>
            </md-input-container>
          </ValidationProvider>
        </form>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="cancel">Cancel</md-button>
        <md-button @click.prevent="submit" :disabled="invalid">Submit</md-button>
      </md-card-actions>
    </ValidationObserver>
  </md-card>
</template>
<script>
export default {
  props: {
    person: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    editMode: function() {
      return this.person && this.person.id;
    }
  },
  methods: {
    submit: function() {
      this.$emit("save", this.person);
    },
    cancel: function() {
      this.$emit("cancel");
    }
  }
};
</script>
<style scoped>
.card-panel {
  padding: 10px;
  margin: 10px !important;
  min-width: 500px;
}

.card {
  margin: 0;
}

.picture {
  border-radius: 50%;
  width: 80px;
}
</style>