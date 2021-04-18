# bundle exec rails g model Estado sigla:string nome:string: 

class CreateEstados < ActiveRecord::Migration[5.0]
  
  def up
    create_table :estados do |t|
      t.string :sigla
      t.string :nome

      t.timestamps
    end
  end

  def down
  	
  end
end
