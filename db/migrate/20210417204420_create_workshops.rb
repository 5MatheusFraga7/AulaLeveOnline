# bundle exec rails g model Workshop user:references observation:string institution:string types_institution:references evaluation_link:text estados:references ministry_at:timestamp 
class CreateWorkshops < ActiveRecord::Migration[5.0]
  def change
    create_table :workshops do |t|
      t.references :user, foreign_key: true
      t.string :observation
      t.string :institution
      t.references :types_institution, foreign_key: true
      t.text :evaluation_link
      t.references :estado, foreign_key: true
      t.timestamp :ministry_at

      t.timestamps
    end
  end
end
