package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\akshay.shete\\workspace\\AmazonBDDFramework\\src\\main\\java\\Features\\loginMap.feature", //path of feature file in Features tag
glue = {"stepDefinations"}, //path of StepDefination in Glue tag
format={"pretty","html:test-output/cucumber.html","json:json-output/cucumber.json","junit:junit-xml/cucumber.xml"}, //format of report generation
dryRun= false, //make it true :- to check for every step of scenario we have defined stepDefination or not and later make it false
monochrome = true, //make it true :- for readable console output
strict = true //make it true :- It will failed execution if any stepDefination method is missing for the scenario steps
)

public class TestRunner 
{

}
