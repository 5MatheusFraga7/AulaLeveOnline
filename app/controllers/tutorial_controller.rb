class TutorialController < ApplicationController

	def index

		@videos = ['a', 'b', 'c']

		render file: "#{Rails.root}/app/views/tutorial/tutorial.html.erb"
	end
end
