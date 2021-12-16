class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :city, :address, :zip, :difficulty, :picture, :hiker_id

  belongs_to :hiker
end
