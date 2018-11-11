# create all workouts
legs = Workout.create( title: "Tree Trunks", day: "Monday and Friday")
chest = Workout.create( title: "Square Chest", day: "Tuesday and Saturday")
back = Workout.create( title: "Cobra Back", day: "Wednesday and Sunday")
core = Workout.create( title: "Core Strength", day: "Monday, Wednesday, Friday")


# create all exercises
# legs

squat = Exercise.create( name: "Squats", primary_muscles: "Gluts, Quads", secondary_muscles: "Hamstrings, Adductors, Spinal Erectus, Abs", category: "Legs")
lunge = Exercise.create( name: "Lunges", primary_muscles: "Glutes, Quads", secondary_muscles: "Hamstrings, Adductors", category: "Legs")
leg_press = Exercise.create( name: "Leg Press", primary_muscles: "Quads", secondary_muscles: "Gluts, Hamstrings, Adductors", category: "Legs")
step_up = Exercise.create( name: "Step Up", primary_muscles:"Gluts, Quads", secondary_muscles:"Hamstrings", category:"legs")
leg_extension = Exercise.create( name: "Leg Extension", primary_muscles: "Quads", secondary_muscles: "Tibialis Anterior",  category: "Legs")
leg_curl = Exercise.create( name: "Prone Leg Curl", primary_muscles: "Hamstrings", secondary_muscles: "Gluts, Calves", category: "Legs")
good_morning = Exercise.create( name:"Good Morning", primary_muscles:"Erectus Spinae", secondary_muscles: "Lats, Gluts, Hamstrings", category: "Legs")
hip_adduction = Exercise.create( name:"Hip Adduction", primary_muscles:"Adductors", secondary_muscles: "", category: "Legs")
hip_abduction = Exercise.create( name:"Hip Abduction", primary_muscles:"Abductors", secondary_muscles: "Gluts", category: "Legs")
Standing_calf_raise = Exercise.create( name:"Standing Calf Raise", primary_muscles:"Gastrocnemius", secondary_muscles: "Soleus", category: "Legs")
seated_calf_raise = Exercise.create( name:"Seated Calf Raise", primary_muscles:"Soleus", secondary_muscles: "Gastrocnemius", category: "Legs")


# chest

incline_dumbbell_press = Exercise.create( name: "Dumbbell Incline Press", primary_muscles: "Upper Pectoralis Major", secondary_muscles: "Anterior Deltiod, Triceps",  category: "Chest")
incline_barbell_press = Exercise.create( name: "Barbell Incline Press", primary_muscles: "Upper Pectoralis Major", secondary_muscles: "Anterior Deltiod, Triceps",  category: "Chest")
barbell_bench_press = Exercise.create( name: "Bench Press", primary_muscles: "Pectoralis Major", secondary_muscles: "Anterior Deltoid, Triceps", category: "Chest")
dumbbell_bench_press = Exercise.create( name: "Dumbbell Bench Press", primary_muscles: "Pectoralis Major", secondary_muscles: "Anterior Deltoid, Triceps",  category: "Chest")
decline_barbell_press = Exercise.create( name: "Decline Barbell Press", primary_muscles: "Lower Pectoralis Major", secondary_muscles: "Triceps, Anterior Deltoid",  category: "Chest")
decline_dumbbell_press = Exercise.create( name: "Decline Dumbbell Press", primary_muscles: "Lower Pectoralis Major", secondary_muscles: "Triceps, Anterior Deltoid",  category: "Chest")
dips = Exercise.create( name: "Dips", primary_muscles: "Lower Pectoralis", secondary_muscles: "Tricpes, Anterior Deltoid",  category: "Chest")
dumbbell_fly = Exercise.create( name: "Dumbbell Flys", primary_muscles: "Pectoralis Major", secondary_muscles: "Anterior Deltoid",  category: "Chest")
cable_crossover = Exercise.create( name:"Cable Crossover", primary_muscles:"Pectoralis Major", secondary_muscles: "Anterior Deltoid",  category: "Chest")
pullover = Exercise.create( name:"Dumbbell Pullover", primary_muscles:"Serratus Anterior, Lats", secondary_muscles: "Triceps, Pectorals",  category: "Chest")

# back

deadlift = Exercise.create( name: "Deadlift", primary_muscles: "Ercetor Spinae, Gluts, Hamstrings", secondary_muscles: "Trapezius, Lats, Quads, forearms",  category: "Back")
pull_up = Exercise.create( name: "Pull", primary_muscles: "Lats (outer)", secondary_muscles: "Lower Trapezius, Phomboids",  category: "Back")
wide_pull_down = Exercise.create( name: "Wide-Grip Pulldown", primary_muscles: "Lats (outer)", secondary_muscles: "Posterior Deltoids, Lower Trapezius, Rhomboids",  category: "Back")
reverse_pulldowns = Exercise.create( name:"Close-Grip Reverse Pulldown", primary_muscles:"Lats (inner)", secondary_muscles:"Lower Trapezius, Rhomboids, Posterior Deltoids, Biceps", category: "Back")
seated_row = Exercise.create( name: "Seated Row", primary_muscles: "Trapezius (middle and lower), Lats", secondary_muscles: "Rhomboids, Posterior Deltoids",  category: "Back")
Barbell_row = Exercise.create( name:"Bent Barbell Row", primary_muscles: "Lats", secondary_muscles: "Erectus Spinae, Trapezius, Rhomboids, Posterior Deltoids")
one_arm_dumbbell_row = Exercise.create( name:"Single Arm Dumbbell Row", primary_muscles:"Lats", secondary_muscles: "Trapezius, Rhomboids, Posterior Deltoids, Erector Spinae, Biceps",  category: "Back")
barbell_shrug = Exercise.create( name: "Barbell Shrug", primary_muscles: "Trapezius (upper and middle)", secondary_muscles: "Levator Scapulae, Deltoids, Erector Spinae",  category: "Back")
landmine = Exercise.create( name:"Landmine", primary_muscles:"Erector Spinae, Gluts, Trapezius (lower)", secondary_muscles: "Rhomboids, Lats",  category: "Back")
back_extension = Exercise.create( name:"Back Extension", primary_muscles:"Ercetor Spinae", secondary_muscles: "Lats, Gluts, Hamstrings",  category: "Back")

#arms

barbell_curl = Exercise.create( name:"Barbell Curl", primary_muscles: "Biceps", secondary_muscles: "Forearms",  category: "Arms")
dumbell_curl = Exercise.create( name:"Dumbell Curl", primary_muscles: "Biceps", secondary_muscles: "Forearms",  category: "Arms")
wide_grip_curl = Exercise.create( name:"Wide-grip Curl", primary_muscles: "Inner Biceps", secondary_muscles: "Forearms",  category: "Arms")
narrow_grip_curl = Exercise.create( name:"Narrow-grip Curl", primary_muscles: "Outer Biceps", secondary_muscles: "Forearms",  category: "Arms")
hammer_curl = Exercise.create( name:"Hammer Curl", primary_muscles:"Brachioradialis", secondary_muscles:"Brachialis, Forearm Extensors, Biceps")
wrist_curl = Exercise.create( name:"Wrist Curl", primary_muscles: "Forearm Flexors", secondary_muscles: "Finger Flexors",  category: "Arms")
reverse_wrist_curl = Exercise.create( name:"Reverse Wrist Curl", primary_muscles: "Forearm Extensors", secondary_muscles: "Finger Extensors and Flexors",  category: "Arms")
tricep_pushdown = Exercise.create( name: "Cable Pushdown", primary_muscles:"Triceps", secondary_muscles: "Deltoids, Forearms",  category: "Arms")
reverse_grip_pushdown = Exercise.create( name: "Reverse Pushdown", primary_muscles: "Triceps (inner head)", secondary_muscles: "Deltiods, Forearms",  category: "Arms")
skull_crusher = Exercise.create( name: "Skull Crusher", primary_muscles: "Triceps", secondary_muscles: "Chest, Deltoids, Forearms", category: "Arms")
cable_kickback = Exercise.create( name:"Cable Kickback", primary_muscles: "Triceps", secondary_muscles: "Posterior Deltoids, Lats",  category: "Arms")

# shoulders

barbell_military = Exercise.create( name:"Military Press", primary_muscles:"Anterior Deltoid", secondary_muscles: "Lateral Deltoid, Triceps, Trapezius, Upper Pectoralis",  category: "Shoulders")
dumbbell_press = Exercise.create( name:"Dumbbell Press", primary_muscles:"Anterior Deltoid", secondary_muscles: "Lateral Deltoid, Triceps, Trapezius, Upper Pectoralis",  category: "Shoulders")
arnold_press = Exercise.create( name:"Arnold Presses", primary_muscles:"Anterior Deltiod, Lateral Deltoids,", secondary_muscles: "Posterior Deltoid, Triceps, Trapezius, Rhomboids, Teres Minor, Teres Major",  category: "Shoulders")
bentover_lateral_raise = Exercise.create( name:"Bentover Lateral Raise", primary_muscles:"Posterior Deltoid", secondary_muscles: "Lateral Deltoid, Trapezius, Rhomboids, Infraspinatus, Teres Minor, Teres Major",  category: "Shoulders")
lateral_dumbbell_raise = Exercise.create( name:"Lateral Dumbbell Raise", primary_muscles:"Lateral Deltoid", secondary_muscles: "Anterior Deltoid, Posterior Deltoid, Trapezius",  category: "Shoulders")
dumbbell_front_raise = Exercise.create( name:"Dumbbell Front Raise", primary_muscles:"Anterior Deltoid", secondary_muscles: "Upper Pectoralis, Trapezius",  category: "Shoulders")
upright_row = Exercise.create( name:"Upright Rows", primary_muscles:"Lateral Deltiod, Trapezius", secondary_muscles: "Anterior Deltoid, Supraspinatus, Infraspinatus, Teres Minor",  category: "Shoulders")
reverse_cable_crossover = Exercise.create( name:"Reverse Cable Crossover", primary_muscles:"Posterior Deltiod", secondary_muscles: "Lateral Deltoids, Trapezius, Rhomboids, Infraspinatus, Teres Minor, Teres Major",  category: "Shoulders")
external_rotation = Exercise.create(name:"External Rotation", primary_muscles:"Infraspinatus, Teres Minor", secondary_muscles:"Rear Deltoids", category:"shoulders")
internal_rotation = Exercise.create(name:"Internal Rotation", primary_muscles:"Subscapularis", secondary_muscles:"Pectoralis Major", category:"shoulders")

# core

planks = Exercise.create( name: "Planks", primary_muscles: "Abdominis", secondary_muscles: "")
rope_crunch = Exercise.create( name: "Rope Crunch", primary_muscles:"Rectus Abdominis", secondary_muscles:"Obliques, Serratus Anterior")
crunch = Exercise.create( name: "Crunch", primary_muscles: "Upper Abdominis", secondary_muscles: "Obliques",  category: "Core")
russian_twist = Exercise.create( name: "Russian Twist", primary_muscles: "Abdominis, Obliques", secondary_muscles: "Serratus Anterior, Hip Flexors",  category: "Core")
hanging_leg_raise = Exercise.create( name: "Hanging Leg Raise", primary_muscles: "Abdominis", secondary_muscles: "Obliques, Hip Flexors",  category: "Core")
incline_leg_raise = Exercise.create( name:"Incline Leg Raise", primary_muscles:"Lower Abdominis", secondary_muscles: "Obliques, Hip Flexors",  category: "Core")
dumbbell_side_bend = Exercise.create( name:"Dumbbell Side Bend", primary_muscles:"Obliques, Serratus Anterior", secondary_muscles: "Abdominis, ",  category: "Core")



# create all joins
leg_ex_one = WorkoutExercise.create(
    {workout: legs,
    exercise: squat,
    duration: 10,
    sets: 4})
leg_ex_two = WorkoutExercise.create(
    {workout: legs,
    exercise: step_up,
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
leg_ex_five = WorkoutExercise.create(
    {workout: legs,
    exercise: hip_abduction,
    duration: 10,
    sets: 3})
leg_ex_six = WorkoutExercise.create(
        {workout: legs,
        exercise: seated_calf_raise,
        duration: 20,
        sets: 4})


chest_ex_one = WorkoutExercise.create(
    {workout: chest,
    exercise: incline_dumbbell_press,
    duration: 10,
    sets: 5})
    
chest_ex_two = WorkoutExercise.create(
        {workout: chest,
        exercise: dips,
        duration: 10,
        sets: 4})

chest_ex_three = WorkoutExercise.create(
    {workout: chest,
    exercise: barbell_bench_press,
    duration: 10,
    sets: 4})

chest_ex_four = WorkoutExercise.create(
    {workout: chest,
    exercise: cable_crossover,
    duration: 10,
    sets: 4})

chest_ex_five = WorkoutExercise.create(
    {workout: chest,
    exercise: pullover,
    duration: 10,
    sets: 3})

chest_ex_six = WorkoutExercise.create(
    {workout: chest,
    exercise: tricep_pushdown,
    duration: 10,
    sets: 3})

back_ex_one = WorkoutExercise.create(
    {workout: back,
    exercise: deadlift,
    duration: 10,
    sets: 4})
back_ex_two = WorkoutExercise.create(
        {workout: back,
        exercise: pull_up,
        duration: 10,
        sets: 4})
back_ex_three = WorkoutExercise.create(
            {workout: back,
            exercise: seated_row,
            duration: 10,
            sets: 4})
back_ex_four = WorkoutExercise.create(
                {workout: back,
                exercise: reverse_pulldowns,
                duration: 10,
                sets: 4})
back_ex_five = WorkoutExercise.create(
                    {workout: back,
                    exercise: reverse_cable_crossover,
                    duration: 10,
                    sets: 4})
chest_ex_six = WorkoutExercise.create(
                        {workout: back,
                        exercise: barbell_curl,
                        duration: 10,
                        sets: 3})
   
core_ex_one = WorkoutExercise.create(
    {workout: core,
    exercise: planks,
    duration: 30,
    sets: 5})
core_ex_two = WorkoutExercise.create(
        {workout: core,
        exercise: rope_crunch,
        duration: 10,
        sets: 5})
core_ex_three = WorkoutExercise.create(
            {workout: core,
            exercise: russian_twist,
            duration: 20,
            sets: 4})
core_ex_four = WorkoutExercise.create(
                {workout: core,
                exercise: incline_leg_raise,
                duration: 10,
                sets: 4})
chest_ex_five = WorkoutExercise.create(
                    {workout: core,
                    exercise: dumbbell_side_bend,
                    duration: 10,
                    sets: 4})
