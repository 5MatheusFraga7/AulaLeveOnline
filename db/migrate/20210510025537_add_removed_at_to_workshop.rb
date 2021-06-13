# bundle exec rails g migration AddRemovedAtToWorkshop removed_at:timestamp
class AddRemovedAtToWorkshop < ActiveRecord::Migration[5.0]
  def change
    add_column :workshops, :removed_at, :timestamp
  end
end
