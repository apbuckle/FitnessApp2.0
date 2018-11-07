class Exercise < ApplicationRecord
    has_many :workout, dependent: :destroy
end
