function palindrome(text) {
	for (let i = 0, j = text.length - 1; i < j; i++, j--)
		if (text[i] != text[j]) return false;
	
	return true;
}

function doorStatus(ruwaida, amina, zainab) {
	if (!ruwaida && (amina || zainab)) return true;
	return false;
}

module.exports = {palindrome, doorStatus};
