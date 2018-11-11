class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :primary_muscles
      t.string :secondary_muscles
      t.string :photo_url
      t.string :category
      t.timestamps
    end
  end
end
