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

		 

		@workshops = Workshop.where(user_id:current_user.id)

		puts @workshops.inspect

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

	def remove_workshops

		status = ''

		if params[:workshop_id].present?

			workshop = Workshop.where(id:params[:workshop_id]).first

			if (workshop.present?)

				if (workshop.user_id == current_user.id)

					workshop.destroy

					if workshop.save

						status = 'success'


					else
						
						status = 'destroy_error'

					end

				else

					status = 'no_permission_remove_workshop'

					
				end

			else

				status = 'missing_workshop'


			end

		else

			status = 'missing_parameters'

		end

		data = { status: status }

		respond_with(data)		

	end

	def get_workshop_statistics

		status        = ''
		workshop_json = ''

		if params[:workshop_id].present?

			workshop = Workshop.where(id:params[:workshop_id]).first

			if (workshop.present?)

				if (workshop.user_id == current_user.id)

					workshop_json = workshop
					status        = 'success'


				else

					status = 'no_permission_remove_workshop'

					
				end

			else

				status = 'missing_workshop'


			end

		else

			status = 'missing_parameters'

		end

		data = { status: status, workshop: workshop_json }

		respond_with(data)	
	end



end
