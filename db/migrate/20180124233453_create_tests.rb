class CreateTests < ActiveRecord::Migration[5.1]
  def change
    create_table :tests do |t|
      t.text :text
      t.integer :application_id, null: false
      t.timestamps
    end
    add_index :tests, :application_id
  end
end
