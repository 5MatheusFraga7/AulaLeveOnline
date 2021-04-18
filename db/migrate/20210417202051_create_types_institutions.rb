# bundle exec rails g model TypesInstitution code:string title:string removed_at:timestamp
class CreateTypesInstitutions < ActiveRecord::Migration[5.0]

  def up
    create_table :types_institutions do |t|
      t.string :code
      t.string :title
      t.timestamp :removed_at

      t.timestamps
    end
  end

  def down 
  end
end
