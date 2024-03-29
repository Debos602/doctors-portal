import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import 'react-day-picker/dist/style.css';

function App() {
	return (
		<div className="max-w-[1440px] mx-auto font-[Open-Sans]">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
