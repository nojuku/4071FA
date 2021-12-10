function list(a)
{
	var i;
	
	// A0 - B0
	for (i = 0; i < 88; i++)
		outlet(0, "setvalue", i + 1, 0);
	// C1
	for (i = 0; i < arguments.length; i++) {
		outlet(0, "setvalue", arguments[i] - 8, 55);
	}
}
