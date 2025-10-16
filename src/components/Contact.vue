<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Fall2025Contact from './contact/Fall2025Contact.vue'
import Spring2025Contact from './contact/Spring2025Contact.vue'

const sampleTitle = 'Contact Us';
const route = useRoute()

const currentSemester = computed(() => {
  const path = route.path
  if (path.includes('spring2025')) {
    return 'spring2025'
  }
  return 'fall2025' // Default
})
</script>

<template>
  <div class="section">
    <div class="section-content">
      <div class="title font-bold text-3xl sm:text-4xl">{{ sampleTitle }}</div>
      
      <!-- Dynamic semester contact -->
      <Fall2025Contact v-if="currentSemester === 'fall2025'" />
      <Spring2025Contact v-else-if="currentSemester === 'spring2025'" />
    </div>
  </div>
</template>

<style scoped>
.font-bold {
  font-weight: 700;
}

.sub-section-content .sub-content ul ul li {
  text-align: left;
}

.sub-section-content .sub-content ul ul li::marker {
  content: "\2022";
  font-weight: 700;
  font-size: 20px;
  color: var(--dark-color);
  position: absolute;
  left: 0;
  top: 0;
}

.sec-list {
  line-height: 1.8rem;
}

.sec-list > li {
  padding-left: 15px;
}
</style>