class Exercise < ApplicationRecord
    has_many :workout_exercises, dependent: :destroy
end
