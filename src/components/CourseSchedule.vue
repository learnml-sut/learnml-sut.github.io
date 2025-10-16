<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Fall2025Schedule from './schedule/Fall2025Schedule.vue'
import Spring2025Schedule from './schedule/Spring2025Schedule.vue'

const sectionTitle = 'Course Schedule';
const route = useRoute()

const currentSemester = computed(() => {
  const path = route.path
  if (path.includes('spring2025')) {
    return 'spring2025'
  }
  return 'fall2025' // Default
})
</script>

<script>
export default {
  components: {
    Fall2025Schedule,
    Spring2025Schedule
  },
  data() {
    return {
      sessions: [
        {
          event: 'normal',
          number: 1,
          date: '1403/11/27',
          topics: [
            {topic: 'L00 - Logistics', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 2,
          date: '1403/11/29',
          topics: [
            {topic: 'L01 - Introduction', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 3,
          date: '1403/12/04',
          topics: [
            {topic: 'L01 - Introduction', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'release',
          number: 4,
          date: '1403/12/06',
          topics: [
            {topic: 'L02 - Univariate Probability', link: ''},
          ],
          coursework: 'HW1 Release (L00 to L03)',
          homework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 5,
          date: '1403/12/11',
          topics: [
            {topic: 'L02 - Univariate Probability', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 6,
          date: '1403/12/13',
          topics: [
            {topic: 'L03 - Multivariate Probability', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 7,
          date: '1403/12/18',
          topics: [
            {topic: 'L04 - Statistics', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'deadline',
          number: 8,
          date: '1403/12/20',
          topics: [
            {topic: 'L04 - Statistics', link: ''},
          ],
          coursework: '',
          deadline: 'HW1'
        },
        {
          event: 'release',
          number: 9,
          date: '1403/12/25',
          topics: [
            {topic: 'L04 - Statistics', link: ''},
          ],
          coursework: 'HW2 Release (L04 to L06)',
          homework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 10,
          date: '1403/12/27',
          topics: [
            {topic: 'L05 - Linear Algebra', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 11,
          date: '1404/01/16',
          topics: [
            {topic: 'L06 - Optimization', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 12,
          date: '1404/01/18',
          topics: [
            {topic: 'L07 - Logistic Regression', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'deadline',
          number: 13,
          date: '1404/01/23',
          topics: [
            {topic: 'L07 - Logistic Regression', link: ''},
          ],
          coursework: '',
          deadline: 'HW2'
        },
        {
          event: 'release',
          number: 14,
          date: '1404/01/25',
          topics: [
            {topic: 'L08 - Discriminant Analysis', link: ''},
          ],
          coursework: 'HW3 Release (L07 to L09)',
          homework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 15,
          date: '1404/01/30',
          topics: [
            {topic: 'L09 - Linear Regression', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 16,
          date: '1404/02/01',
          topics: [
            {topic: 'L09 - Linear Regression', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'exam',
          number: 17,
          date: '1404/02/04',
          topics: [
            {topic: 'Midterm Exam', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'release',
          number: 18,
          date: '1404/02/06',
          topics: [
            {topic: 'L10 - MultiLayer Perceptron', link: ''},
          ],
          coursework: 'HW4 Release (L10 to L11)',
          homework: '',
          deadline: ''
        },
        {
          event: 'deadline',
          number: 19,
          date: '1404/02/08',
          topics: [
            {topic: 'L10 - MultiLayer Perceptron', link: ''},
          ],
          coursework: '',
          deadline: 'HW3'
        },
        {
          event: 'normal',
          number: 20,
          date: '1404/02/13',
          topics: [
            {topic: 'L11 - Convolutional Neural Networks', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 21,
          date: '1404/02/15',
          topics: [
            {topic: 'L12 - Kernel Methods', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'deadline',
          number: 22,
          date: '1404/02/20',
          topics: [
            {topic: 'L12 - Kernel Methods', link: ''},
          ],
          coursework: '',
          deadline: 'HW4'
        },
        {
          event: 'normal',
          number: 23,
          date: '1404/02/22',
          topics: [
            {topic: 'L12 - Kernel Methods', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'release',
          number: 24,
          date: '1404/02/27',
          topics: [
            {topic: 'L12 - Kernel Methods', link: ''},
          ],
          coursework: 'HW5 Release (L12 to L13)',
          deadline: ''
        },
        {
          event: 'normal',
          number: 25,
          date: '1404/02/29',
          topics: [
            {topic: 'L13 - Decision Tree', link: ''},
          ],
          coursework: '',
          homework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 26,
          date: '1404/03/03',
          topics: [
            {topic: 'L13 - Decision Tree', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 27,
          date: '1404/03/05',
          topics: [
            {topic: 'L14 - Dimensionality Reduction', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'deadline',
          number: 28,
          date: '1404/03/10',
          topics: [
            {topic: 'L14 - Dimensionality Reduction', link: ''},
          ],
          coursework: '',
          homework: '',
          deadline: 'HW5'
        },
        {
          event: 'release',
          number: 29,
          date: '1404/03/12',
          topics: [
            {topic: 'L14 - Dimensionality Reduction', link: ''},
          ],
          coursework: 'HW6 Release (L14 to L15)',
          deadline: ''
        },
        {
          event: 'normal',
          number: 30,
          date: '1404/03/17',
          topics: [
            {topic: 'L15 - Reinforcement Learning', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'normal',
          number: 31,
          date: '1404/03/19',
          topics: [
            {topic: 'L15 - Reinforcement Learning', link: ''},
          ],
          coursework: '',
          deadline: ''
        },
        {
          event: 'exam',
          number: 32,
          date: '1404/03/31',
          topics: [
            {topic: 'Final Exam', link: ''},
          ],
          coursework: '',
          deadline: ''
        }
      ]
    }
  },
  methods: {
    getRowClass(event) {
      switch (event) {
        case 'exam':
          return 'exam-row';
        case 'deadline':
          return 'deadline-row';
        case 'release':
          return 'release-row';
        case 'normal':
          return 'normal-row';
        default:
          return '';
      }
    }
  }
}
</script>

<template>
  <div class="section">
    <div class="section-content">
      <div class="title font-bold text-3xl sm:text-4xl">{{ sectionTitle }}</div>
      
      <!-- Dynamic semester schedule -->
      <Fall2025Schedule v-if="currentSemester === 'fall2025'" />
      <Spring2025Schedule v-else-if="currentSemester === 'spring2025'" />
      <div class="sub-section">
        <div class="sub-section-content">
          <div class="sub-title">Additional Materials</div>
          <div class="sub-content">
            <ul>
              <li class="material-category">Main Textbooks:</li>
              <li class="material-item">
                <a class="any-link" href="https://probml.github.io/pml-book/">Probabilistic Machine Learning</a> 
                <span class="material-description">by Kevin Murphy. MIT Press, 2022.</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="http://web4.cs.ucl.ac.uk/staff/D.Barber/pmwiki/pmwiki.php?n=Brml.Online">Bayesian Reasoning and Machine Learning</a>
                <span class="material-description">by David Barber. Cambridge University Press, 2012.</span>
              </li>
              
              <li class="material-category mt-4">Online Courses & Lectures:</li>
              <li class="material-item">
                <a class="any-link" href="https://www.coursera.org/specializations/machine-learning-introduction">Machine Learning by Andrew Ng</a>
                <span class="material-description">- Stanford University/Coursera</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://cs229.stanford.edu/main_notes.pdf">Stanford CS229 Course Notes</a>
                <span class="material-description">- Stanford University</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://www.cs.cornell.edu/courses/cs4780/2018fa/">Machine Learning for Intelligent Systems</a>
                <span class="material-description">- Cornell University</span>
              </li>
              
              <li class="material-category mt-4">Additional Resources:</li>
              <li class="material-item">
                <a class="any-link" href="https://d2l.ai/">Dive into Deep Learning</a> 
                <span class="material-description">- Interactive deep learning book with code</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://www.deeplearningbook.org/">Deep Learning</a> 
                <span class="material-description">by Goodfellow, Bengio, and Courville</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://scikit-learn.org/stable/tutorial/index.html">Scikit-learn Tutorials</a> 
                <span class="material-description">- For practical implementation</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://www.di.ens.fr/~fbach/ltfp_book.pdf">Learning Theory from First Principles</a> 
                <span class="material-description">- An advanced theory book by Francis Bach.</span>
              </li>
              <li class="material-category mt-4">Reinforcement Learning:</li>
              <li class="material-item">
                <a class="any-link" href="https://www.youtube.com/watch?v=ISk80iLhdfU">Introduction to Reinforcement Learning</a> 
                <span class="material-description">- A beginner-friendly video that covers the basics of reinforcement learning concepts.</span>
              </li>
              <li class="material-category mt-4">Math Prerequisites Review:</li>
              <li class="material-item">
                <a class="any-link" href="https://www.math.uwaterloo.ca/~hwolkowi/matrix-cookbook.pdf">Matrix Cookbook</a> 
                <span class="material-description">- A comprehensive resource for matrix equations and identities.</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">Essence of Linear Algebra</a> 
                <span class="material-description">by 3Blue1Brown</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://seeing-theory.brown.edu/">Seeing Theory</a> 
                <span class="material-description">- Visual introduction to probability and statistics</span>
              </li>
              
              <li class="material-category mt-4">Implementation Resources:</li>
              <li class="material-item">
                <a class="any-link" href="https://pytorch.org/tutorials/">PyTorch Tutorials</a> 
                <span class="material-description">- Official tutorials and examples</span>
              </li>
              <li class="material-item">
                <a class="any-link" href="https://www.tensorflow.org/tutorials">TensorFlow Tutorials</a> 
                <span class="material-description">- Official guides and tutorials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedule-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
  max-width: 100%;
}

.schedule-grid {
  min-width: 800px; /* Ensures the grid doesn't shrink too much */
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.schedule-header {
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 1fr;
  background: var(--primary-color);
  color: white;
  font-weight: bold;
}

.header-cell {
  padding: 1rem;
  text-align: center;
}

.schedule-row {
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 1fr;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s ease;
}

.normal-row {
  background-color: var(--vt-c-white-soft);
}

.exam-row {
  background-color: rgba(251, 191, 36, 0.15); /* Amber/yellow for exams */
  font-weight: 600;
}

.deadline-row {
  background-color: rgba(239, 68, 68, 0.1); /* Red for deadlines */
  font-weight: 500;
}

.release-row {
  background-color: rgba(16, 185, 129, 0.1); /* Light green for releases */
  font-weight: 500;
}

.normal-row:hover {
  background-color: var(--vt-c-white-mute);
}

.exam-row:hover {
  background-color: rgba(251, 191, 36, 0.25);
}

.deadline-row:hover {
  background-color: rgba(239, 68, 68, 0.2);
}

.release-row:hover {
  background-color: rgba(16, 185, 129, 0.2);
}

.cell {
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.topics {
  flex-direction: column;
  gap: 0.5rem;
}

.any-link {
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
}

.event > p, a {
  font-weight: bold;
  color: var(--text-color);
}

.event > a {
  cursor: pointer;
  color: var(--accent-color);
  text-decoration: underline;
  transition: color var(--transition-speed) var(--transition-timing);
}

.event > a:hover {
  color: var(--accent-color-2);
}

.deadline {
  color: var(--secondary-color);
  font-weight: bold;
}

.container {
  margin-bottom: 50px;
}

.table-container {
  border-radius: var(--border-radius);
  overflow-x: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border-color);
  margin: 1rem 0;
}

.table-class {
  background-color: var(--light-color);
  min-width: 100%;
  text-indent: 0;
}

.table-head-row {
  text-align: left;
  color: white;
  background-color: var(--primary-color);
}

.table-head-item {
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.6;
}

.table-body-row {
  border-bottom: 1px solid var(--border-color);
  transition: background-color var(--transition-speed) var(--transition-timing);
}

.table-body-row:hover {
  background-color: var(--dark-color);
}

table {
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  height: fit-content;
  font-size: 0.95rem;
  line-height: 1.6;
  border-left: 1px solid var(--border-color);
  text-align: center;
  min-height: 50px;
  color: var(--text-color);
}

thead {
  background-color: var(--dark-color);
  color: var(--text-color);
  border-bottom: 2px solid var(--border-color);
}

.sub-section .sub-title {
  margin-bottom: 10px;
}

.lecture-topics {
  display: flex;
  justify-content: space-evenly;
  color: var(--text-color);
  font-weight: 500;
  padding: 0.5rem;
}

.lecture-topics a {
  color: var(--primary-color);
  transition: color var(--transition-speed) var(--transition-timing);
}

.lecture-topics a:hover {
  color: var(--accent-color-2);
}

.material-category {
  font-weight: 600;
  color: var(--primary-color);
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
  width: fit-content;
}

.material-item {
  margin: 1rem 0;
  line-height: 1.5;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.material-description {
  color: var(--text-color);
  opacity: 0.8;
  font-size: 0.95rem;
}

.any-link {
  font-weight: 500;
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
}

.any-link:hover {
  color: var(--primary-color);
}

.any-link:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.any-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.mt-4 {
  margin-top: 1.25rem;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.bg-gray-100 {
  background-color: var(--light-color);
}

.bg-yellow-100 {
  background-color: rgba(251, 191, 36, 0.1);
}

.bg-red-100 {
  background-color: rgba(239, 68, 68, 0.1);
}

.bg-gray-100:hover {
  background-color: rgba(243, 244, 246, 0.4);
}

.bg-yellow-100:hover {
  background-color: rgba(251, 191, 36, 0.2);
}

.bg-red-100:hover {
  background-color: rgba(239, 68, 68, 0.2);
}

@media (max-width: 1024px) {
  .lecture-topics {
    flex-direction: column;
  }
}
</style>