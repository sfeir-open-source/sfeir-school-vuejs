<template>
  <section class="container">
    <card-panel :person="person" @click="randomPeople"></card-panel>
    <el-button 
      class="fab-bottom"
      type="primary" 
      size="large" 
      circle 
      @click ="randomPeople"
    >
      <el-icon><Refresh /></el-icon>
    </el-button>
  </section>
</template>

<script lang="ts">

import Peoples from '../_static/people';
import CardPanel from '../components/CardPanel.vue';
import {Refresh} from '@element-plus/icons-vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {Refresh, CardPanel},
  data() {
    return {
      person: {},
    };
  },
  created() {
    const [firstPeople] = Peoples;
    this.person = firstPeople;
  },
  methods: {
    randomPeople(id) {
      const peopleToRandom = id ? Peoples.filter((person) => person.id !== id) : Peoples;
      this.person = peopleToRandom[Math.floor(Math.random() * peopleToRandom.length)];
    }
  }
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-panel {
  padding: 10px;
  margin: 10px !important;
  min-width: 500px;
}

.card-panel:hover {
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.username {
  color: #337ab7;
  font-size: 24px;
  font-weight: 400;
}

.lastname {
  text-transform: uppercase;
}

.subtitle {
  color: rgba(0, 0, 0, 0.54);
}

.people-data {
  margin-top: 20px;
}

.item {
  color: #337ab7;
  padding-left: 1rem;
}

.people-data a {
  padding-left: 10px;
}

.label {
  font-weight: bold;
}

.skills {
  padding: 10px;
  margin: 10px;
  background-color: #fafafa;
}

.skills h3 {
  font-size: 24px;
  font-weight: normal;
  line-height: 1.1;
}

.skills a {
  background-color: white;
  color: #000;
  margin: 5px;
}

.links {
  text-align: center;
}

.links img {
  padding: 0 5px;
}

.actions a {
  margin-right: 0.5rem;
}

.fab-bottom {
  position: absolute;
  bottom: 2.5rem;
  right: 2rem;
}
</style>
