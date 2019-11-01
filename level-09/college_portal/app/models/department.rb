class Department < ApplicationRecord
has_many :sections, dependent: :destroy
has_many :students, dependent: :destroy
validates :name, presence: true, uniqueness: true

before_save :to_upper
def to_upper
    self.name = self.name.upcase
end
end
