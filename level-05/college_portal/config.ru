# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

run Rails.application
root to: "static_pages#index"
resources :departments, only: [:index, :create, :new]
resources :section, only: [:index]
resources :section, only: [:index, :new, :create]