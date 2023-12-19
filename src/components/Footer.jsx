import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faTwitter,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AshiqurSignature = "/assets/logo/Ashiqur_signature.svg";

const footercontent = {
	products1: [
		{ id: 1, text: "Netflix", to: "/netflix" },
		{ id: 2, text: "Youtube", to: "/youtube" },
		{ id: 3, text: "Instagram", to: "/instagram" },
		{ id: 4, text: "Spotify", to: "/spotify" },
		{ id: 5, text: "Apple", to: "/apple" }
	],
  products2: [
		{ id: 6, text: "Amazon", to: "/amazon" },
		{ id: 7, text: "Chat Gpt", to: "/chatgpt" },
		{ id: 8, text: "Unsplash", to: "/unsplash" },
		{ id: 9, text: "Todo List", to: "/todo-list" },
		{ id: 10, text: "Weather", to: "/weather" },
	],
	contacts: [
		{
			id: 1,
			text: "Portfolio",
			icon: <FontAwesomeIcon icon={faGlobe} />,
			to: "https://ashiqurrahaman02.github.io/",
		},
		{
			id: 2,
			text: "Mail",
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			to: "mailto:ashiqur999999@gmail.com",
		},
		{
			id: 3,
			text: "Github",
			icon: <FontAwesomeIcon icon={faGithub} />,
			to: "https://github.com/AshiqurRahaman02",
		},
		{
			id: 4,
			text: "Twitter",
			icon: <FontAwesomeIcon icon={faTwitter} />,
			to: "https://twitter.com/ashik_0273791",
		},
		{
			id: 5,
			text: "Linkedin",
			icon: <FontAwesomeIcon icon={faLinkedin} />,
			to: "https://www.linkedin.com/in/ashiqur-rahaman-76b010255/",
		},
		{
			id: 6,
			text: "Instagram",
			icon: <FontAwesomeIcon icon={faInstagram} />,
			to: "https://www.instagram.com/_ashik__02/",
		},
	],
	pages: [
		{ id: 1, text: "Home", to: "/" },
		{ id: 2, text: "Explore", to: "/explore" },
		{ id: 3, text: "About", to: "/about" },
	],
};

function Footer() {
	return (
		<div>
			<section className="footer">
				<div>
					<h3>Products</h3>
					<ul>
						{footercontent.products1.map((product) => (
							<li>
								<Link
									key={product.id}
									to={product.to}
                  className="link"
									target="_blank"
								>
									<span className="span">{product.text}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
        <div>
          <h3 style={{opacity:0}}>Products</h3>
        <ul>
						{footercontent.products2.map((product) => (
							<li>
								<Link
									key={product.id}
									to={product.to}
                  className="link"
									target="_blank"
								>
									<span className="span">{product.text}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Pages</h3>
					<ul>
						{footercontent.pages.map((page) => (
							<li>
								<Link
									key={page.id}
									to={page.to}
                  className="link"
									target="_blank"
								>
									<span className="span">{page.text}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Contact</h3>
					<ul>
						{footercontent.contacts.map((contact) => (
							<li>
								<Link
									key={contact.id}
									to={contact.to}
                  className="link"
									target="_blank"
								>
									{contact.icon}{" "}
									<span className="span">{contact.text}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<img
						src={AshiqurSignature}
						alt="Ashiqur Signature"
						width={"150px"}
					/>
					<p style={{maxWidth:"300px"}}>
						A skilled Full-Stack Web Developer with expertise in ReactJS
						for Frontend Development and Node.js for Backend Development,
						seeking to further enhance their skills and contribute to the
						industry.
					</p>
          <button className="info shine"  style={{marginTop:"10px"}}><Link to={"tel:+918697835401"} >Hire me</Link></button>
				</div>
			</section>
		</div>
	);
}

export default Footer;
