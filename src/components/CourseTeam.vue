<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PersonCard from "../components/PersonCard.vue";
import Fall2025Team from './team/Fall2025Team.vue'
import Spring2025Team from './team/Spring2025Team.vue'

const sampleTitle = 'Instructor Team';
const route = useRoute()

const currentSemester = computed(() => {
  const path = route.path
  if (path.includes('spring2025')) {
    return 'spring2025'
  }
  return 'fall2025' // Default
})

const courseInstructor = {
  title: 'Course Instructor',
  firstName: 'Sajjad',
  lastName: 'Amini',
  avatar: 'Amini.jpg',
  personalWebsite: 'https://sharif.edu/~s_amini/'
};
</script>
<template>
  <div class="section">
    <div class="section-content">
      <div class="title">{{ sampleTitle }}</div>
      <div class="sub-section">
        <div class="sub-section-content">
          <div class="sub-title">{{ courseInstructor.title }}</div>
          <div class="grid-team">
            <div class="grid-card">
              <PersonCard
                  :firstName="courseInstructor.firstName"
                  :lastName="courseInstructor.lastName"
                  :avatar="courseInstructor.avatar"
                  :personalWebsite="courseInstructor.personalWebsite"
              />
            </div>
          </div>
        </div>
        
        <!-- Dynamic semester team -->
        <Fall2025Team v-if="currentSemester === 'fall2025'" />
        <Spring2025Team v-else-if="currentSemester === 'spring2025'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-card {
  display: flex;
  flex-direction: column;
}

.grid-team {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
}

.scrollable {
  max-width: 100%;
}

@media (min-width: 640px) {
  .grid-team {
    flex-wrap: nowrap;
  }
}

@media (min-width: 768px) {
  .grid-team {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid-team {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .grid-team {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

</style>