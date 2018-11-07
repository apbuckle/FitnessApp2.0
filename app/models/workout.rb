class Workout < ApplicationRecord
    has_many :workout_exercise, dependent: :destroy
end
