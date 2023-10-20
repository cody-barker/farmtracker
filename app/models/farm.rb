class Farm < ApplicationRecord
    has_many :beds, :dependent => :delete_all
end
