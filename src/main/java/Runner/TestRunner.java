package Runner;

import org.apache.log4j.Logger;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\akshay.shete\\workspace\\AmazonBDDFramework\\src\\main\\java\\Features\\login.feature", //path of feature file in Features tag
glue = {"stepDefinations"}, //path of StepDefination in Glue tag
format={"pretty","html:test-output/cucumber.html","json:json-output/cucumber.json","junit:junit-xml/cucumber.xml"}, //format of report generation
dryRun= false, //make it true :- to check for every step of scenario we hve defined stepDefaination or not and later make it false
monochrome = true, //make it true :- for readable console output
strict = true //make it true :- It will failed execution if any stepDefination method is missing for the scenario steps
//tags={"~@RegressionTest","@SanityTest"} // , means OR :-  a test cases which have both the tags defined and ~ is for ignore
)

public class TestRunner 
{
	
	
	// Hookes in cucumber are some common methods for all scenarios. For example : Open Browser, Logout, DBConnection etc.
	//@Before :- we write for Open Browser/DBConnection and it will execute before every scenario
	//@After :- we write for Logout and it will execute after every scenario
	//The above hooks are known as Global Hooks. It will executed before and after of each scenario
	
	//@Before("@First") :- It will execute only for a scenario/s who have @First tag
	//@After("@First") :- It will execute only for a scenario/s who have @First tag
	//The above hooks are known as Local Hooks. It will execute once Global Hooks executed.
}
