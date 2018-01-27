class AddsSubmittedToTest < ActiveRecord::Migration[5.1]
  def change
    add_column :tests, :submitted, :boolean
  end
end
