<template>
  <Sidebar>
    <template #bottom>
      <div class="imgs">
        <a
          href="https://cloud.tencent.com/act/cps/redirect?redirect=2446&cps_key=0bf524a2bd69e68e98d9f0af95de4fbd&from=console"
          target="_blank"
        >
          <img src="/assets/img/tencentcloud.svg" alt="tencent cloud" />
        </a>
      </div>
    </template>
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "@theme-hope/module/sidebar/components/Sidebar";
</script>
<style scoped>
.imgs {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.imgs img {
  width: 200px;
  /* height: 80%; */
  margin-right: 20px;
}
</style>
