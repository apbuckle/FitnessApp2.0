# create all workouts
legs = Workout.create( title: "Tree Trunks", day: "Monday and Friday")
chest = Workout.create( title: "Square Chest", day: "Tuesday and Saturday")
back = Workout.create( title: "Cobra Back", day: "Wednesday and Sunday")
core = Workout.create( title: "Core Strength", day: "Monday, Wednesday, Friday")


# create all exercises
# legs

squats = Exercise.create( name: "Squats", muscles: "Glutes, Quads, Hamstrings")
lunges = Exercise.create( name: "Lunges", muscles: "Glutes, Quads, Hamstrings")
leg_press = Exercise.create( name: "Leg Press", muscles: "Glutes, Quads, Hamstrings")
leg_extension = Exercise.create( name: "Leg Extension", muscles: "Quads")
leg_curl = Exercise.create( name: "Prone Leg Curl", muscles: "Hamstrings, Glutes, Calves")
good_mornings = Exercise.create( name:"Good Mornings", muscles:"")
hip_adduction = Exercise.create( name:"Hip Adduction", muscles:"")
hip_abduction = Exercise.create( name:"Hip Abduction", muscles:"")
calf_raises = Exercise.create( name:"Standing Calf Raises", muscles:"")
seated_calf_raises = Exercise.create( name:"Seated Calf Raises", muscles:"")


# chest

incline_press = Exercise.create( name: "Dumbbell Incline Press", muscles: "Upper Pectorial, Anterior Deltiod, Triceps")
bench_press = Exercise.create( name: "Flat Bench Press", muscles: "Pectorial Major and Minor, Anterior Deltoid, Triceps")
decline_press = Exercise.create( name: "Decline Bench Press", muscles: "Lower Pectorial, Triceps")
pushups = Exercise.create( name: "Pushups", muscles:"")
dips = Exercise.create( name: "Dips", muscles: "Lower Pectorial, Triceps")
flys = Exercise.create( name: "Dumbbell Flys",muscles: "Pectorial Major")
cable_crossovers = Exercise.create( name:"Cable Crossover Flys", muscles:"")
pullovers = Exercise.create( name:"Dumbbell Pullovers", muscles:"")

# back

deadlifts = Exercise.create( name: "Deadlift", muscles: "")
pull_ups = Exercise.create( name: "Pull Ups", muscles: "")
late_pull_downs = Exercise.create( name: "Pull Downs", muscles: "")
seated_rows = Exercise.create( name: "Seated Rows", muscles: "")
one_arm_dumbbell_rows = Exercise.create( name:"Single Arm Bentover Rows", muscles:"")
reverse_flys = Exercise.create( name: "Reverse Flys", muscles: "")
shrugs = Exercise.create( name: "Barbell Shrugs", muscles: "")
landmines = Exercise.create( name:"Landmines", muscles:"")
back_extensions = Exercise.create( name:"Back Extensions", muscles:"")

#arms

barbell_curl = Exercise.create( name:"Barbell Curls", muscles: "")
dumbell_curl = Exercise.create( name:"Dumbell Curls", muscles: "")
reverse_curl = Exercise.create( name:"Reverse Curls", muscles: "")
wrist_curl = Exercise.create( name:"Wrist Curls", muscles: "")
reverse_wrist_curls = Exercise.create( name:"Reverse Wrist Curls", muscles: "")
push_downs = Exercise.create( name: "Cable Push Downs", muscles:"")
reverse_push_downs = Exercise.create( name: "Reverse Push Downs", muscles: "")
triceps_extensions = Exercise.create( name: "Tricep Extensions", muscles: "")
kickbacks = Exercise.create( name:"Triceps Kickbacks", muscles: "")

# shoulders

barbell_military = Exercise.create( name:"Military Press", muscles:"")
dumbbell_presses = Exercise.create( name:"Dumbbell Press", muscles:"")
arnold_presses = Exercise.create( name:"Arnold Presses", muscles:"")
bentover_lateral_raises = Exercise.create( name:"Bentover Lateral Raises", muscles:"")
lateral_dumbbell_raises = Exercise.create( name:"Lateral Dumbbell Raises", muscles:"")
front_arm_raises = Exercise.create( name:"Front Dumbbell Raises", muscles:"")
upright_rows = Exercise.create( name:"Upright Rows", muscles:"")
rear_flys = Exercise.create( name:"Rear Delt Flys", muscles:"")


# core

planks = Exercise.create( name: "Planks", muscles: "")
cable_crunches = Exercise.create( name: "Cable Rope Crunches", muscles: "")
russian_twist = Exercise.create( name: "Russian Twist", muscles: "")
knee_tucks = Exercise.create( name: "Hanging Knee Tucks", muscles: "")
incline_leg_raises = Exercise.create( name:"Incline Leg Raises", muscles:"")
dumbbell_side_bends = Exercise.create( name:"Dumbbell Side Bends", muscles:"")

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