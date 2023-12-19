import express from "express";
import helmet from "helmet";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(
	helmet({
		strictTransportSecurity: { maxAge: 31536000, includeSubDomains: true },
	})
);
/* --------------------------- chatgpt --------------------------- */
/* --------------------------------------------------------------- */
app.get("/", (req, res) => {
	res.json("Hello World!");
});

app.listen(PORT, () => {
	console.log(`express server running at port ${PORT}`);
});
