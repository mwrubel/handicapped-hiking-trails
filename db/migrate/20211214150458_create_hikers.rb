class CreateHikers < ActiveRecord::Migration[6.1]
  def change
    create_table :hikers do |t|
      t.string :username
      t.string :password_digest
      t.integer :zipcode

      t.timestamps
    end
  end
end
