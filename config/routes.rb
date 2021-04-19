Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/painel', as: 'rails_admin'
  devise_for :users

  	root to: 'home#index'

    get '/', to: 'home#index'

    get '/home', to: 'home#index'

	get '/users/sign_in', to: 'home#index'
	get '/users/', to: 'home#index'


	get '/introduction/', to: 'introduction#index'

	get '/tutorial/', to: 'tutorial#index'

	get '/workshops/',        to: 'workshops#index'
	get '/create_workshops/', to: 'workshops#show'
	get '/list_workshops/',   to: 'workshops#list_workshops'

	get 'workshops/create',  to: 'workshops#create_workshops'
	get 'workshops/remove',  to: 'workshops#remove_workshops'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
