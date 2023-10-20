class FarmSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state
  has_many :beds
end
