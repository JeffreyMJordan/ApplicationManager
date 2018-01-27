# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Example User", password: "password")
User.create(username: "Admin", password: "password", admin: true)

Application.create(first_name: "Example", last_name: "User", zip: "94526", user_id: 1, email: "example@email.com")
Test.create(text: "Sample text", application_id: 1)