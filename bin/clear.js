/*
* Clears terminal screen
* Author : Vereis~
*/

function clear(args)
{
    var helpDesc = ["This function clears the current terminal and repopulates it."];
	
	if (args[0] == "help")
	{
		print(printHelp(helpDesc));
	}
	else
	{
		$("#terminal > *").remove(); // Clear the screen
	}
    respond("!br"); // We don't want a newline
}