import React from "react"


function About() {
    return (
			<div className="about-section">
				<h1>About</h1>
				<p>
					The man, the myth, the legend - Ron Swanson! He is the boss we all
					wish we had. So when I stumbled upon this awesome{" "}
					<strong>Ron Swanson's quote</strong> API by{" "}
					<a
						href="https://github.com/jamesseanwright/"
						target="_blank"
						rel="noreferrer"
					>
						James Sean Wright
					</a>{" "}
					I definitely had to make use of it. This is a fun project built in
					React.js and using Axios to make AJAX calls to an API. Learn more
					about the character below.
				</p>

				<p>
					Ronald Ulysses Swanson is a fictional character portrayed by Nick
					Offerman from the situation comedy television series Parks and
					Recreation on NBC, created by Greg Daniels and Michael Schur. In the
					series, Ron is the director of the Parks and Recreation department of
					fictional town of Pawnee, Indiana, and the immediate superior of
					series protagonist Leslie Knope (Amy Poehler) until Knope's election
					to the Pawnee City Council at the end of Season 4. In demeanor,
					political philosophy and work ethic, Knope and Swanson are polar
					opposites: where Knope is sunny and outgoing, decidedly tolerant and
					constantly working, Swanson is distant, and as a staunch libertarian,
					is a strong advocate for small government—stating his belief that
					government should be privatized—and therefore believes that the parks
					department should not even exist. He says he is there to rot the beast
					from the inside. -{" "}
					<a
						href="https://en.wikipedia.org/wiki/Ron_Swanson"
						target="_blank"
						rel="noreferrer"
					>
						Wikipedia
					</a>
				</p>
			</div>
		);
}

export default About