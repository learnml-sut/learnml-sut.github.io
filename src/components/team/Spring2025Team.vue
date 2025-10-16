<script setup lang="ts">
import PersonCard from "../PersonCard.vue";

const courseHeadAssistants = {
  title: 'Course Head Assistants',
  people: [
    {firstName: 'Borna', lastName: 'Khodabandeh', avatar: 'Khodabandeh.jpg', email: 'borna710kh@gmail.com', personalWebsite: ''},
    {firstName: 'Amir Abbas', lastName: 'Afzali', avatar: 'Afzali.jpg', email: 'amir8afzali@gmail.com', personalWebsite: ''}
  ]
};

const courseAssistants = {
  title: 'Course Assistants',
  people: [
    {firstName: 'Parsa', lastName: 'Ghezelbash', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Amirhossein', lastName: 'Naghdi', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Iman', lastName: 'Ahmadi', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Ali', lastName: 'Sadeghian', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Hesam', lastName: 'Hosseini', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Amirreza', lastName: 'Velaei', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Mohammad', lastName: 'Mosavi', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Mohammad Hossein', lastName: 'Momeni', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Zahra', lastName: 'Maleki', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Hooman', lastName: 'Zolfaghari', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Romina', lastName: 'Babaei', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Yahya', lastName: 'Tehrani', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Mahdi', lastName: 'Tabatabaei', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Sina', lastName: 'Yazdgerd', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Ghazal', lastName: 'Hosseini', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Amirreza', lastName: 'Zameni', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Amirreza', lastName: 'Tanevardi', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Mohammad', lastName: 'Mohammadian', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Mohammad Parsa', lastName: 'Ghaderahmadi', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Sina', lastName: 'Fathi', avatar: 'profile.jpg', personalWebsite: ''},
  ]
};
</script>

<template>
  <div class="sub-section">
    <div class="sub-section-content">
      <div class="sub-title">{{ courseHeadAssistants.title }}</div>
      <div class="grid-team scrollable">
        <div class="grid-card" v-for="(headAssistant, index) in courseHeadAssistants.people" :key="index">
          <PersonCard
              :firstName="headAssistant.firstName"
              :lastName="headAssistant.lastName"
              :avatar="headAssistant.avatar"
              :personal-website="headAssistant.personalWebsite" 
          />
        </div>
      </div>
    </div>
    <div class="sub-section-content">
      <div class="sub-title">{{ courseAssistants.title }}</div>
      <div class="grid-team scrollable">
        <div class="grid-card" v-for="(assistant, index) in courseAssistants.people" :key="index">
          <PersonCard
              :firstName="assistant.firstName"
              :lastName="assistant.lastName"
              :avatar="assistant.avatar"
              :personal-website="assistant.personalWebsite"
          />
        </div>
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
