import Cookies from "js-cookie";

export default class Authentication {
	setCookies(accountInfo) {
		if (accountInfo) {
			Cookies.set("currentAccount", JSON.stringify(accountInfo), {
				expires: 1,
			});
		}
	}

	removeCookies() {
		Cookies.remove("currentAccount");
	}

	getCookies() {
		return JSON.parse(Cookies.get("currentAccount"));
	}

	getAccountInfo(username, password, accountList) {
		if (accountList) {
			return accountList.find(
				(account) =>
					account.username === username && account.password === password
			);
		}
	}

	isUserAuthenticated() {
		return (
			!!Cookies.get("currentAccount") && !!Cookies.get("currentAccount").length
		);
	}
}
