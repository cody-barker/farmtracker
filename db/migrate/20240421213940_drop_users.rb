class DropUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :users do |t|
      t.string "username", null: false
      t.string "city", null: false
      t.string "state", null: false
      t.string "profile_image", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.string "password_digest", null: false
    end
  end
end
