class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.integer :age
      t.string :level
      t.string :activities
      t.integer :bench
      t.integer :squat
      t.integer :deadlift
      t.integer :five_mile
      t.integer :ten_mile

      t.timestamps
    end
  end
end
