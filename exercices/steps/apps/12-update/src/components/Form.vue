<template>
  <md-card class="card-panel">
    <md-card-content>
      <img class="picture" :src="person.photo" />
      <form>
        <md-field>
          <label>Firstname</label>
          <md-input name="firstname" v-model="person.firstname"></md-input>
        </md-field>
        <md-field>
          <label>Lastname</label>
          <md-input name="lastname" v-model="person.lastname"></md-input>
        </md-field>
        <md-field>
          <label>Email</label>
          <md-input name="email" v-model="person.email"></md-input>
        </md-field>
        <md-field>
          <label>Phone</label>
          <md-input name="phone" v-model="person.phone"></md-input>
        </md-field>
      </form>
    </md-card-content>
    <md-card-actions>
      <md-button @click="cancel()">Cancel</md-button>
      <md-button @click="save()">Submit</md-button>
    </md-card-actions>
  </md-card>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      person: {
        photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
      },
    };
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
