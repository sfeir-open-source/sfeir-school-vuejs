<template>
  <div>
    <el-row>
      <img class="picture" :src="person.photo" />
    </el-row>
    <form>
      <label>
        <span>Firstname</span><br>
        <el-input v-model="person.firstname" />
      </label>
      <label>
        <span>Lastname</span><br>
        <el-input v-model="person.lastname" />
      </label>
      <label>
        <span>Email</span><br>
        <el-input v-model="person.email" />
      </label>
      <label>
        <span>Phone</span><br>
        <el-input v-model="person.phone" />
      </label>
    </form>
    <el-row>
      <el-button @click="cancel()">Cancel</el-button>
      <el-button type="primary" @click="save()">Submit</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
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