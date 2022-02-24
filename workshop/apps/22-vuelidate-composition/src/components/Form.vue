<template>
  <section>
    <div v-if="editMode" class="title">Update form</div>
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
  </section>
</template>

<script type="text/javascript">
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
