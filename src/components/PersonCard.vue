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
  width: fit-content;
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
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
  text-align: center;
  text-decoration: none;
  color: inherit;
  margin: 0;
}

.name {
  font-weight: 600;
  color: var(--text-color);
}

.email {
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 400;
  word-break: break-all;
}
</style>