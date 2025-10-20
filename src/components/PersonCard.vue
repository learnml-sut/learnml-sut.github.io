<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  firstName: {
    type: String,
    required: true,
    default: 'firstName',
  },
  lastName: {
    type: String,
    required: true,
    default: 'lastName',
  },
  avatar: {
    type: String,
    required: true,
    default: '/images/person.jpg',
  },
  personalWebsite: {
    type: String,
    required: false,
    default: '#',
  },
  responsibility: {
    type: String,
    required: false,
    default: '',
  }
});

// Extract email from personalWebsite (remove mailto: prefix if present)
const displayEmail = computed(() => {
  if (!props.personalWebsite || props.personalWebsite === '#') {
    return '';
  }
  return props.personalWebsite.replace('mailto:', '');
});
</script>

<template>
  <div class="person-card">
    <a :href="personalWebsite" target="_blank">
      <img :src="avatar" alt="" class="person-avatar" />
      <div class="person-info">
        <p class="name">{{ props.firstName }} {{ props.lastName }}</p>
        <p v-if="displayEmail" class="email">{{ displayEmail }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.person-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  cursor: pointer;
}

.person-card > a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

.person-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

@media (min-width: 640px) {
  .person-avatar {
    width: 120px;
    height: 120px;
  }
}

.person-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.person-info > p {
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: center;
  text-decoration: none;
  color: inherit;
  margin: 0;
  padding: 0 0.25rem;
}

.name {
  font-weight: 600;
  color: var(--text-color);
  font-size: 0.9rem;
}

@media (min-width: 640px) {
  .name {
    font-size: 1rem;
  }
}

.email {
  font-size: 0.75rem;
  color: var(--primary-color);
  font-weight: 400;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
}

@media (min-width: 640px) {
  .email {
    font-size: 0.85rem;
  }
}

@media (min-width: 768px) {
  .email {
    font-size: 0.9rem;
  }
}
</style>