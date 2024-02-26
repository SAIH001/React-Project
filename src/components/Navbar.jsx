import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   
   <nav class="navbar navbar-expand-lg navigation fixed-top" id="navbar">
	<div class="container-fluid">
		<Link class="navbar-brand" to="/">
			<h2 class="text-white text-capitalize">Gym<span class="text-color">Fit</span></h2>
		</Link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
			aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
			<span class="ti-view-list"></span>
		</button>
		<div class="collapse text-center navbar-collapse" id="navbarsid">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item active">
					<Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
				</li>
				{/* <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">Pages.</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="about.html">About</a></li>
						<li><a class="dropdown-item" href="trainer.html">Trainer</a></li>
						<li><a class="dropdown-item" href="course.html">Courses</a></li>
					</ul>
				</li> */}
				<li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
				<li class="nav-item"><a class="nav-link" href="service.html">Courses</a></li>
				<li class="nav-item"><a class="nav-link" href="pricing.html">Memebership</a></li>
				<li class="nav-item"><a class="nav-link" href="pricing.html">Trainer</a></li>
				<li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
				{/* <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">Blog.</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="blog.html">Blog Grid</a></li>
						<li><a class="dropdown-item" href="blog-sidebar.html">Blog Sidebar</a></li>
						<li><a class="dropdown-item" href="blog-single.html">Blog Details</a></li>
					</ul>
				</li> */}
				<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
			</ul>
			<div class="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
				<a href="tel:+23-345-67890">
					<h3 class="text-color mb-0"><i class="ti-mobile mr-2"></i>+23-563-5688</h3>
				</a>
			</div>
		</div>
	</div>
</nav>
   </>
  );
}

export default Navbar