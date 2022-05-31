import { Component } from 'react';
import LessonOne from './lesson-1/Lesson1';
import './App.css';

const links = [
	'Homework #1',
	'Homework #2',
	'Homework #3',
	'Homework #4',
	'Homework #5',
	'Homework #6',
	'Homework #7',
	'Homework #8',
];
const res = links.map((element, index) => (
	<li key={index}>
		<a className="lesson-link" href={`/lesson-${index + 1}`}>
			{element}
		</a>
	</li>
));
console.log(res);

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <h1>Aston React Intesive</h1>
				<nav>
					<ul className="lesson-links">{res}</ul>
				</nav> */}
				<LessonOne />
			</div>
		);
	}
}

export default App;
