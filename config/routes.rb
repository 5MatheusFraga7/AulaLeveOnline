Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/painel', as: 'rails_admin'
  devise_for :users

  	root to: 'home#index'

  	# User Routes

    get '/', to: 'home#index'
    get '/home', to: 'home#index'
	get '/users/sign_in', to: 'home#index'
	get '/users/', to: 'home#index'
	get '/edit_user', to: 'edit_user#index'
	get 'edit_user/update',  to: 'edit_user#update'


  	# Main Routes - Worshops - Tutorial

	get '/introduction/', to: 'introduction#index'
	get '/tutorial/', to: 'tutorial#index'

  	# Worshops Routes - create/edit/show

	get '/workshops/',        to: 'workshops#index'
	get '/create_workshops/', to: 'workshops#show'
	get '/list_workshops/',   to: 'workshops#list_workshops'

	get 'workshops/create',  to: 'workshops#create_workshops'
	get 'workshops/remove',  to: 'workshops#remove_workshops'

	get 'workshops/get_workshop_statistics',  to: 'workshops#get_workshop_statistics'

	get '/evaluation/:workshop',  to: 'evaluation_workshop#index'
	get 'evaluation/evaluation/create',  to: 'evaluation_workshop#create_evaluation'

end
