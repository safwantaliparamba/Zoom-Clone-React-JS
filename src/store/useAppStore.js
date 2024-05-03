/** @format */

import { create } from "zustand";

const useAppStore = create((set, get) => ({
	token: "",
	generateToken: async (
		arags = {
			topic: "Cool cars",
			password: "randomPassword123",
			userId: "1",
			sessionKey: "session123",
			roleType: "user123",
		}
	) => {
		const res = await fetch("http://localhost:8000/generate", {
			body: JSON.stringify(arags),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		const token = await res.json();
		set({ token: token });
	},
}));

export default useAppStore;
