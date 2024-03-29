var testName = "Test 1";

var target = UIATarget.localTarget();

var app = target.frontMostApp();

var window = app.mainWindow();


//--
UIALogger.logStart( testName );

app.logElementTree();


//-- select the elements
UIALogger.logMessage( "Select the first tab" );

var tabBar = app.tabBar();
var selectedTabName = tabBar.selectedButton().name();
if (selectedTabName != "First") {
	tabBar.buttons()["First"].tap();
}



//-- tap on the text fiels
UIALogger.logMessage( "Tap on the text field now" );

var recipeName = "Unusually Long Name for a Recipe";
window.textFields()[0].setValue(recipeName);

target.delay( 2 );

//-- tap on the text fiels
UIALogger.logMessage( "Dismiss the keyboard" );

//app.logElementTree();

//app.keyboard().buttons()["return"].tap();
app.keyboard().typeString("\n");

var textValue = window.staticTexts()["RecipeName"].value();

UIALogger.logMessage( "text value=" + textValue  );


if (textValue === recipeName){
	UIALogger.logMessage("We passed!");
    	//Wait a moment
    target.delay(1);
	UIALogger.logPass( testName ); 
}
else{
	UIALogger.logMessage("We Failed!");
	UIALogger.logFail( testName ); 
	UIALogger.logFail( testName ); 
}
