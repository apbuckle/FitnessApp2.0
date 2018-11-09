class Workout < ApplicationRecord
    has_many :workout_exercise, dependent: :destroy
    has_many :exercises, through: :workout_exercise
    # def exercises 
    #     workouts.where('exercises')

    # end

end
