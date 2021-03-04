import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames'
import image from '../Auth/img/imageCo.jpg';


export default function Auth({tools}) {

    return (


		<div className =" bg-insc rounded-lg  p-14 shadow-2xl" >
            
               
        
					{/* card white*/} 
				<div className=" bg-white shadow-2xl p-14 rounded-lg mb-1  h-insc">

						<div className="flex content-center justify-center mb-4 ">
									<p className="text-black text-4xl">Connexion </p>
						</div>

		  {/* j'ai divisé la card blanche en deux grid*/} 
			  <div className="lg:grid grid-cols-2  sm:grid grid-rows-2">
					{/* premier grid*/} 
				  <div className="lg:py-28 md:mx-auto lg:mx-auto ">
					  <div class="flex flex-wrap justify-center">

						  <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
						  <button
							  class="w-full rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
							  type="button"
						  >Facebook</button>
						  </div>

						  <div class="w-full mb-3 sm:w-1/2 sm:pl-2">
						  <button
							  class="w-full rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
							  type="button"
						  > Google</button>
						  </div>
					  </div>
					  <div className="flex justify-center items-center ">
					  <img className="object-cover " src={image}  atl="iage" />
					  </div>
					  <hr className="mt-8 border-t" />
					  <div className="text-center py-4">
							  <a
								  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								  href="./register.html"
							  >
								  Créer un compte
							  </a>
						  </div>
					 </div>   
									  
			  
						{/* deuxième grid*/} 
				  <div className="sm:py-28 flex content-center justify-center">
					  <div>
							 
						  <div className="mb-2 ml-3 mr-4">
							  <label className="block text-gray-900 mb-2">Identifiant</label>
							  <input type="text" className="w-full px-2 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
							   </div>

						  <div className="mb-4 ml-3 mr-4" >
							  <label className="block text-gray-900 mb-2">Mot de passe</label>
							  <input type="text" className="w-full px-2 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
						</div>
						 
						 <div className="mb-2 ml-6">
							 <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								  href="./register.html"> Mot de passse oublié</p>
						 </div>

						  <div>
						  <button   type="submit"  className=" w-96  px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Se connecter</button>
						  </div>
					</div>
				  </div>
			</div>
	  
		</div> 
		  

	  </div>



      
    
     
    )

}



{/**

	  <div className="font-mono bg-blue-500 rounded-lg">
		
		<div className="container mx-auto shadow-2xl ">
			<div className="flex justify-center px-6 my-12">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto bg-white hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
						<img className="mx-auto py-24"src={image} alt="image"/>
					</div>
					
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="px-8 mb-4 text-center">
							<h3 className="pt-4 mb-2 text-2xl">Connexion</h3>
							
						</div>
						<div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address..."
								/>   
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Password
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder=""
								/>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Se connecter
								</button>
							</div>
							<hr className="mb-12 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Créer un compte!
								</a>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</div>
</div>



*/}