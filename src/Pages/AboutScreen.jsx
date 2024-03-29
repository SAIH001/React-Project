import React from 'react'
import Gallery from '../Gallery'

const AboutScreen = () => {
  return (
<div class="main-wrapper ">
<section class="page-title bg-2">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item"><a href="index.html" class="text-sm letter-spacing text-white text-uppercase font-weight-bold">Home</a></li>
            <li class="list-inline-item"><span class="text-white">|</span></li>
            <li class="list-inline-item"><a href="#" class="text-color text-uppercase text-sm letter-spacing">About us</a></li>
          </ul>
           <h1 class="text-lg text-white mt-2">What we are</h1>
      </div>
    </div>
  </div>
</section>



<section class="section about">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-3 col-md-6">
				<img src="images/about/img-6.jpg" alt="" class="img-fluid"/>
			</div>
			<div class="col-lg-3 mt-lg-4 col-md-6">
				<img src="images/about/img-7.jpg" alt="" class="img-fluid"/>
			</div>
			<div class="col-lg-6 col-md-12">
				<div class="about-item position-relative mt-5 mt-lg-0">
					<span class="h5 text-lg text-muted">Est:1990</span>
					<h2 class="mt-1 mb-3">Having <span class="text-color">10 years</span> of experience in fitness</h2>

					<p class="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</p>

					<a href="service.html" class="btn btn-main">Services<i class="ti-angle-right ml-2"></i></a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section why">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8 text-center">
				<div class="section-title">
					<div class="divider mb-3"></div>
					<h2>Why CHoose us</h2>
				</div>
			</div>
		</div>

		<div class="row ">
			<div class="col-lg-4 col-md-6">
				<div class="card p-4 text-center mb-4 border-0 bg-black-50 rounded-0 ">
					<i class="icofont-dumbbells text-lg text-color"></i>
					<h3 class="mt-3 text-white">Modern Equipment</h3>
					<p class="mt-3 mb-4 text-white">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card p-4 text-center border-0 mb-4 rounded-0">
					<i class="icofont-muscle text-lg text-color"></i>
					<h3 class="mt-3">PROFFESIONAL TRAINer</h3>
					<p class="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card p-4 text-center border-0 mb-4 rounded-0 bg-black-50">
					<i class="icofont-fruits text-lg text-color"></i>
					<h3 class="mt-3 text-white">HEALTHY DIET Plan</h3>
					<p class="mt-3 mb-4 text-white">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="card p-4 text-center border-0 rounded-0 ">
					<i class="icofont-thumbs-up text-lg text-color"></i>
					<h3 class="mt-3">24/7 Helping People</h3>
					<p class="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card p-4 text-center border-0 rounded-0 bg-black-50">
					<i class="icofont-ui-fire-wall text-lg text-color"></i>
					<h3 class="mt-3 text-white">Unique to Your Needs</h3>
					<p class="mt-3 mb-4 text-white">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card p-4 text-center border-0 rounded-0">
					<i class="icofont-bill-alt text-lg text-color"></i>
					<h3 class="mt-3">Online payment</h3>
					<p class="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<Gallery/>


   </div>

  )
}

export default AboutScreen