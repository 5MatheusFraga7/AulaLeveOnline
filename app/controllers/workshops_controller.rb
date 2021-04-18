class WorkshopsController < ApplicationController
	respond_to :html, :json, :xml

	def index
		
	end

	def show

		@states 		   = Estado.all
		@types_institution = TypesInstitution.all

		render file: "#{Rails.root}/app/views/workshops/create_workshops.html.erb"
		
	end	

	def list_workshops

		render file: "#{Rails.root}/app/views/workshops/list_workshops.html.erb"

	end


	def create_workshops

		status = ''

		if (params[:observation].present? && params[:ministry_at].present? && params[:type_institution].present? && params[:matter].present? && params[:institution].present? && params[:state].present?)

			if (state_and_institution_type_are_present(params[:state], params[:type_institution]))
				
				workshop          = Workshop.new 
				workshop.user_id  = current_user.id

				workshop.observation          = params[:observation]
				workshop.ministry_at          = params[:ministry_at]
				workshop.types_institution_id = params[:type_institution]
				workshop.institution          = params[:institution]
				workshop.estado_id			  = params[:state]
				workshop.matter			      = params[:matter]

				if workshop.save

					status = 'success'

				else

					status = 'saving_error'

				end

			else

				status = 'missing_state_or_institution_parameters'

			end

		else

			status = 'missing_parameters'
		end

		puts current_user.id

		data = { status: status }

		respond_with(data)

	end	

	def state_and_institution_type_are_present(state, institution_type)

		if ((Estado.where(id:state).first.present?) && (TypesInstitution.where(id:institution_type).first.present?))

			true

		else

			false

		end

	end

end
