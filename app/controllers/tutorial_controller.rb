class TutorialController < ApplicationController

	def index

		@videos = VideoTutorials.where(active: true)

		render file: "#{Rails.root}/app/views/tutorial/tutorial.html.erb"
	end
end
