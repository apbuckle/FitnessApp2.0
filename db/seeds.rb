# create all workouts
legs = Workout.create(
    title: "Tree Trunks",
    day: "Monday and Friday"
)

chest = Workout.create(
    title: "Square Chest",
    day: "Tuesday and Saturday"
)

back = Workout.create(
    title: "Cobra Back",
    day: "Wednesday and Sunday"
)

core = Workout.create(
    title: "Core Strength",
    day: "Monday, Wednesday, Friday"
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

leg_press = Exercise.create(
    name: "Leg Press",
    muscles: "Glutes, Quads, Hamstrings"
)

leg_extension = Exercise.create(
    name: "Leg Extension",
    muscles: "Quads"
)

leg_curl = Exercise.create(
    name: "Prone Leg Curl",
    muscles: "Hamstrings, Glutes, Calves"
)

incline_press = Exercise.create(
    name: "Dumbbell Incline Press",
    muscles: "Upper Pectorial, Anterior Deltiod, Triceps"
)

bench_press = Exercise.create(
    name: "Flat Bench Press",
    muscles: "Pectorial Major and Minor, Anterior Deltoid, Triceps"
)

decline_press = Exercise.create(
    name: "Decline Bench Press",
    muscles: "Lower Pectorial, Triceps"
)

dips = Exercise.create(
    name: "Dips",
    muscles: "Lower Pectorial, Triceps"
)

flys = Exercise.create(
    name: "Cable Flys",
    muscles: "Pectorial Major"
)

# create all joins
leg_exer_one = WorkoutExercise.create(
    {workout: legs,
    exercise: squats,
    duration: 10,
    sets: 4})
    
leg_exer_two = WorkoutExercise.create(
    {workout: legs,
    exercise: leg_press,
    duration: 10,
    sets: 4})

leg_exer_three = WorkoutExercise.create(
        {workout: legs,
        exercise: leg_curl,
        duration: 10,
        sets: 3})

leg_exer_four = WorkoutExercise.create(
    {workout: legs,
    exercise: leg_extension,
    duration: 10,
    sets: 3})

       
    






# chest = WorkoutExercise.create(
#     {workout: chest, exercise: incline_press, flys, dips, duration: 8-12, sets: 4}
# )