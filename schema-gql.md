type Workout @model {
  meta: {
    name: String
    energyLevelBefore: String
    energyLevelAfter: String
    completionTime: Number
    notes: String
  }
  exercises: [
    {
      exercise: Exercise!
      order: Number!
      sets: [
        {
          order: Number!
          weight: {
            lbs: Number!
            kgs: Number!
          }
          reps: Number!
          rpe: Number!
          targets: {
            weight: {
              lbs: Number
              kgs: Number
            }
            reps: Number
            rpe: Number
          }
          notes: String
        }
      ]
      notes: String
    }
  ]
}

type GeneralGoal @model {
  name: String!
  type: String!
  values: []
}

type ExerciseGoal @model {
  exercise: Exercise!
  type: String!
  values: []
}

type WeightGoal @model {
  type: String!
  values: [
    lbs: Number!
    kgs: Number!
  ]
}

type Exercise @model {
  id: String!
  muscles: [
    group: String!
    primary: String!
    secondary: [String]
  ]
  variants: [
    {
      id: String!
    }
  ]
  resources: [
    {
      name: String!
      type: String!
      links: [String!]!
    }
  ]
}

type OneRepMax @model {
  exercise: Exercise!
  dateAchieved: String!
  weight: {
    lbs: Number!
    kgs: Number!
  }
  history: [
    {
      dateAchieved: String!
      weight: {
        lbs: Number!
        kgs: Number!
      }
    }
  ]
}