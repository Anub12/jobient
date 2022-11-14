import React from 'react';
import '../Navbar/Navbar.css';

// const Navbar = () => {
//     return (
//         // <div>
//         //     <div className='nav-bar'>
//         //     <ul><a className='nav-link' href='/home'>Home</a></ul>
//         //     <ul><a className='nav-link' href='/governmentjobs'>Government Jobs</a></ul>
//         //     <ul><a className='nav-link' href='/privatejobs'>Private Jobs</a></ul>
//         //     <ul><a className='nav-link' href='/special'>Special</a></ul>
//         //     <ul><a className='nav-link' href='/contact-us'>Contact Us</a></ul>
//         //     </div>
//         // </div>
//         <div>
//             <nav class="navbar background">
//                 <ul class="nav-list">
//                     <div class="logo">
//                         <img src='' alt="we have an image here" />
//                     </div>
//                     <li><a href='#privatejobs'>Private Jobs</a></li>
//                     <li><a href='#governmentjobs'>Government Jobs</a></li>
//                     <li><a href='#specialopportunities'>Special Opportunities</a></li>
//                     <li><a href='#students'>Students</a></li>
//                     <li><a href='#competitivecoding'>Competitive Coding</a></li>
//                 </ul>
//                 <div class="rightNav">
//                     <input type="text" name="search" id="search" />
//                     <button class="btn btn-sm">Search</button>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default ;

function Navbar() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src="https://www.freepnglogos.com/uploads/starbucks-logo-png-25.png" /*src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"*/ alt="here we have an image" />
					</div>
					<li><a href="#latestjobs">Latest Jobs</a></li>
					<li><a href="#results">Results</a></li>
					<li><a href="#admitcard">Admit Card</a></li>
					<li><a href='#student'>Student</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			
            This have added navbar and footer for our website
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default Navbar;