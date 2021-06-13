class CreateVideoTutorials < ActiveRecord::Migration[5.0]
  def up
    create_table :video_tutorials do |t|
      t.string :code
      t.string :title
      t.string :video_url
      t.boolean :active

      t.timestamps
    end
  end

  def down 
  end
end
