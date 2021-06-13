class EditUserController < ApplicationController
	respond_to :html, :json, :xml

	def index 
		
		render file: "#{Rails.root}/app/views/edit_user/index.html.erb"
	end

	def update 

		new_email = params[:input_email]
		new_name  = params[:input_name]

		if (new_email.present? && new_name.present?)

			current_user.update(:username => params[:input_name])
			current_user.update(:email => params[:input_email])

			data = { status: 'success'}
			respond_with(data)

		else	

			data = { status: 'missing_params'}
			respond_with(data)
		end

	end
end
