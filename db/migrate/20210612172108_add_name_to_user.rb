# rails g migration AddNameToUser
# Feito manualmente
class AddNameToUser < ActiveRecord::Migration[5.0]
  def up
     add_column :users, :name, :string 	
  end

  def down 
  end
end
