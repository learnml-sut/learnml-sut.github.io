# Semester Customization Guide

## Overview
The website now supports different content for each semester (Fall 2025 and Spring 2025). The following components are now semester-specific:

1. **Course Contents** - Different slides and materials (already set up with tabs)
2. **Course Schedule** - Different class schedules and dates
3. **Contact Information** - Different TAs and contact details
4. **Course Team** - Different head assistants and TAs

## File Structure

```
src/components/
├── course-contents/
│   ├── fall2025/
│   │   ├── CourseDetails.vue     # Fall 2025 slides (already filled)
│   │   └── ClassDetails.vue      # Fall 2025 class info (already filled)
│   ├── spring2025/
│   │   ├── CourseDetails.vue     # Spring 2025 slides (UPDATE THIS)
│   │   └── ClassDetails.vue      # Spring 2025 class info (UPDATE THIS)
│   └── index.vue                 # Main wrapper (auto-switches based on route)
├── schedule/
│   ├── Fall2025Schedule.vue      # Fall 2025 schedule (already filled)
│   └── Spring2025Schedule.vue    # Spring 2025 schedule (template - UPDATE THIS)
├── contact/
│   ├── Fall2025Contact.vue       # Fall 2025 contacts (already filled)
│   └── Spring2025Contact.vue     # Spring 2025 contacts (template - UPDATE THIS)
├── team/
│   ├── Fall2025Team.vue          # Fall 2025 team (already filled)
│   └── Spring2025Team.vue        # Spring 2025 team (template - UPDATE THIS)
├── CourseSchedule.vue            # Main wrapper (auto-switches)
├── Contact.vue                   # Main wrapper (auto-switches)
└── CourseTeam.vue                # Main wrapper (auto-switches)
```

## How It Works

The system automatically detects which semester page you're on based on the URL:
- `/fall2025` → Shows Fall 2025 content
- `/spring2025` → Shows Spring 2025 content

## How to Update Spring 2025 Content

### 1. Update Course Contents (Slides & Class Details)

#### Course Slides
**File:** `src/components/course-contents/spring2025/CourseDetails.vue`

Update the slides array with your Spring 2025 lectures:

```javascript
const slides = ref([
  {
    title: "L00. Course Logistics",
    description: "Course Overview, Policies, and Requirements",
    link: "/files/slides/IML_L00_Logistics.pdf",
    available: true  // Set to true when slide is ready
  },
  {
    title: "L01. Introduction",
    description: "Problem Formulation in Machine Learning",
    link: "/files/slides/IML_L01_Introduction.pdf",
    available: true
  },
  // Add more lectures...
]);
```

#### Class Details
**File:** `src/components/course-contents/spring2025/ClassDetails.vue`

Update class schedule, grading, and exam dates:

```vue
<li>The class is scheduled for Saturdays and Mondays from 16:30 to 18:00.</li>
```

Update exam dates:
```vue
<li><span class="font-bold">Midterm Exam:</span> 1404/09/22</li>
<li><span class="font-bold">Final Exam:</span> 1404/11/11 15:00</li>
```

### 2. Update Course Schedule
**File:** `src/components/schedule/Spring2025Schedule.vue`

Edit the `sessions` array to add your Spring 2025 schedule:

```javascript
sessions: [
  {
    event: 'normal',      // Options: 'normal', 'exam', 'deadline', 'release'
    number: 1,
    date: '1404/07/01',   // Persian date
    topics: [
      {topic: 'L00 - Logistics', link: ''},
    ],
    coursework: '',       // e.g., 'HW1 Release (L00 to L03)'
    deadline: ''          // e.g., 'HW1'
  },
  // Add more sessions...
]
```

**Event Types:**
- `normal`: Regular class (light gray background)
- `exam`: Exam day (yellow background)
- `deadline`: Homework deadline (red background)
- `release`: Homework release (green background)

### 3. Update Contact Information
**File:** `src/components/contact/Spring2025Contact.vue`

Update the contact details in the template section:

```vue
<li class="font-bold">Head Assistant Name: &nbsp;&nbsp;
  <a class="any-link font-bold" href="mailto:email@example.com">
    email@example.com
  </a>
</li>
```

Update Telegram links:
```vue
<li>Head Assistant: 
  <a class="any-link font-bold" href="https://t.me/username" target="_blank">
    @username
  </a>
</li>
```

Update channel and group links:
```vue
<li>Join our 
  <a class="any-link font-bold" href="https://t.me/IML_1404_SAmini" target="_blank">
    Telegram Channel
  </a> for important announcements.
</li>
```

### 4. Update Course Team
**File:** `src/components/team/Spring2025Team.vue`

Update the head assistants:
```javascript
const courseHeadAssistants = {
  title: 'Course Head Assistants',
  people: [
    {
      firstName: 'FirstName', 
      lastName: 'LastName', 
      avatar: 'photo.jpg',  // Place photo in public/images/
      email: 'email@example.com', 
      personalWebsite: ''   // Optional
    },
    // Add more head assistants...
  ]
};
```

Update the course assistants:
```javascript
const courseAssistants = {
  title: 'Course Assistants',
  people: [
    {firstName: 'Name1', lastName: 'Last1', avatar: 'profile.jpg', personalWebsite: ''},
    {firstName: 'Name2', lastName: 'Last2', avatar: 'profile.jpg', personalWebsite: ''},
    // Add more assistants...
  ]
};
```

## Adding Avatar Images

Place avatar images in: `public/images/`

Default placeholder: `profile.jpg` (already exists)

## Testing

1. Navigate to `/fall2025` - Should show Fall 2025 content
2. Navigate to `/spring2025` - Should show Spring 2025 content
3. Use the semester dropdown in the Landing page to switch between semesters

## Notes

- The instructor (Professor Amini) is shared across all semesters
- Course description and other static content remain the same
- The semester switcher dropdown automatically shows available semesters
- All styling is already applied and consistent across semesters

## Quick Checklist for Spring 2025

- [ ] Update lecture slides list in `spring2025/CourseDetails.vue`
- [ ] Update class schedule times in `spring2025/ClassDetails.vue`
- [ ] Update exam dates in `spring2025/ClassDetails.vue`
- [ ] Update schedule dates and topics in `Spring2025Schedule.vue`
- [ ] Update head assistant names and emails in `Spring2025Contact.vue`
- [ ] Update Telegram usernames and links in `Spring2025Contact.vue`
- [ ] Update Telegram channel/group links in `Spring2025Contact.vue`
- [ ] Update head assistants in `Spring2025Team.vue`
- [ ] Update course assistants list in `Spring2025Team.vue`
- [ ] Add avatar photos to `public/images/` directory
- [ ] Upload lecture slides to `public/files/slides/` directory
- [ ] Test both semester pages to ensure content displays correctly
