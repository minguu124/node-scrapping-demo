"use strict";
import passport from "passport";

const isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	return res.redirect("/login");
};

const isNotAuthenticated = (req, res, next) => {
	if (!req.isAuthenticated()) return next();
	return res.redirect("/auth");
};

const authenticateLogin = passport.authenticate("local-login", {
	successRedirect: "/auth",
	failureRedirect: "/login",
});

const authenticateRegister = passport.authenticate("local-register", {
	successRedirect: "/auth",
	failureRedirect: "/register",
});

export {
	isAuthenticated,
	isNotAuthenticated,
	authenticateLogin,
	authenticateRegister,
};
