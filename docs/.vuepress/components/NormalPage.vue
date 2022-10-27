<template>
  <NormalPage>
    <template #contentBefore>
      <div class="imgs">
        <a
          href="https://cloud.tencent.com/act/cps/redirect?redirect=2446&cps_key=0bf524a2bd69e68e98d9f0af95de4fbd&from=console"
          target="_blank"
        >
          <img src="/assets/img/HtiJsU2W.jpg" alt="tencent cloud" />
        </a>
      </div>
    </template>
  </NormalPage>
</template>
<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage";
</script>
<style scoped>
.imgs {
  max-width: var(--content-width);
  margin: 0 auto;
}
img {
  width: 100%;
}
</style>
