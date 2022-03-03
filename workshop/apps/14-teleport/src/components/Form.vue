<template>
  <div>
    <div v-if="editMode" class="title">Update form</div>
    <el-row>
      <img class="picture" :src="modifiedPerson.photo" />
    </el-row>
    <form>
      <label>
        <span>Firstname</span><br>
        <el-input v-model="modifiedPerson.firstname" />
      </label>
      <label>
        <span>Lastname</span><br>
        <el-input v-model="modifiedPerson.lastname" />
      </label>
      <label>
        <span>Email</span><br>
        <el-input v-model="modifiedPerson.email" />
      </label>
      <label>
        <span>Phone</span><br>
        <el-input v-model="modifiedPerson.phone" />
      </label>
    </form>
    <el-row>
      <el-button @click="cancel">Cancel</el-button>
      <el-button type="primary" @click="save">Submit</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  created() {
    this.modifiedPerson = JSON.parse(JSON.stringify(this.person || {photo: 'https://randomuser.me/api/portraits/lego/6.jpg'}));
  },
  props: {
    person: {
      type: Object
    }
  },
  data() {
    return {
      modifiedPerson: {},
    };
  },
  computed: {
    editMode() {
      return this.person?.id;
    }
  },
  methods: {
    save() {
      this.$emit('save', this.modifiedPerson);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
});
</script>

<style scoped>
.el-row {
  margin: 1rem 0;
}

.el-input {
  margin-bottom: .75rem;
}

.picture {
  border-radius: 50%;
  width: 80px;
}
</style>
