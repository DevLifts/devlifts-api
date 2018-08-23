# Schema v1

Features: Auth, Workout Logging, 1RM Logging, Exercise Database

~~~js
User {
  username: 'jchiatt',
  email: 'jc@devlifts.io',
  password: <encrypted>,
  firstName: 'J.C.',
  lastName: 'Hiatt',
  birthdate: '09/14/1992',
  age: 25

  has_many: Workouts
  has_many: 1RMs
  has_many: Goals
}

Goals [
  general: {
    name: 'Body Weight',
    type: 'weight',
    values: [
      lbs: 190,
      kgs: 86.1826,
    ],
  },
  exercises: {
    id: 'bench-press',
    type: 'weight',
    values: [
      lbs: 225,
      kgs: 142.4
    ]
  }
]

Exercises [
  {
    id: 'overhead-dumbbell-press',
    description: 'Delts exercise...',
    title: 'Overhead Dumbbell Press',
    muscles: {
      group: 'shoulders'
      primary: 'deltoids',
      secondary: [
        'triceps',
      ]
    },
    variations: [
      {
        id: 'push-press',
      }
    ],
    resources: [
      {
        name: 'Instructional Video',
        type: 'video',
        links: [
          "https://youtu.be/-lfPQw5opTo",
        ],
      },
      {
        name: 'How to Perform the Overhead Dumbbell Press',
        type: 'article',
        links: [
          'https://devlifts.io/articles/how-to-perform-overhead-dumbbell-press'
        ],
      },
    ]
  }
]

1RMs [
  {
    id: 'bench-press',
    dateAchieved: '08/23/2018',
    weight: {
      lbs: 315,
      kgs: 142.882,
    }
    history: [
      {
        dateAchieved: '07/02/2018',
        weight: {
          lbs: 315,
          kgs: 142.882,
        }
      }
    ]
  }
]

Workouts [
  {
    meta: {
      name: 'Superbear',
      energyLevelBefore: 'okay',
      energyLevelAfter: 'high',
      completionTime: 123456789,
      notes: 'this workout sucks',
    },
    exercises: [
      {
        id: 'overhead-dumbbell-press',
        order: 1,
        sets: [
          {
            order: 1,
            weight: {
              lbs: 100,
              kgs: 50,
            },
            reps: 5.2,
            rpe: 8
            targets: {
              weight: {
                lbs: 100,
                kgs: 50,
              },
              reps: 6,
              rpe: 8,
            },
            notes: 'Tough set - had to drop the weight after 3 reps',
          }
        ]
      }
    ],
    notes: 'Tough workout - I am exhausted. 😵'
  }
]

~~~