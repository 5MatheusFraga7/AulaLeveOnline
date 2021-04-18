class WorkshopsController < ApplicationController
	respond_to :html, :json, :xml

	def index
		
	end

	def show

		render file: "#{Rails.root}/app/views/workshops/create_workshops.html.erb"
		
	end	

	def list_workshops

		render file: "#{Rails.root}/app/views/workshops/list_workshops.html.erb"

	end


	def create_workshops

		status = ''

		if (params[:title].present? && params[:date].present?)

			status = 'success'
		else

			status = 'success'
		end

		data = { status: status }

		respond_with(data)

	end	
	
end
