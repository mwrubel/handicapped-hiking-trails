class Hiker < ApplicationRecord
    has_secure_password
    validates :username, :password, :password_confirmation, presence: true

    has_many :trails
end
