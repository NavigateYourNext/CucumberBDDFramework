Feature: Amazon Login Feature

#Without Examples Keyword

#Scenario: Amazon Login Test Scenario
#
#Given User is already on Login Page
#When Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
##Data Driven Testing
#Then User enters "akshayshete10024@gmail.com" as username and User enters "Joker#100" as password
#Then User clicks on Login button
#Then User is on home page
#Then User LogOut the application

#We can write in below format also
#Then User enters username
#And User enters password

#We can write in below format also
#Then User enters username
#Then User enters password


#With Examples Keyword

Scenario Outline: Amazon Login Test Scenario

Given User is already on Login Page
When Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
#Data Driven Testing
Then User enters "<username>" as username and User enters "<password>" as password
Then User clicks on Login button
Then User is on home page
Then User LogOut the application

Examples: 
#for every example it will execute above scenario from start to end

|username|password|
|akshayshete10024@gmail.com|Joker#100|