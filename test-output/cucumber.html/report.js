$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/akshay.shete/workspace/AmazonBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Login Feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Amazon Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
    },
    {
      "line": 8,
      "value": "##Data Driven Testing"
    },
    {
      "line": 9,
      "value": "#Then User enters \"akshayshete10024@gmail.com\" as username and User enters \"Joker#100\" as password"
    },
    {
      "line": 10,
      "value": "#Then User clicks on Login button"
    },
    {
      "line": 11,
      "value": "#Then User is on home page"
    },
    {
      "line": 12,
      "value": "#Then User LogOut the application"
    },
    {
      "line": 14,
      "value": "#We can write in below format also"
    },
    {
      "line": 15,
      "value": "#Then User enters username"
    },
    {
      "line": 16,
      "value": "#And User enters password"
    },
    {
      "line": 18,
      "value": "#We can write in below format also"
    },
    {
      "line": 19,
      "value": "#Then User enters username"
    },
    {
      "line": 20,
      "value": "#Then User enters password"
    },
    {
      "line": 23,
      "value": "#With Examples Keyword"
    }
  ],
  "line": 24,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Data Driven Testing"
    }
  ],
  "line": 29,
  "name": "User enters \"\u003cusername\u003e\" as username and User enters \"\u003cpassword\u003e\" as password",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User LogOut the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 36,
      "id": "amazon-login-feature;amazon-login-test-scenario;;1"
    },
    {
      "cells": [
        "akshayshete10024@gmail.com",
        "Joker#100"
      ],
      "line": 37,
      "id": "amazon-login-feature;amazon-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Data Driven Testing"
    }
  ],
  "line": 29,
  "name": "User enters \"akshayshete10024@gmail.com\" as username and User enters \"Joker#100\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User LogOut the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 15943730883,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.check_Title()"
});
formatter.result({
  "duration": 17367949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akshayshete10024@gmail.com",
      "offset": 13
    },
    {
      "val": "Joker#100",
      "offset": 70
    }
  ],
  "location": "LoginStepDefination.user_enters_as_username_and_User_enters_as_password(String,String)"
});
formatter.result({
  "duration": 2317836850,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3482611276,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 89269144,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_logout_the_application()"
});
formatter.result({
  "duration": 2209908112,
  "status": "passed"
});
});