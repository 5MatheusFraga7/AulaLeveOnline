# bundle exec rails g migration AddHashEvaluationToWorkshop hash_evaluation:text
class AddHashEvaluationToWorkshop < ActiveRecord::Migration[5.0]
  def change
    add_column :workshops, :hash_evaluation, :text
  end
end
