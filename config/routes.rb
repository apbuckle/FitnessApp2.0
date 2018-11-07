Rails.application.routes.draw do
  namespace :api do
    resources :workouts do
      resources :exercises
    end
  end
end
