class Test < ApplicationRecord
  belongs_to :application,
    primary_key: :id,
    foreign_key: :application_id,
    class_name: 'Application'

  end
