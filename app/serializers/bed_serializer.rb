class BedSerializer < ActiveModel::Serializer
  attributes :id, :sq_ft, :crop, :planting_date, :harvest_date, :farm_id, :dtm
end
