/* FOR HOME SCREEN */
/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("sideNavRight").style.width = "250px";
	$('#navbarTop').hide();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("sideNavRight").style.width = "0";
	$('#navbarTop').delay(1000).show();
}

/* FOR OTHERS SCREEN */
/* Set the width of the side navigation to 250px */
function openRightNav() {
	document.getElementById("navbar-home").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeRightNav() {
	document.getElementById("navbar-home").style.width = "0";
}

function openShopNav() {
	var navbarShoplist = document.getElementById("navbar-shoplist");
	var btnToggleShoplist = document.getElementById("btn-toggle-shoplist");

	if (navbarShoplist.style.display === 'none') {

		navbarShoplist.style.display = 'block';
		btnToggleShoplist.style.left = '337px';

	} else {
		
		navbarShoplist.style.display = 'none';
		btnToggleShoplist.style.left = '0';
	}

}

