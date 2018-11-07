class Workout < ApplicationRecord
    has_many :exercise, dependent: :destroy
end
