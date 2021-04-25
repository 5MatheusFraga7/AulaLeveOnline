class EvaluationWorkshopController < ApplicationController

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
end
