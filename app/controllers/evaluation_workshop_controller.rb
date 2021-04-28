class EvaluationWorkshopController < ApplicationController
	respond_to :html, :json, :xml

	def index 

		workshop_hash = params[:workshop]

		if (workshop_hash.present?)

			@workshop = (Workshop.exists?(hash_evaluation: workshop_hash.to_s) ? Workshop.where(hash_evaluation: workshop_hash).first : nil)
			
			if (@workshop.present?)

				render file: "#{Rails.root}/app/views/evaluation_workshop/form_evaluation.html.erb"

			else

				render file: "#{Rails.root}/app/views/evaluation_workshop/no_form_evaluation_exists.html.erb"
				
			end

		else

			render file: "#{Rails.root}/app/views/evaluation_workshop/no_form_evaluation_exists.html.erb"
		
		end

	end

	def create_evaluation

		student_observation = params[:student_observation]
		workshop_hash       = params[:workshop_hash]
		student_name        = params[:student_name]
		student_email       = params[:student_email]
		note_for_workshop   = params[:note_for_workshop]

		if (workshop_hash.present? && student_name.present? && student_email.present? )
			
			workshop = Workshop.where(hash_evaluation:workshop_hash).select('id').first

			if workshop.present?

				evaluation = EvaluationWorkshop.new 

				evaluation.workshop_id = workshop.id
				evaluation.user_email  = student_email
				evaluation.note        = note_for_workshop
				evaluation.user_name   = student_name
				evaluation.comment     = student_observation

				if evaluation.save

					data = { status: 'success'}

					respond_with(data)

				else

					data = { status: 'saving_error'}

					respond_with(data)
				end
				
			else

				data = { status: 'missing_workshop'}

				respond_with(data)			

			end

		else	

			data = { status: 'missing_parameters'}

			respond_with(data)

		end

	end
end
