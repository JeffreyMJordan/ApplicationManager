Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :applications, only: [:create, :show, :index, :update]
    get 'app_by_user_id', to: 'applications#by_user_id'
    resources :tests, only: [:create, :show]
  end 

  root 'static_pages#root'
end
