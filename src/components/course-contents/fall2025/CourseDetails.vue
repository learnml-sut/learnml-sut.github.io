<script setup>
import { ref } from 'vue';

const presentations = ref([
  {
    title: "L00. Course Logistics",
    description: "Course Overview, Policies, and Requirements",
    link: "/files/slides/IML_L00_Logistics.pdf",
    available: true
  },
  {
    title: "L01. Introduction",
    description: "Problem Formulation in Machine Learning, Types of Learning",
    link: "/files/slides/IML_L01_Introduction.pdf",
    available: true
  },
  {
    title: "L02. Univariate & Multivariate Probability",
    description: "Probability Concepts, Distributions",
    link: "/files/slides/IML_L02_Univariate_Probability.pdf",
    available: true
  },
  {
    title: "L03. Multivariate Probability",
    description: "Joint Probabilities",
    link: "/files/slides/IML_L03_Multivariate_Probability.pdf",
    available: false
  },
  {
    title: "L04. Statistics",
    description: "Statistical Concepts and Applications in Machine Learning",
    link: "/files/slides/IML_14032_L04_Statistics.pdf",
    available: false
  },
  {
    title: "L05. Linear Algebra",
    description: "Essential Linear Algebra Concepts for Machine Learning",
    link: "/files/slides/IML_14032_L05_Linear_Algebra.pdf",
    available: false
  },
  {
    title: "L06. Optimization",
    description: "Optimization Techniques",
    link: "/files/slides/IML_14032_L06_L07_Optimization_Logistic.pdf",
    available: false
  },
  {
    title: "L07. Logistic Regression",
    description: "Logistic Regression Theory and Applications",
    link: "/files/slides/IML_14032_L06_L07_Optimization_Logistic.pdf",
    available: false
  },
  {
    title: "L08. Discriminant Analysis",
    description: "Discriminant Analysis Methods",
    link: "/files/slides/IML_14032_L08_L09_DA_Linear.pdf",
    available: false
  },
  {
    title: "L09. Linear Regression",
    description: "Linear Regression Models",
    link: "/files/slides/IML_14032_L08_L09_DA_Linear.pdf",
    available: false
  },
  {
    title: "L10. MultiLayer Perceptron",
    description: "MultiLayer Perceptron",
    link: "/files/slides/IML_14032_L10_L11_Neural_Networks.pdf",
    available: false
  },
  {
    title: "L11. Convolutional Neural Networks",
    description: "Convolutional Neural Networks",
    link: "/files/slides/IML_14032_L10_L11_Neural_Networks.pdf",
    available: false
  },
  {
    title: "L12. Kernel Methods",
    description: "Kernel-based Learning Algorithms",
    link: "/files/slides/IML_14032_L12_Kernel_Methods.pdf",
    available: false
  },
  {
    title: "L13. Decision Trees",
    description: "Decision Tree Algorithms",
    link: "/files/slides/IML_14032_L13_L14_Trees_Dim_Reduction.pdf",
    available: false
  },
  {
    title: "L14. Dimensionality Reduction",
    description: "Dimensionality Reduction Techniques",
    link: "/files/slides/IML_14032_L13_L14_Trees_Dim_Reduction.pdf",
    available: false
  },
  {
    title: "L15. Reinforcement Learning",
    description: "Introduction to Reinforcement Learning Concepts",
    link: "/files/slides/IML_14032_L15_Reinforcement_Learning.pdf",
    available: false
  }
]);

const isFileAvailable = (presentation) => {
  return presentation.available;
};
</script>

<template>
  <div class="sub-section">
    <div class="sub-section-content">
      <div class="sub-title font-bold text-2xl sm:text-2xl">Course Materials</div>
      <div class="sub-content">
        <div v-for="(presentation, index) in presentations" :key="index" class="presentation-item">
          <h3 class="font-bold">{{ presentation.title }}</h3>
          <p class="description">{{ presentation.description }}</p>
          <a v-if="isFileAvailable(presentation)" :href="presentation.link" class="any-link" target="_blank">View Slides</a>
          <p v-else class="text-red-500">Slides not available yet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.presentation-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.presentation-item:last-child {
  border-bottom: none;
}

.presentation-item h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.presentation-item .description {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.font-bold {
  font-weight: 700;
}

.syllabus ul {
  list-style-type: none;
  padding: 0;
}

.syllabus > ul > li {
  margin: 10px 0;
  padding-left: 0;
}

.syllabus > ul > li::before {
  content: "";
}

.syllabus a {
  text-decoration: none;
  color: #1e88e5;
}

.syllabus a:hover {
  text-decoration: underline;
}

@media (max-width: 450px) {
  .sub-section-content .sub-content {
    padding-left: 0 !important;
  }
}

.text-red-500 {
  color: red;
}
</style>