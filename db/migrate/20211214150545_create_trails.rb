class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :trail_name
      t.string :city
      t.string :address
      t.integer :zip
      t.integer :difficulty
      t.string :picture
      t.integer :hiker_id

      t.timestamps
    end
  end
end
