import { useContext } from "react";
import { AppContext } from '../App'
import { useQuery } from "@tanstack/react-query";
import Axios from 'axios'

export const Home = (props) => {
	const { username } = useContext(AppContext)
	const { data: catData, isLoading, refetch } = useQuery({
		queryKey: ['cat'],
		queryFn: () => {
			return Axios.get('https://catfact.ninja/fact').then((res) => res.data)
		}
	})

	return (
		<div>
			<h1>THIS IS THE HOME PAGE and user is: {username}</h1>
			<h2>Did you know that: </h2>
			{isLoading ? <h2> Loading... </h2> : <p> {catData?.fact} </p>}
			<button onClick={refetch}> Update Fact </button>
		</div>
	)
};
