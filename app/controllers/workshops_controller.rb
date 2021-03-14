class WorkshopsController < ApplicationController

	def index
		
	end

	def show

		render file: "#{Rails.root}/app/views/workshops/create_workshops.html.erb"
		
	end	

	def list_workshops

		render file: "#{Rails.root}/app/views/workshops/list_workshops.html.erb"

	end
end
