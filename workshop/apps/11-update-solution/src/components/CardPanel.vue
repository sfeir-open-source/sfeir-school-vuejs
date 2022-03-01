<template>
  <el-card class="card-panel">
    <template #header>
        <div class="card-header">
          <div class="md-title">
            <el-link href="#" type="primary" class="card-title username">
              <span>{{ person.firstname }}</span>
              <span class="lastname">{{ person.lastname }}</span>
            </el-link>
            <div class="md-subhead">
              <div class="subtitle">{{ person.entity }}</div>
              <div class="people-data">
                <div>
                  <el-icon><Message /></el-icon>
                  <span class="item">{{ person.email }}</span>
                </div>
                <div>
                  <el-icon><PhoneFilled /></el-icon>
                  <span class="item">{{ person.phone }}</span>
                </div>
              </div>
            </div>
          </div>
          <el-avatar :size="100" :src="person.photo"></el-avatar>
        </div>
      </template>
      <el-row justify="space-between">
        <el-col :span="12">
          <div>
            <span class="label">Manager:</span>
            <span class="item">{{ person.manager }}</span>
          </div>
          <div>
            <span class="label">Location:</span>
            <span class="item">SFEIR</span>
          </div>
        </el-col>
        <el-col :span="4" class="actions">
          <router-link
            :to="{ name: 'people-details', params: { id: person.id } }"
          >
            <el-icon><EditPen /></el-icon>
          </router-link>
          <a href="#" @click="deletePerson(person.id)">
            <el-icon><Delete /></el-icon>
          </a>
        </el-col>
      </el-row>
  </el-card>  
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Message, Delete, PhoneFilled, EditPen} from '@element-plus/icons-vue';

export default defineComponent({
  components: {Delete, EditPen, Message, PhoneFilled},
  props: ['person']
});
</script>

<style scoped>
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
</style>