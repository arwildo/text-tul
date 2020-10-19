import React from 'react';

class Tools extends React.Component {
	constructor(props) {
		super();

		this.state = {
			text: []
		};

		this.allCaps = this.allCaps.bind(this);
		this.allLows = this.allLows.bind(this);
		this.upperFirst = this.upperFirst.bind(this);
		this.reverseText = this.reverseText.bind(this);
	}

	// Convert to all to uppercase
	allCaps() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.toUpperCase()
			});
		}
	}

	// Convert to all to lowercase
	allLows() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.toLocaleLowerCase()
			});
		}
	}

	// Convert the first char in every word to uppercase
	upperFirst() {
		if (this.nameTextInput !== null) {
			let string = this.nameTextInput.value;
			function capitalizeFirstLetters(str) {
				return str.toLowerCase().replace(/^\w|\s\w/g, function(letter) {
					return letter.toUpperCase();
				});
			}

			this.setState({
				text: capitalizeFirstLetters(string)
			});
		}
	}
	// Reverse text abc to cba
	reverseText() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.split('').reverse().join('')
			});
		}
	}

	render() {
		return (
			<div class="bg-gray-100">
				<div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
					<div class="max-w-4xl mx-auto">
						<div class="bg-white shadow overflow-hidden sm:rounded-lg">
							<div class="px-4 py-5 border-b border-gray-200 sm:px-6">
								<h3 class="text-lg leading-6 font-medium text-gray-900">Logo</h3>
								<p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">Simple tools for your text</p>
								<div class="pl-3 pr-4 py-3 justify-center text-sm leading-5">
									<textarea
										type="text"
										placeholder="Input ... "
										ref={(ref) => (this.nameTextInput = ref)}
										className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-6 pl-8 block w-full h-32 appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-200 bg-gray-200"
									/>
									<br />
									<div className="flex justify-center">
										<br />
										<button
											type="button"
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
											onClick={this.allCaps}
										>
											t-T
										</button>
										<button
											type="button"
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
											onClick={this.allLows}
										>
											T-t
										</button>
										<button
											type="button"
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
											onClick={this.upperFirst}
										>
											abc-Abc
										</button>
										<button
											type="button"
											onClick={this.reverseText}
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
										>
											abc-cba
										</button>
									</div>
									<br />
									<textarea
										type="text"
										placeholder="Output ... "
										value={this.state.text}
										className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-6 pl-8 block w-full h-32 appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-200 bg-gray-200"
									/>
								</div>
								<div className="flex justify-center">
									<br />
									<button
										type="button"
										className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
										onClick={this.allCaps}
									>
										Copy
									</button>
									<button
										type="button"
										className="m-1 bg-white hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
										onClick={this.allLows}
									>
										Clear
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tools;
