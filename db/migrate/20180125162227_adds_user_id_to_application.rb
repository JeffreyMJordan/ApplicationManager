class AddsUserIdToApplication < ActiveRecord::Migration[5.1]
  def change
    add_column :applications, :user_id, :integer, null: false
  end
end
