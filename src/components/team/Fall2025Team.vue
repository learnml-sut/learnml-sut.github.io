<script setup lang="ts">
import { computed } from 'vue'
import PersonCard from "../PersonCard.vue";

const courseHeadAssistants = {
  title: 'Course Head Assistants',
  people: [
    {firstName: 'Mohammad', lastName: 'Eshtehardian', avatar: 'Eshtehardian.jpg', email: 'mohammadeshtehardian@gmail.com', personalWebsite: 'mailto:mohammadeshtehardian@gmail.com'},
    {firstName: 'Mohammad Hossein', lastName: 'Momeni Hamaneh', avatar: 'Hamaneh.jpg', email: 'momenihamaneh1381@gmail.com', personalWebsite: 'mailto:momenihamaneh1381@gmail.com'}
  ]
};

const courseAssistants = {
  title: 'Course Assistants',
  people: [
    {firstName: 'Arshak', lastName: 'Rezvani', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'Project'},
    {firstName: 'Amirreza', lastName: 'Velaei', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW1'},
    {firstName: 'Sarina', lastName: 'Heshmati', avatar: 'Heshmati.jpg', personalWebsite: 'mailto:sarinaheshmatii@gmail.com', responsibility: 'HW2'},
    {firstName: 'Esra', lastName: 'Kashaninia', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW3'},
    {firstName: 'Mahdi', lastName: 'Tabatabaei', avatar: 'Tabatabaei.jpg', personalWebsite: 'mailto:Tabatabaeii.mahdii@gmail.com', responsibility: 'HW4'},
    {firstName: 'Ali', lastName: 'Yousefi', avatar: 'Yousefi.jpg', personalWebsite: 'mailto:8aliyousefi@gmail.com', responsibility: 'HW5'},
    {firstName: 'Amirreza', lastName: 'Tanavardi', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW6'},
    {firstName: 'Parsa', lastName: 'Ghezelbash', avatar: 'Ghezelbash.jpeg', personalWebsite: 'mailto:parsaghezelbash04@gmail.com', responsibility: 'HW1'},
    {firstName: 'Mohammad', lastName: 'Mohammadiabisheh', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW1'},
    {firstName: 'Ramtin', lastName: 'Moslemi', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW2'},
    {firstName: 'Seyed Mohammad Mahdi', lastName: 'Mousavi', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW2'},
    {firstName: 'Sadegh', lastName: 'Mohammadian', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW3'},
    {firstName: 'Romina', lastName: 'Babaie', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW3'},
    {firstName: 'Behrad', lastName: 'Jahani', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW4'},
    {firstName: 'Seyed Amir Mahdi', lastName: 'Sadrzadeh', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW4'},
    {firstName: 'Sahar', lastName: 'Semsarha', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW5'},
    {firstName: 'Melika', lastName: 'Dastgiri', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'HW5'},
    {firstName: 'Mehdi', lastName: 'Razmjoo', avatar: 'Razmjoo.jpg', personalWebsite: 'mailto:m.mahdi.razmjoo@gmail.com', responsibility: 'HW6'},
    {firstName: 'Arman', lastName: 'Yazdani', avatar: 'Yazdani.jpg', personalWebsite: 'mailto:m.arman.yazdani@gmail.com', responsibility: 'HW6'},
    {firstName: 'Ashkan', lastName: 'Yousefnia', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'Project'},
    {firstName: 'Rojin', lastName: 'Salmani', avatar: 'profile.jpg', personalWebsite: 'mailto:rojinsalmani5@gmail.com', responsibility: 'Project'},
    {firstName: 'Zahra', lastName: 'Sorkheie', avatar: 'profile.jpg', personalWebsite: '', responsibility: 'Project'},
  ]
};

// Group assistants by responsibility in the desired order
const groupedAssistants = computed(() => {
  const order = ['Project', 'HW1', 'HW2', 'HW3', 'HW4', 'HW5', 'HW6'];
  const groups: { [key: string]: any[] } = {};
  
  // Group by responsibility
  courseAssistants.people.forEach(person => {
    const resp = person.responsibility || 'Other';
    if (!groups[resp]) {
      groups[resp] = [];
    }
    groups[resp].push(person);
  });
  
  // Return in specified order
  return order.map(resp => ({
    responsibility: resp,
    people: groups[resp] || []
  })).filter(group => group.people.length > 0);
});
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
    <!-- Grouped by Responsibility -->
    <div class="sub-section-content" v-for="group in groupedAssistants" :key="group.responsibility">
      <div class="sub-title">{{ group.responsibility }}</div>
      <div class="grid-team scrollable">
        <div class="grid-card" v-for="(assistant, index) in group.people" :key="index">
          <PersonCard
              :firstName="assistant.firstName"
              :lastName="assistant.lastName"
              :avatar="assistant.avatar"
              :personal-website="assistant.personalWebsite"
              :responsibility="assistant.responsibility"
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
