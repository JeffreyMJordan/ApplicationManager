class CreateApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :applications do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false 
      t.string :zip, null: false
      t.timestamps
    end
    add_index :applications, :first_name
    add_index :applications, :last_name
    add_index :applications, :email, unique: true
  end
end