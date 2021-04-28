class EvaluationWorkshop < ApplicationRecord
  belongs_to :workshop

  after_create :update_note_for_workshop

  def update_note_for_workshop

		evaluations = EvaluationWorkshop.where(workshop_id:self.workshop.id).all

		final_note = 0

		evaluations.each do |evaluation|
			final_note += evaluation.note
		end

		self.workshop.note = (final_note/evaluations.count).ceil(2) 
		self.workshop.save

  end

end
