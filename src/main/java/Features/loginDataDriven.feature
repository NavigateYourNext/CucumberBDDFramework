Feature: Amazon Login Feature
Scenario: Amazon Login Test Scenario

Given User is already on Login Page
When Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
#Test Data Table
Then User enters username and User enters password
|akshayshete10024@gmail.com|Joker#100|
Then User clicks on Login button
Then User is on home page
Then User LogOut the application