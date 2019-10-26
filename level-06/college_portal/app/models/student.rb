class Student < ApplicationRecord
    # associations
    belongs_to :department
    belongs_to :section
  
    # validations
    validates :email, presence: true, uniqueness: true
  
    validate :validate_section_mapping
  
    private
  
    def validate_section_mapping
      section = Section.find_by_id(section_id)
  
      if section.department_id != department_id
        errors.add(:section, "Selected section doesn't belongs to selected department")
      end
    end
  end














