Rails.application.routes.draw do
  devise_for :users

    get '/', to: 'home#index'

    get '/home', to: 'home#index'

	get '/users/sign_in', to: 'home#index'
	get '/users/', to: 'home#index'

	root to: 'home#index'

	get '/introduction/', to: 'introduction#index'

	get '/tutorial/', to: 'tutorial#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
