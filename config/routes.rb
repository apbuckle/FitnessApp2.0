Rails.application.routes.draw do
  namespace :api do
    resources :workouts do
      resources :workout_exercises
  end
  resources :exercises

end
end
