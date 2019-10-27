Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: "static_pages#index"
resources :sections, only: [:index, :new, :create]
resources :students, only: [:index, :new, :create, :show]
resources :departments, only: [:index, :create, :new]
end
