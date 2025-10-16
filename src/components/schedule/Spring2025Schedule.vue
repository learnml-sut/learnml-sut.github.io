<script setup>
const sectionTitle = 'Course Schedule';
</script>

<script>
export default {
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
  <div class="sub-section">
    <div class="sub-section-content">
      <div class="schedule-wrapper">
        <div class="schedule-grid">
          <div class="schedule-header">
            <div class="header-cell">#</div>
            <div class="header-cell">Date</div>
            <div class="header-cell">Topics</div>
            <div class="header-cell">Coursework</div>
            <div class="header-cell">Deadline</div>
          </div>
          <div v-for="session in sessions" :key="session.number" 
               :class="['schedule-row', getRowClass(session.event)]">
            <div class="cell">{{ session.number }}</div>
            <div class="cell">{{ session.date }}</div>
            <div class="cell topics">
              <div v-for="(topic, index) in session.topics" :key="index">
                <a v-if="topic.link" :href="topic.link" class="any-link">{{ topic.topic }}</a>
                <span v-else>{{ topic.topic }}</span>
              </div>
            </div>
            <div class="cell">{{ session.coursework }}</div>
            <div class="cell">{{ session.deadline }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedule-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
}

.schedule-grid {
  min-width: 800px;
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
  background-color: rgba(251, 191, 36, 0.15);
  font-weight: 600;
}

.deadline-row {
  background-color: rgba(239, 68, 68, 0.1);
  font-weight: 500;
}

.release-row {
  background-color: rgba(16, 185, 129, 0.1);
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
</style>
