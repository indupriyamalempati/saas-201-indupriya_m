class Department < ApplicationRecord
    # associations
    has_many :sections, dependent: :destroy
    has_many :students, dependent: :destroy
  
    # validations
    validates :name, presence: true, uniqueness: true
  end











