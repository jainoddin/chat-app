import express  from "express";
import { login, logout,signup } from "../controliers/auth.controliers.js";



const router =express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

export default router