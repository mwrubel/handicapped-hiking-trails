class Hiker < ApplicationRecord
    has_secure_password
    validates :username, :password, :password_confirmation, presence: true #, uniqueness: { scope: :username}

    has_many :trails
end
