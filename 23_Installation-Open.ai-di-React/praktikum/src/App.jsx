import "./App.css";
import { addMessage } from "./store/openai/chat";
import { openai } from "./configs/openai";
import { Space, Spin } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Markdown from "react-markdown";

function App() {
	const dispatch = useDispatch();

	const [prompt, setPrompt] = useState("");
	const [title, setTitle] = useState("Contoh Penggunaan");
	const [apiResponseContent, setApiResponseContent] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const result = await openai.chat.completions.create({
				messages: [
					{
						role: "system",
						content: "You will only write the answer in Markdown format.",
					},
					{ role: "user", content: prompt },
				],
				model: "gpt-3.5-turbo",
			});

			const conversationPair = {
				user: { role: "user", content: prompt },
				assistant: {
					role: "assistant",
					content: result.choices[0].message.content,
				},
			};

			dispatch(addMessage(conversationPair));

			const promptArray = prompt.split(" ");
			const titleArray = promptArray.map((word) => {
				return word.charAt(0).toUpperCase() + word.slice(1);
			});
			const title = titleArray.join(" ");
			setTitle(title);

			setApiResponseContent(result.choices[0].message.content);
		} catch (e) {
			setApiResponseContent("Something went wrong. Please try again.");
		}

		setPrompt("");
		setLoading(false);
	};

	return (
		<main className="container">
			<h1 className="title">Program OpenAI Sederhana</h1>
			<form
				onSubmit={handleSubmit}
				className="form"
			>
				<textarea
					type="text"
					cols={50}
					rows={5}
					value={prompt}
					placeholder="Tanya OpenAI"
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<button
					className="generate-button"
					disabled={loading || prompt.length === 0}
					type="submit"
				>
					{loading ? "Generating..." : "Generate"}
				</button>
			</form>
			{!apiResponseContent && !loading && (
				<div className="response-container">
					<h1 className="response-title">{title}</h1>
					<hr />
					<textarea
						type="text"
						placeholder="Apa itu React?"
						cols={50}
						rows={1}
						style={{ display: "block", margin: "auto", textAlign: "center" }}
						disabled
					/>
					<Markdown className="response-content">
						{`
						\n# Apa itu React?
						\nReact adalah pustaka JavaScript untuk membangun antarmuka pengguna. Ini adalah pustaka JavaScript yang sangat populer yang digunakan oleh banyak perusahaan besar seperti Facebook, Instagram, Netflix, Twitter, dan banyak lagi.
						`}
					</Markdown>
				</div>
			)}
			{apiResponseContent && !loading && (
				<div className="response-container">
					<h1 className="response-title">{title}</h1>
					<hr />
					<Markdown className="response-content">{apiResponseContent}</Markdown>
				</div>
			)}
			{loading && (
				<Space
					size="middle"
					className="loading-spinner"
				>
					<Spin size="large" />
				</Space>
			)}
		</main>
	);
}

export default App;
