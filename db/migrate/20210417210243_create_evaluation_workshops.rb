class CreateEvaluationWorkshops < ActiveRecord::Migration[5.0]
  def change
    create_table :evaluation_workshops do |t|
      t.references :workshop, foreign_key: true
      t.integer :note
      t.text :user_email
      t.text :user_name
      t.text :comment

      t.timestamps
    end
  end
end
