# create all workouts
legs = Workout.create( title: "Tree Trunks", day: "Monday and Friday")

chest = Workout.create( title: "Square Chest", day: "Tuesday and Saturday")

back = Workout.create( title: "Cobra Back", day: "Wednesday and Sunday")

core = Workout.create( title: "Core Strength", day: "Monday, Wednesday, Friday")


# create all exercises
# legs
squats = Exercise.create( name: "Squats", muscles: "Glutes, Quads, Hamstrings")

deadlifts = Exercise.create( name: "Deadlifts", muscles: "Glutes, Quads, Hamstrings")

lunges = Exercise.create( name: "Lunges", muscles: "Glutes, Quads, Hamstrings")

leg_press = Exercise.create( name: "Leg Press", muscles: "Glutes, Quads, Hamstrings")

leg_extension = Exercise.create( name: "Leg Extension", muscles: "Quads")

leg_curl = Exercise.create( name: "Prone Leg Curl", muscles: "Hamstrings, Glutes, Calves")


# chest
incline_press = Exercise.create( name: "Dumbbell Incline Press", muscles: "Upper Pectorial, Anterior Deltiod, Triceps")

bench_press = Exercise.create( name: "Flat Bench Press", muscles: "Pectorial Major and Minor, Anterior Deltoid, Triceps")

decline_press = Exercise.create( name: "Decline Bench Press", muscles: "Lower Pectorial, Triceps")

dips = Exercise.create( name: "Dips", muscles: "Lower Pectorial, Triceps")

flys = Exercise.create( name: "Cable Flys",muscles: "Pectorial Major")

# back
deadlifts = Exercise.create( name: "Deadlift", muscles: "")
pull_ups = Exercise.create( name: "Pull Ups", muscles: "")
pull_downs = Exercise.create( name: "Pull Downs", muscles: "")
rows = Exercise.create( name: "Seated Upright Rows", muscles: "")
reverse_flys = Exercise.create( name: "Reverse Flys", muscles: "")
shrugs = Exercise.create( name: "Barbell Shrugs", muscles: "")

# core
planks = Exercise.create( name: "Planks", muscles: "")
cable_crunches = Exercise.create( name: "Cable Rope Crunches", muscles: "")
russian_twist = Exercise.create( name: "Russian Twist", muscles: "")
knee_tucks = Exercise.create( name: "Hanging Knee Tucks", muscles: "")

# create all joins
leg_ex_one = WorkoutExercise.create(
    {workout: legs,
    exercise: squats,
    duration: 10,
    sets: 4})
leg_ex_two = WorkoutExercise.create(
    {workout: legs,
    exercise: leg_press,
    duration: 10,
    sets: 4})
leg_ex_three = WorkoutExercise.create(
        {workout: legs,
        exercise: leg_curl,
        duration: 10,
        sets: 3})
leg_ex_four = WorkoutExercise.create(
    {workout: legs,
    exercise: leg_extension,
    duration: 10,
    sets: 3})

chest_ex_one = WorkoutExercise.create(
    {workout: chest,
    exercise: incline_press,
    duration: 10,
    sets: 5})
    
    chest_ex_two = WorkoutExercise.create(
        {workout: chest,
        exercise: dips,
        duration: 10,
        sets: 4})

        chest_ex_three = WorkoutExercise.create(
    {workout: chest,
    exercise: bench_press,
    duration: 10,
    sets: 4})

    chest_ex_four = WorkoutExercise.create(
    {workout: chest,
    exercise: flys,
    duration: 10,
    sets: 5})

back_ex_one = WorkoutExercise.create(
    {workout: back,
    exercise: deadlifts,
    duration: 10,
    sets: 4})
    back_ex_two = WorkoutExercise.create(
        {workout: back,
        exercise: pull_ups,
        duration: 10,
        sets: 4})
        back_ex_three = WorkoutExercise.create(
            {workout: back,
            exercise: rows,
            duration: 10,
            sets: 4})
            back_ex_four = WorkoutExercise.create(
                {workout: back,
                exercise: shrugs,
                duration: 10,
                sets: 5})
                back_ex_five = WorkoutExercise.create(
                    {workout: back,
                    exercise: reverse_flys,
                    duration: 10,
                    sets: 4})
   
core_ex_one = WorkoutExercise.create(
    {workout: core,
    exercise: planks,
    duration: 30,
    sets: 5})
    core_ex_two = WorkoutExercise.create(
        {workout: core,
        exercise: cable_crunches,
        duration: 10,
        sets: 5})
        core_ex_three = WorkoutExercise.create(
            {workout: core,
            exercise: russian_twist,
            duration: 20,
            sets: 4})
            core_ex_four = WorkoutExercise.create(
                {workout: core,
                exercise: knee_tucks,
                duration: 10,
                sets: 4})  
    
    






# chest = WorkoutExercise.create(
#     {workout: chest, exercise: incline_press, flys, dips, duration: 8-12, sets: 4}
# )