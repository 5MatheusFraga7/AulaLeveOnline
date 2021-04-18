class Workshop < ApplicationRecord
  belongs_to :user
  belongs_to :types_institution
  belongs_to :estado
end
