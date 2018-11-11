# create all workouts
legs = Workout.create( title: "Tree Trunks", day: "Monday and Friday")
chest = Workout.create( title: "Square Chest", day: "Tuesday and Saturday")
back = Workout.create( title: "Cobra Back", day: "Wednesday and Sunday")
core = Workout.create( title: "Core Strength", day: "Monday, Wednesday, Friday")


# create all exercises
# legs

squats = Exercise.create( name: "Squats", muscles: "Glutes, Quads, Hamstrings", category: "Legs")
lunges = Exercise.create( name: "Lunges", muscles: "Glutes, Quads, Hamstrings", category: "Legs")
leg_press = Exercise.create( name: "Leg Press", muscles: "Glutes, Quads, Hamstrings", category: "Legs")
leg_extension = Exercise.create( name: "Leg Extension", muscles: "Quads", category: "Legs")
leg_curl = Exercise.create( name: "Prone Leg Curl", muscles: "Hamstrings, Glutes, Calves", category: "Legs")
good_mornings = Exercise.create( name:"Good Mornings", muscles:"", category: "Legs")
hip_adduction = Exercise.create( name:"Hip Adduction", muscles:"", category: "Legs")
hip_abduction = Exercise.create( name:"Hip Abduction", muscles:"", category: "Legs")
calf_raises = Exercise.create( name:"Standing Calf Raises", muscles:"", category: "Legs")
seated_calf_raises = Exercise.create( name:"Seated Calf Raises", muscles:"", category: "Legs")


# chest

incline_press = Exercise.create( name: "Dumbbell Incline Press", muscles: "Upper Pectorial, Anterior Deltiod, Triceps", category: "Chest")
bench_press = Exercise.create( name: "Flat Bench Press", muscles: "Pectorial Major and Minor, Anterior Deltoid, Triceps", category: "Chest")
decline_press = Exercise.create( name: "Decline Bench Press", muscles: "Lower Pectorial, Triceps", category: "Chest")
pushups = Exercise.create( name: "Pushups", muscles:"", category: "Chest")
dips = Exercise.create( name: "Dips", muscles: "Lower Pectorial, Triceps", category: "Chest")
flys = Exercise.create( name: "Dumbbell Flys",muscles: "Pectorial Major", category: "Chest")
cable_crossovers = Exercise.create( name:"Cable Crossover Flys", muscles:"", category: "Chest")
pullovers = Exercise.create( name:"Dumbbell Pullovers", muscles:"", category: "Chest")

# back

deadlifts = Exercise.create( name: "Deadlift", muscles: "", category: "Back")
pull_ups = Exercise.create( name: "Pull Ups", muscles: "", category: "Back")
late_pull_downs = Exercise.create( name: "Pull Downs", muscles: "", category: "Back")
seated_rows = Exercise.create( name: "Seated Rows", muscles: "", category: "Back")
one_arm_dumbbell_rows = Exercise.create( name:"Single Arm Bentover Rows", muscles:"", category: "Back")
reverse_flys = Exercise.create( name: "Reverse Flys", muscles: "", category: "Back")
shrugs = Exercise.create( name: "Barbell Shrugs", muscles: "", category: "Back")
landmines = Exercise.create( name:"Landmines", muscles:"", category: "Back")
back_extensions = Exercise.create( name:"Back Extensions", muscles:"", category: "Back")

#arms

barbell_curl = Exercise.create( name:"Barbell Curls", muscles: "", category: "Arms")
dumbell_curl = Exercise.create( name:"Dumbell Curls", muscles: "", category: "Arms")
reverse_curl = Exercise.create( name:"Reverse Curls", muscles: "", category: "Arms")
wrist_curl = Exercise.create( name:"Wrist Curls", muscles: "", category: "Arms")
reverse_wrist_curls = Exercise.create( name:"Reverse Wrist Curls", muscles: "", category: "Arms")
push_downs = Exercise.create( name: "Cable Push Downs", muscles:"", category: "Arms")
reverse_push_downs = Exercise.create( name: "Reverse Push Downs", muscles: "", category: "Arms")
triceps_extensions = Exercise.create( name: "Tricep Extensions", muscles: "", category: "Arms")
kickbacks = Exercise.create( name:"Triceps Kickbacks", muscles: "", category: "Arms")

# shoulders

barbell_military = Exercise.create( name:"Military Press", muscles:"", category: "Shoulders")
dumbbell_presses = Exercise.create( name:"Dumbbell Press", muscles:"", category: "Shoulders")
arnold_presses = Exercise.create( name:"Arnold Presses", muscles:"", category: "Shoulders")
bentover_lateral_raises = Exercise.create( name:"Bentover Lateral Raises", muscles:"", category: "Shoulders")
lateral_dumbbell_raises = Exercise.create( name:"Lateral Dumbbell Raises", muscles:"", category: "Shoulders")
front_arm_raises = Exercise.create( name:"Front Dumbbell Raises", muscles:"", category: "Shoulders")
upright_rows = Exercise.create( name:"Upright Rows", muscles:"", category: "Shoulders")
rear_flys = Exercise.create( name:"Rear Delt Flys", muscles:"", category: "Shoulders")


# core

planks = Exercise.create( name: "Planks", muscles: "")
cable_crunches = Exercise.create( name: "Cable Rope Crunches", muscles: "", category: "Core")
russian_twist = Exercise.create( name: "Russian Twist", muscles: "", category: "Core")
knee_tucks = Exercise.create( name: "Hanging Knee Tucks", muscles: "", category: "Core")
incline_leg_raises = Exercise.create( name:"Incline Leg Raises", muscles:"", category: "Core")
dumbbell_side_bends = Exercise.create( name:"Dumbbell Side Bends", muscles:"", category: "Core")

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
            exercise: seated_rows,
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