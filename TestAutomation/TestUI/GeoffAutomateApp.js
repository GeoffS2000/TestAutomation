var target = UIATarget.localTarget();

for (var counter = 1; counter < 100; counter++){
target.frontMostApp().mainWindow().textFields()["User Text"].tap();
target.frontMostApp().keyboard().typeString("geoff Spaeth\n");
target.frontMostApp().tabBar().buttons()["Second"].tap();
target.frontMostApp().tabBar().buttons()["First"].tap();
target.frontMostApp().mainWindow().textFields()["User Text"].buttons()["Clear text"].tap();
target.frontMostApp().keyboard().typeString("\n");
}