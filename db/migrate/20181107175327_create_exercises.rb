class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :muscles
      t.string :photo_url

      t.timestamps
    end
  end
end
