# bundle exec rails g migration AddNoteToWorkshop note:decimal
class AddNoteToWorkshop < ActiveRecord::Migration[5.0]
  def change
    add_column :workshops, :note, :decimal
  end
end
