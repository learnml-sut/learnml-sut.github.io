<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Landing from "@/components/Landing.vue";
import CourseTeam from "@/components/CourseTeam.vue";
import CourseSchedule from "@/components/CourseSchedule.vue";
import CourseDescription from "@/components/CourseDescription.vue";
import CourseContents from "@/components/course-contents/index.vue";
import Contact from "@/components/Contact.vue";
</script>

<template>
  <main class="max-w-8xl main-body">
    <Header />
    <Landing id="home"/>
    <CourseDescription />
    <CourseTeam id="team"/>
    <CourseContents id="course"/>
    <CourseSchedule id="schedule"/>
    <Contact id="contact"/>
    <Footer />
  </main>
</template>

<style scoped>
@import './assets/base.css';

.main-body {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%; /* Full height of the viewport */
}
</style>
