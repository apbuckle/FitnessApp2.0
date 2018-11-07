# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# create all workouts
legs = Workout.create(
    title: "Leg Day",
    day: "Monday and Friday"
)

upperBody = Workout.create(
    title: "Swole Patrol",
    day: "Tuesday and Saturday"
)

# create all exercises
squats = Exercise.create(
    name: "Squats",
    muscles: "Glutes, Quads, Hamstrings"
)

deadlifts = Exercise.create(
    name: "Deadlifts",
    muscles: "Glutes, Quads, Hamstrings"
)

lunges = Exercise.create(
    name: "Lunges",
    muscles: "Glutes, Quads, Hamstrings"
)

# create all joins
leg_squats = WorkoutExercise.create(
    {workout: legs, exercise: squats, duration: 20, sets: 3})

swole_Patrol = WorkoutExercise.create(
    {workout: upperBody, exercise: deadlifts, duration: 10, sets: 5}
)