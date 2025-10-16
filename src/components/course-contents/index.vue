<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from "vue"
import { useRoute, useRouter, type RouteLocationNormalizedLoaded } from "vue-router"
import Spring2025CourseDetails from "./spring2025/CourseDetails.vue"
import Spring2025ClassDetails from "./spring2025/ClassDetails.vue"
import Fall2025CourseDetails from "./fall2025/CourseDetails.vue"
import Fall2025ClassDetails from "./fall2025/ClassDetails.vue"

interface Tab {
  id: string;
  name: string;
}

const route: RouteLocationNormalizedLoaded = useRoute();
const router = useRouter();

const tabs: Tab[] = [
  { id: "fall2025", name: "Fall 2025" },
  { id: "spring2025", name: "Spring 2025" }
];

// Compute active tab from route
const activeTab = computed(() => {
  const path = route.path;
  if (path.includes("/spring2025")) {
    return "spring2025";
  }
  return "fall2025"; // Default
});

function handleTabChange(tabId: string): void {
  router.push(`/${tabId}`);
}
</script>

<template>
  <div class="section">
    <div class="section-content p-8 sm:p-12 md:p-16 xl:p-20">
      <h2 class="title font-bold text-3xl sm:text-4xl mb-8">Course Details</h2>
      
      <!-- Fall 2025 Content (Default) -->
      <div v-if="activeTab === 'fall2025'">
        <Fall2025CourseDetails />
        <Fall2025ClassDetails />
      </div>

      <!-- Spring 2025 Content -->
      <div v-else-if="activeTab === 'spring2025'">
        <Spring2025CourseDetails />
        <Spring2025ClassDetails />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
