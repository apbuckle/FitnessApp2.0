class Workout < ApplicationRecord
    has_many :workout_exercise, dependent: :destroy

    def exercises 
        workouts.where('exercises')

    end

end
