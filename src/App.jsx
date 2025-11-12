import ListPage from "./routes/listPage/ListPage";
import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/homePage"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singePage/SinglePageg";
import ProfilePage from "./routes/profilePage/ProfilePage";

function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: (<Layout/>),
			children:[
				{
					path: "/",
					element: <HomePage/>
				},
				{
					path: "/list",
					element: <ListPage/>
				},
				{
					path:"/profile",
					element: <ProfilePage/>
				},
				{
					path: '/:id',
					element: <SinglePage/>
				}
			]
		},
	]);
  return (
    // <div className="layout">
	// 	<div className="navbar">
	// 		<Navbar/>
	// 	</div>
	// 	<div className="content">
	// 		<HomePage/>
	// 	</div>
	// </div>
	<RouterProvider router={router}/>

  )
}

export default App