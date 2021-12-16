class HikerSerializer < ActiveModel::Serializer
  attributes :id, :username, :zipcode

  has_many :trails
end
