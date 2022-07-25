
<template>
  <div class="header-area">
    <header class="header">
      <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
        open
      </el-button>
    </header>
    <el-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
        <div>
          <el-button @click="innerDrawer = true">Click me!</el-button>
          <el-drawer
            v-model="innerDrawer"
            title="I'm inner Drawer"
            :append-to-body="true"
            :before-close="handleClose"
          >
            <p>_(:зゝ∠)_</p>
          </el-drawer>
        </div>
      </el-drawer>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Header',
  components: {},
  setup() {
    const drawer = ref(false)
    const innerDrawer = ref(false)

    const handleClose = (done: () => void) => {
      ElMessageBox.confirm('You still have unsaved data, proceed?')
        .then(() => {
          done()
        })
        .catch(() => {
          // catch error
        })
    }

    return {
      drawer,
      innerDrawer,
      handleClose
    }
  }
})
</script>


<style scoped>
</style>
