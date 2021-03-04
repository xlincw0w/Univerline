import React from 'react'
import image from './imageCo.jpg';
import Button from '@material-ui/core/Button';

export default function Auth() {



    return (


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

       
     
    )

}
