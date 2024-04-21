class DropTrails < ActiveRecord::Migration[6.1]
  def change
    drop_table :trails do |t|
      t.string "name", null: false
      t.string "difficulty", null: false
      t.float "length", null: false
      t.string "description", null: false
      t.string "dogs_allowed", null: false
      t.string "family_friendly", null: false
      t.string "trailhead_coordinates", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.string "photo", null: false
    end
  end
end
