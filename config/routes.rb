Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'hikers#create'
  get '/me', to: 'hikers#show'
  get '/trails', to: 'trails#index'
  post '/trails', to: 'trails#create'
  patch '/trails', to: 'trails#update'
  delete '/trails', to: 'trails#destroy' 
  resources :hikers, :trails

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
