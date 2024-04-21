class DropReviews < ActiveRecord::Migration[6.1]
  def change
    drop_table :reviews do |t|
      t.integer "user_id", null: false
      t.integer "trail_id", null: false
      t.date "date", null: false
      t.integer "trail_rating", null: false
      t.string "condition", null: false
      t.string "content", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
