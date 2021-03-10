class TutorialController < ApplicationController

	def index
		render file: "#{Rails.root}/app/views/tutorial/tutorial.html.erb"
	end
end
