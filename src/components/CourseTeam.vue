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
  personalWebsite: 'mailto:s_amini@sharif.edu'
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
  min-width: 0;
  flex-shrink: 0;
}

.grid-team {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 0.5rem;
  justify-items: center;
}

.scrollable {
  max-width: 100%;
  overflow-x: visible;
}

/* Mobile: 1-2 columns based on space */
@media (max-width: 639px) {
  .grid-team {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
}

/* Tablet: 3-4 columns */
@media (min-width: 640px) and (max-width: 767px) {
  .grid-team {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid-team {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop: 5-6 columns */
@media (min-width: 1024px) and (max-width: 1279px) {
  .grid-team {
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .grid-team {
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }
}

</style>