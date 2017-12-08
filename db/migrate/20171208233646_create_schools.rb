class CreateSchools < ActiveRecord::Migration[5.1]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :conference
      t.integer :wins
      t.integer :losses

      t.timestamps
    end
  end
end
