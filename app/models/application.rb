class Application < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :zip, presence: true 


  has_many :tests, 
  primary_key: :id,
  foreign_key: :application_id,
  class_name: 'Test'

  belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id, 
    class_name: 'User'

end
