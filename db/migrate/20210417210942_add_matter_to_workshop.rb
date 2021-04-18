class AddMatterToWorkshop < ActiveRecord::Migration[5.0]
  def change
    add_column :workshops, :matter, :string
  end
end
