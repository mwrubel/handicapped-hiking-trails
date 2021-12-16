class Trail < ApplicationRecord
    validates :trail_name, :city, :address, :zip, :difficulty, :picture, presence: true

    belongs_to :hiker
end
